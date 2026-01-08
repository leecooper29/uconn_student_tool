import React, { createContext, useEffect, useState } from "react";

type User = {
  name: string;
};

type AuthContextType = {
  user: User | null;
  login: (name: string, remember?: boolean) => void;
  logout: () => void;
};

// default no-op context to avoid consumers checking for undefined
const defaultAuth: AuthContextType = {
  user: null,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultAuth as unknown as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // do NOT auto-restore user from localStorage — avoid signing in by default
  const [user, setUser] = useState<User | null>(null);

  const login = (name: string, remember = false) => {
    const u = { name };
    setUser(u);
    try {
      if (remember) localStorage.setItem("uconn_user", JSON.stringify(u));
    } catch (err) {
      // ignore storage errors
    }
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem("uconn_user");
    } catch (err) {
      // ignore
    }
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

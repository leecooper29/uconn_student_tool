import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../shared/ui/layout/main-nav/contexts/AuthContext";
import "./signin.css";

function SignIn() {
  const [username, setUsername] = useState("lee");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    if (params.get("intent") !== "profile") {
      navigate("/home-page", { replace: true });
    }
  }, [search, navigate]);

  useEffect(() => {
    if (auth?.user) {
      navigate("/home-page", { replace: true });
    }
  }, [auth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = username || "Lee";
    auth?.login(name, true);
    navigate("/home-page", { replace: true });
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h1>Sign In</h1>
        <form className="signin-form" onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">
            Sign In
          </button>
          <p className="signin-footer">Forgot your password?</p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
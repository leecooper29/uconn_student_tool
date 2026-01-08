import "./header.css";
import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "./ui/layout/main-nav/contexts/AuthContext";

function Header() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  // navigation will be handled by Links below for accessibility

  return (
    <>
      <header>
        <div className="header-left" onClick={() => navigate("/")}>
          <p className="title">Uconn Network |</p>
        </div>
        <div className="">
          <nav className="header-nav">
            <ul className="user">
              <li>search (a-z)</li>
              {/* search input here */}
              {auth?.user ? (
                <li>
                  <Link to="/home" className="profile-link">
                    <span className="avatar">{auth.user.name.charAt(0).toUpperCase()}</span>
                    <span style={{ marginLeft: 8, color: "white" }}>{auth.user.name}</span>
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/signin?intent=profile">Profile</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

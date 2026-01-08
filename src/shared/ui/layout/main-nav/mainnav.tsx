import { Link, useNavigate } from "react-router-dom";
import "./mainnav.css";
import { useEffect, useRef, useState, useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

function MainNav() {
  const [isCampusOpen, setIsCampusOpen] = useState(false);
  const [isTutoringOpen, setIsTutoringOpen] = useState(false);
  const [selectedCampus, setSelectedCampus] = useState("Campus");
  
  const campusDropDownRef = useRef<HTMLLIElement | null>(null);
  const tutoringDropDownRef = useRef<HTMLLIElement | null>(null);
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleCampusClick = (campus: string) => {
    setSelectedCampus(campus);
    setIsCampusOpen(false);
  };

  const handleTutoringClick = (service: string) => {
    navigate("/tutoring", { state: { service } });
  };

  const toggleCampusDropdown = () => setIsCampusOpen((prev) => !prev);
  const toggleTutoringDropdown = () => setIsTutoringOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        campusDropDownRef.current &&
        !campusDropDownRef.current.contains(event.target as Node)
      ) {
        setIsCampusOpen(false);
      }
      if (
        tutoringDropDownRef.current &&
        !tutoringDropDownRef.current.contains(event.target as Node)
      ) {
        setIsTutoringOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="main-nav">
      <ul className="nav-items">
        <li><Link to="/home-page">Home ^</Link></li>
        <li><Link to="/network">My Network ^</Link></li>
        <li><Link to="/">Sporting Events ^</Link></li>

        {/* Campus dropdown */}
        <li className="dropdown" ref={campusDropDownRef}>
          <span onClick={toggleCampusDropdown} className="dropdown-label">
            {selectedCampus} ^
          </span>
          {isCampusOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleCampusClick("Storrs")}>Storrs</li>
              <li onClick={() => handleCampusClick("Hartford")}>Hartford</li>
              <li onClick={() => handleCampusClick("Avery Point")}>Avery Point</li>
              <li onClick={() => handleCampusClick("Waterbury")}>Waterbury</li>
              <li onClick={() => handleCampusClick("Stamford")}>Stamford</li>
            </ul>
          )}
        </li>
        {/* Tutoring dropdown */}
        <li className="dropdown" ref={tutoringDropDownRef}>
          <span onClick={toggleTutoringDropdown} className="dropdown-label">
            Tutoring Services ^
          </span>
          {isTutoringOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleTutoringClick("Math Tutoring")} >Calculus Tutoring</li>
              <li onClick={() => handleTutoringClick("Writing Center")}>Writing Center</li>
              <li onClick={() => handleTutoringClick("Science Tutoring")}>Computer Science Tutoring</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
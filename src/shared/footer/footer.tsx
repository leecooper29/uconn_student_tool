import "./footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {

  const footerLinks = [
    { name: "About Us", url: "/https://stamford.uconn.edu/academics/undergraduate/" },
    { name: "Contact", url: "/https://stamford.uconn.edu/academics/undergraduate/" },
    { name: "Student Services", url: "/https://stamford.uconn.edu/academics/undergraduate/" },
    { name: "Terms of Service", url: "/https://stamford.uconn.edu/academics/undergraduate/" },
  ];

  return (
    <footer>
      <div className="sub-footer-container">
        {/* <img alt="college logo"></img> */}
          <p className="footer-title">Uconn Network |</p>
        </div>
      <div className="f-container">
        <div className="footer-container">
          <div className="footer-links">
            {footerLinks.map((link) => (
              <a key={link.name} href={link.url} className="f-link">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="s-list">
          {/* <FaInstagram /> */}
          <div className="s-icon">
          <FaFacebook />
          </div>
          <div className="s-icon">
          <FaSquareXTwitter />
          </div>
          <div className="s-icon">
          <FaYoutube />
          </div>
          <div className="s-icon">
          <FaLinkedin />
          </div>
        </div>
          {/* <p className="icons">social media icons</p> */}
      </div>
    </footer>
  );
}

export default Footer;

import { useState } from "react";
import "./networkbar.css";
function networkBar() {

  const [searchTerm, setSearchTerm] = useState(""); 
  const networkItems = ["Chose Major", "Select Year", "Some text"];
  
  return (
    <>
      <div>
        <div className="network-bar">
          <p className="network">My Network</p>
          <div className="network-bar-header">
            <input
              type="text"
              placeholder="search student..."
              className="network-searchbar"
            />
          </div>
          <div>
          </div>
        </div>
        {/* <div>
          <nav>
            <ul className="network-items">
              {networkItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </nav>
        </div> */}
      </div>
    </>
  );
}
export default networkBar;

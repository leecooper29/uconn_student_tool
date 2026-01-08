import "./network.css";
import Profile from "../student-page/ui/profile";
import StudentServices from "../student-page/ui/studentServices";
import StudentClubGrid from "./studentClubGrid/studentClubGrid";

function Network() {
  return (
    <section className="page-header">
      {/* <div className="banner" /> */}
      <div className="main-container">
        <div className="sub-container">
          <Profile />
          <div className="sub-item">
            <StudentServices />
          </div>
        </div>
      </div>
      <div className="sub-main-container">
        <div className="s-container">
          <StudentClubGrid />
        </div>
      </div>
    </section>
  );
}

export default Network;
import "./profile.css";

function Profile() {
 const name = "Leandro Cooper";

 const studentInfo = {
   major: "Computer Science",
   expectedGraduation: "May 2027",
   university: "University of Connecticut",
   location: "Stamford Campus",
 };

    return (
    <>
      <div className="profile-container">
        <div>
          <div className="profile-header">
            <img alt="student profile image" className="profile-image" />
            <h1>{name}</h1>
          <p className="student-description">
            My Description: computer science student with passion for software
            engineering and like to skateboard in my free time.
          </p>
          <p>{studentInfo.location}</p>
          </div>
          <div>
            <ul className="student-details">
            <h2>Student Info:</h2>
              <li>Major: {studentInfo.major}</li>
              <li>Expected Graduation: {studentInfo.expectedGraduation}</li>
              <li>University: {studentInfo.university}</li>
              <li>Location: {studentInfo.location}</li>
            </ul>
          </div>
          <div className="messages-container">
            <h2>Messages</h2>
            
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}
export default Profile;

// useEffect(() => {
//   fetch("http://localhost:5000/api/data") // Replace with your Flask API URL
//     .then((response) => response.json())
//     .then((data) => setMessage(data.message))
//     .catch((error) => console.error("Error fetching data:", error));
// }, []);

// const getUser = () => {
//   fetch("http://localhost:3000/api.user")
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// };

// useEffect(() => {
//   getUser();
// }, []);

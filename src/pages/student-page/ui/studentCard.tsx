import { useNavigate } from "react-router-dom";

type StudentCardProps = {
  name: string;
  phone?: string;
  email?: string;
  majors?: string[];
  studentId: string; // Add studentId to props
  onConnect: (studentId: string) => void; // Update to accept studentId
};

function StudentCard({
  name,
  phone,
  email,
  majors,
  studentId, // Destructure studentId
  onConnect,
}: StudentCardProps) {
  
  const navigate = useNavigate();
  
  const handleConnect = () => {
    console.log('connecting to user profile (details)..');
    onConnect(studentId); // Call the prop function with studentId
    navigate('../studentPage.tsx');
  };

  return (
    <div className="sub-grid-item left">
      <div className="space-between">
        <img alt="student image" className="student-image" />
        <div className="student-contents">
          <h2>Name: {name}</h2>
          {phone && <span>phone: {phone}</span>}
          {email && <span>email: {email}</span>}
          {majors && <span>majors: {majors.join(", ")}</span>}
          <p>brief student description</p>
        </div>
        <div>
          {/* links to the student profile of the selected person
              that you want to make a connection with. */}
          <button className="connect-button" onClick={handleConnect}>
            Add Connection
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
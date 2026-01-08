import { useState } from "react";
import NetworkBar from "../../network-page/network-bar/NetworkBar";
import StudentCard from "./studentCard";
import "./studentServices.css";

type Student = {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  username?: string;
};


function StudentServices() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [student, setStudent] = useState<Student | null>(null);

  async function handleConnect(studentId: number) {
    setLoading(true);
    setError(null);
    setStudent(null);

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${studentId}`
      );
      if (!res.ok) throw new Error(`API returned ${res.status}`);

      const data = await res.json();
      setStudent({
        id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        username: data.username,
      });
    } catch (err: any) {
      setError(err?.message || "Failed to load student");
    } finally {
      setLoading(false);
    }
  }


  //student data
  const students = [
    {
      id: 1,
      name: "Lee Cooper",
      phone: "203-290-7854",
      email: "leecooper6329@gmail.com",
      majors: ["Computer Science", "Mathematics"],
    },
    {
      id: 2,
      name: "Alex Martinez",
      phone: "203-555-1123",
      email: "alex.martinez@email.com",
      majors: ["Mechanical Engineering"],
    },
    {
      id: 3,
      name: "Jordan Kim",
      phone: "203-555-2244",
      email: "jordan.kim@email.com",
      majors: ["Electrical Engineering"],
    },
    {
      id: 4,
      name: "Priya Patel",
      phone: "203-555-3377",
      email: "priya.patel@email.com",
      majors: ["Biomedical Engineering"],
    },
    {
      id: 5,
      name: "Michael Johnson",
      phone: "203-555-4488",
      email: "michael.johnson@email.com",
      majors: ["Physics"],
    },
    {
      id: 6,
      name: "Sofia Ramirez",
      phone: "203-555-5599",
      email: "sofia.ramirez@email.com",
      majors: ["Data Science"],
    },
  ];

  return (
    <section>
      <NetworkBar />
      <div className="main-container">
        <div className="sub-grid network">
          {students.map((s) => (
            <StudentCard
              key={s.id}
              name={s.name}
              phone={s.phone}
              email={s.email}
              majors={s.majors}
              onConnect={() => handleConnect(s.id)} studentId={""} />
          ))}
        </div>
        {/* API feedback */}
        {loading && <p>Loading student...</p>}
        {error && <p className="error">{error}</p>}
        {student && (
          <p className="success">
            Connected with <strong>{student.name}</strong>
          </p>
        )}
      </div>
    </section>
  );
}

export default StudentServices;

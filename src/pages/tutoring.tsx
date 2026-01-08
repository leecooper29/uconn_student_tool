import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './css/tutoring.css';

function Tutoring() {
  const location = useLocation();
  const selectedService = location.state?.service;
  const [activeService, setActiveService] = useState(selectedService || "All Services");

  useEffect(() => {
    if (selectedService) {
      setActiveService(selectedService);
    }
  }, [selectedService]);

  return (
    <div className="tutoring-container">
      <h1>Tutoring Center</h1>
      
      {selectedService && (
        <div className="selected-service-banner">
          <p>You selected: <strong>{selectedService}</strong></p>
        </div>
      )}

      <div className="tutoring-services">
        <section className={activeService === "Math Tutoring" ? "active" : ""}>
          <h2>Calculus Tutoring</h2>
          <p>Get help with calculus, algebra, statistics, and more.</p>
          <button>Schedule Math Tutoring</button>
        </section>

        <section className={activeService === "Writing Center" ? "active" : ""}>
          <h2>Writing Center</h2>
          <p>Improve your writing skills with our expert tutors.</p>
          <button>Schedule Writing Session</button>
        </section>

        <section className={activeService === "Science Tutoring" ? "active" : ""}>
          <h2>Computer Science Tutoring</h2>
          <p>Chemistry, physics, biology - we've got you covered.</p>
          <button>Schedule Science Tutoring</button>
        </section>

        <section className={activeService === "Science Tutoring" ? "active" : ""}>
          <h2>Science Tutoring</h2>
          <p>Chemistry, physics, biology - we've got you covered.</p>
          <button>Schedule Science Tutoring</button>
        </section>
      </div>
    </div>
  );
}

export default Tutoring;
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/tutoring.css';
import TutoringServiceCard from './ui/TutoringServiceCard';

type ServiceData = {
  title: string;
  description: string;
  buttonText: string;
};

const servicesList: ServiceData[] = [
  {
    title: "Math Tutoring",
    description: "Get help with calculus, algebra, statistics, and more.",
    buttonText: "Schedule Math Tutoring",
  },
  {
    title: "Writing Center",
    description: "Improve your writing skills with our expert tutors.",
    buttonText: "Schedule Writing Session",
  },
  {
    title: "Computer Science", // Changed from "Computer Science Tutoring" to match probable key or improved name
    description: "Programming, algorithms, data structures support.",
    buttonText: "Schedule CS Tutoring", // Shortened for fit
  },
  {
    title: "Science Tutoring",
    description: "Chemistry, physics, biology - we've got you covered.",
    buttonText: "Schedule Science Tutoring",
  },
];

function Tutoring() {
  const location = useLocation();
  const selectedService = (location.state as { service?: string } | null)?.service;
  const [activeService, setActiveService] = useState<string | null>(selectedService || null);

  useEffect(() => {
    if (selectedService) {
      setActiveService(selectedService);
    }
  }, [selectedService]);

  const handleConnect = (serviceTitle: string) => {
    setActiveService(serviceTitle);
    // Logic to actually schedule or navigate could go here
    console.log(`Scheduling ${serviceTitle}...`);
  };

  return (
    <div className="tutoring-container">
      <h1>Tutoring Center</h1>

      {activeService && (
        <div className="selected-service-banner">
          <p>You have selected: <strong>{activeService}</strong></p>
        </div>
      )}

      <div className="tutoring-services">
        {servicesList.map((service) => (
          <TutoringServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            isActive={activeService === service.title}
            buttonText={service.buttonText}
            onConnect={() => handleConnect(service.title)}
          />
        ))}
      </div>
    </div>
  );
}

export default Tutoring;
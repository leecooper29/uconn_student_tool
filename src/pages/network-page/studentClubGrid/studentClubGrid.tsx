import "./studentClubGrid.css";


import { useNavigate } from "react-router-dom";

type Club = {
  name: string;
  slug: string;
  description: string;
};

function StudentClubGrid() {
  const navigate = useNavigate();

  const clubs: Club[] = [
    {
      name: "Chess Club",
      slug: "chess",
      description: "This is the description of the chess club",
    },
    {
      name: "Reading / Book Club",
      slug: "book",
      description: "This club meets weekly to discuss fiction and non-fiction selections.",
    },
    {
      name: "Software Club",
      slug: "software",
      description: "Work on programming projects, hackathons, and tech talks.",
    },
    {
      name: "Photography Club",
      slug: "photography",
      description: "Explore photography techniques, field trips, and portfolio reviews.",
    },
  ];

  function handleJoin(slug: string) {
    navigate(`/pages/${slug}`);
  }

  return (
    <div className="clubs-grid">
      <div className="grid-title">
        <h3>Browse our available clubs created by students</h3>
      </div>

      <div className="grid">
        {clubs.map((club) => (
          <div className="grid-item" key={club.slug}>
            <div className="grid-item-top">
              <h4>{club.name}</h4>
              <p className="club-desc">{club.description}</p>
              <button
                type="button"
                className="sg-btn"
                onClick={() => handleJoin(club.slug)}
              >
                Join
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentClubGrid;


import { useNavigate } from 'react-router-dom';

const JourneyCard = ({ journey }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/journey/${journey.id}`);
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={journey.image}
        className="card-img-top"
        alt={journey.destination}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{journey.destination}</h5>
        <p className="card-text">{journey.description.slice(0, 80)}...</p>
        <button onClick={handleDetails} className="btn btn-outline-primary">
          View Details
        </button>
      </div>
    </div>
  );
};

export default JourneyCard;



import { useParams } from "react-router-dom";
import climberDetails from "../data/climberDetails"; // Adjust path as needed

const ClimberDetails = () => {
  const { id } = useParams();
  const climber = climberDetails.find((climber) => climber.id === parseInt(id));

  if (!climber) {
    return <div>Climber not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{climber.name}</h1>
      <img
        src={climber.image}
        alt={climber.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700">{climber.description}</p>
    </div>
  );
};

export default ClimberDetails;

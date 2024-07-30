import { useParams } from "react-router-dom";
import herbDetails from "../data/herbDetails"; // Adjust path as needed

const HerbDetails = () => {
  const { id } = useParams();
  const herb = herbDetails.find((herb) => herb.id === parseInt(id));

  if (!herb) {
    return <div>Herb not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{herb.name}</h1>
      <img
        src={herb.image}
        alt={herb.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700">{herb.description}</p>
    </div>
  );
};

export default HerbDetails;

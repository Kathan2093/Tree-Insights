import { useParams } from "react-router-dom";
import creeperDetails from "../data/creeperDetails"; // Adjust path as needed

const CreeperDetails = () => {
  const { id } = useParams();
  const creeper = creeperDetails.find((creeper) => creeper.id === parseInt(id));

  if (!creeper) {
    return <div>Creeper not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{creeper.name}</h1>
      <img
        src={creeper.image}
        alt={creeper.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700">{creeper.description}</p>
    </div>
  );
};

export default CreeperDetails;

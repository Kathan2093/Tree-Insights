import { useParams } from "react-router-dom";
import shrubDetails from "../data/shrubDetails"; // Adjust path as needed

const ShrubDetails = () => {
  const { id } = useParams();
  const shrub = shrubDetails.find((shrub) => shrub.id === parseInt(id));

  if (!shrub) {
    return <div>Shrub not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{shrub.name}</h1>
      <img
        src={shrub.image}
        alt={shrub.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700">{shrub.description}</p>
    </div>
  );
};

export default ShrubDetails;

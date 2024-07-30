import { useParams } from "react-router-dom";
import treeDetails from "../data/treeDetails";

const TreeDetails = () => {
  const { id } = useParams();
  const tree = treeDetails.find((tree) => tree.id === parseInt(id));

  if (!tree) {
    return <div>Tree not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{tree.name}</h1>
      <img
        src={tree.image}
        alt={tree.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700">{tree.description}</p>
    </div>
  );
};

export default TreeDetails;

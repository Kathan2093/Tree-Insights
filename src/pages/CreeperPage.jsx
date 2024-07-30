import { useNavigate } from "react-router-dom";
import creeperDetails from "../data/creeperDetails";
const CreepersPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-6xl m-auto">
      <h2 className="text-4xl font-bold text-green-800 mb-6">Creepers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {creeperDetails.map((creeper) => (
          <div
            key={creeper.id}
            className="bg-white shadow-md text-gray-900 rounded-lg hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] flex flex-col gap-2 pb-4 cursor-pointer"
            onClick={() => navigate(`/creeper/${creeper.id}`)}
          >
            <img
              src={creeper.image}
              alt={creeper.name}
              className="w-full h-[15rem] object-cover rounded-lg"
            />
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold px-4">{creeper.name}</h3>
              <div className="px-3 py-0.5 bg-green-300 text-sm mr-4 mt-1.5 text-green-900 rounded-full">
                {creeper.type}
              </div>
            </div>
            <p className="px-4">{creeper.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreepersPage;

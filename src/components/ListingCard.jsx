import { Link } from "react-router-dom";

const ListingCard = ({ listing }) => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden">
      <img
        src={listing.images?.[0]}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="font-bold">{listing.name}</h2>
        <p className="text-gray-500">${listing.price?.amount}</p>

        <Link to={`/listing/${listing.id}`}>
          <button className="mt-2 bg-black text-white px-3 py-1 rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
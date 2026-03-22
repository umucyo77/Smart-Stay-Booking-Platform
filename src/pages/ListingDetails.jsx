import { useParams } from "react-router-dom";
import { useListings } from "../hooks/useListings";

const ListingDetails = () => {
  const { id } = useParams();
  const { data } = useListings("ChIJN1t_tDeuEmsRUsoyG83frY4");

  const listing = data?.find((item) => item.id === id);

  if (!listing) return <p>Not found</p>;

  return (
    <div className="p-4">
      <img src={listing.images?.[0]} className="rounded-xl" />
      <h1 className="text-2xl font-bold">{listing.name}</h1>
      <p>{listing.description}</p>
    </div>
  );
};

export default ListingDetails;
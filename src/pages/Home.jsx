import { useListings } from "../hooks/useListings";
import { useFilters } from "../context/FilterContext";
import ListingCard from "../components/ListingCard";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";


const Home = () => {
  const { filters } = useFilters();

  const { data, isLoading, error } = useListings(
    "ChIJN1t_tDeuEmsRUsoyG83frY4",+
    filters
  );

  if (isLoading) return <Loader />;
  if (error) return <ErrorState message="API failed" />;

  return (
    <div className="p-4 grid md:grid-cols-3 gap-4">
      {data?.map((item) => (
        <ListingCard key={item.id} listing={item} />
       
      ))}
    </div>
  );
};

export default Home;
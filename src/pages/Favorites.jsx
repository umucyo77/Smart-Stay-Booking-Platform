import { useFavorites } from "../context/FavoritesContext";
import ListingCard from "../components/ListingCard";

const Favorites = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl text-gray-500">
          No favorites yet ❤️
        </h2>
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {favorites.map((item) => (
        <ListingCard key={item.id} listing={item} />
      ))}
    </div>
  );
};

export default Favorites;
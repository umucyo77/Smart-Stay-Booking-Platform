import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const fetchListings = async (placeId, filters) => {
  const res = await api.get("/searchPropertyByPlaceId", {
    params: {
      placeId,
      ...filters,
    },
  });

  return res.data.data;
};

export const useListings = (placeId, filters) => {
  return useQuery({
    queryKey: ["listings", placeId, filters],
    queryFn: () => fetchListings(placeId, filters),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};
import api from "./api";

export const getListings = async ({ placeId, filters }) => {
  try {
    const response = await api.get("/searchPropertyByPlaceId", {
      params: {
        placeId,
        ...filters,
      },
    });

    //  Data transformation 
    return response.data?.data?.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price?.amount,
      image: item.images?.[0],
      rating: item.rating,
      description: item.description,
    }));
  } catch (error) {
    console.error("API ERROR:", error);
    throw new Error("Failed to fetch listings");
  }
};
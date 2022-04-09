export const setSpotsData = (data) => ({
  type: "SET_SPOTS_DATA",
  payload: data,
});

export const setFavoritesData = (data) => ({
  type: "SET_FAVORITES_DATA",
  payload: data,
});

export const setSelectedSpot = (option) => ({
  type: "SET_SELECTED_SPOT",
  payload: option,
});

export const deleteSpotsData = () => ({
  type: "DELETE_SPOTS_DATA",
});

export const setFilters = (filters) => ({
  type: "FILTER_SPOTS_DATA",
  payload: filters,
});
export const setFilteredSpots = (data) => ({
  type: "SET_FILTERED_DATA",
  payload: data,
});
export const deleteFilters = () => ({
  type: "DELETE_FILTERS",
});

export const setAddSpotStatus = () => ({
  type: "SET_ADD_STATUS",
});

export const updateSpotData = (option) => ({
  type: "UPDATE_SPOT_DATA",
  payload: option,
});
export const updateFavoritesData = (data) => ({
  type: "UPDATE_FAVORITES",
  payload: data,
});
export const deleteFavoritesData = (id) => ({
  type: "DELETE_FAVORITES",
  payload: id,
});

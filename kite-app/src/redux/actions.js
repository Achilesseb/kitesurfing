export const setSpotsData = (data) => ({
  type: "SET_SPOTS_DATA",
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

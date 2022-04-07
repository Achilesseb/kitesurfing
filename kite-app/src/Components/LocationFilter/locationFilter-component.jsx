import React from "react";
import SearchBar from "material-ui-search-bar";
import { useDispatch } from "react-redux";
import { setFilters, deleteFilters } from "../../redux/actions";

const LocationFilter = () => {
  const dispatch = useDispatch();
  let toFind;
  const handleOnChange = (e) => {
    toFind = e;
  };
  const setSearchLocation = () => {
    dispatch(deleteFilters());
    dispatch(setFilters([toFind, null]));
    toFind = "";
  };

  return (
    <SearchBar
      value={toFind}
      onChange={(e) => handleOnChange(e)}
      onRequestSearch={setSearchLocation}
      onCancelSearch={() => dispatch(deleteFilters())}
    />
  );
};

export default LocationFilter;

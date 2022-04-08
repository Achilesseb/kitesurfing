import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import { useDispatch } from "react-redux";
import { setFilters, deleteFilters } from "../../redux/spotSlice/actions";

const LocationFilter = () => {
  const dispatch = useDispatch();
  const [toFind, setToFind] = useState(undefined);
  const handleOnChange = (e) => {
    setToFind(e);
  };
  const setSearchLocation = () => {
    dispatch(deleteFilters());
    dispatch(setFilters([toFind, null]));
    setToFind(undefined);
  };

  return (
    <SearchBar
      value={toFind}
      onChange={(e) => handleOnChange(e)}
      onRequestSearch={setSearchLocation}
      onCancelSearch={() => dispatch(deleteFilters())}
      placeholder="Search by Name or Country"
    />
  );
};

export default LocationFilter;

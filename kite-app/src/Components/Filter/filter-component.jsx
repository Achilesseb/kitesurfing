import React, { useState } from "react";
import { useDispatch } from "react-redux";
import filter from "./filter.png";
import "./filter-component.styles.scss";
import { filterSpotsData, deleteFilters } from "../../redux/actions";
const FilterButton = () => {
  const dispatch = useDispatch();
  const [dropBox, setDropStatus] = useState(false);
  const handleClickDropBox = () => {
    setDropStatus(true);
    dispatch(deleteFilters());
  };

  const DropBox = () => {
    const [country, setCountry] = useState(null);
    const [wind, setWind] = useState(null);
    const handleClickConfirmFilter = (e) => {
      e.preventDefault();
      setDropStatus(false);
      dispatch(filterSpotsData([country, wind]));
    };
    return (
      <form
        className="dropBoxContent"
        onSubmit={handleClickConfirmFilter}
        autoComplete="on"
      >
        <span className="dropBoxContent filter">
          <label>Country</label>
          <input
            onChange={(e) => setCountry(e.target.value)}
            autoFocus
            type="text"
            className="dropBoxInput"
            placeholder="Country"
          ></input>
        </span>
        <span className="dropBoxContent filter">
          <label>Wind probability</label>
          <input
            onChange={(e) => setWind(e.target.value)}
            autoFocus
            type="number"
            className="dropBoxInput"
            placeholder="%"
          ></input>
        </span>
        <button
          className="dropBoxContent confirm"
          onSubmit={handleClickConfirmFilter}
        >
          APPLY FILTER
        </button>
      </form>
    );
  };

  if (dropBox === false)
    return (
      <button className="filterButton" onClick={handleClickDropBox}>
        <img className="filterButton image" src={filter} />
        Filters
      </button>
    );
  else
    return (
      <div className="dropBox">
        <DropBox />
      </div>
    );
};
export default FilterButton;

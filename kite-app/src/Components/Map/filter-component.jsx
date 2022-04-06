import React from "react";
import filter from "./filter.png";
import "./filter-component.styles.scss";
const FilterButton = () => {
  console.log(filter);
  return (
    <button className="filterButton">
      <img className="filterButton image" src={filter} />
      Filters
    </button>
  );
};
export default FilterButton;

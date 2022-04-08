import React from "react";
import Map from "../Map/map-component";
import LocationFilter from "../LocationFilter/locationFilter-component";
import TableComponent from "../Table/table-component";

const ShowMain = () => {
  return (
    <div className="main-content">
      <div className="map">
        <Map />
      </div>
      <div className="table">
        <LocationFilter />
        <TableComponent />
      </div>
    </div>
  );
};

export default ShowMain;

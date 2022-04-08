import { useEffect, useState } from "react";
import "./App.css";
import { BounceLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./utils";
import { Routes, Route } from "react-router-dom";
import Map from "./Components/Map/map-component";
import NavBar from "./Components/Navigation/navBar-component";
import TableComponent from "./Components/Table/table-component";
import LocationFilter from "./Components/LocationFilter/locationFilter-component";
import LogIn from "./Components/LogIn/logIn-component";
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
function App() {
  const dispatch = useDispatch();
  const spotsData = useSelector((data) => data.spots.spots);

  useEffect(() => {
    if (spotsData.length === 0) {
      fetchData(dispatch).catch((err) => console.error(err.message));
    }
  }, []);

  if (spotsData.length === 0)
    return (
      <div className="waiting">
        <span className="waiting-label">Loading...</span>
        <BounceLoader color="#3b5999" size="20vh" />
      </div>
    );

  return (
    <div className="App">
      <div className="navigation-bar">
        <NavBar />
      </div>

      <Routes>
        <Route exact path="/" element={<ShowMain />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;

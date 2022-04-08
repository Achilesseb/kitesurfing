import { useEffect, useState } from "react";
import "./App.css";
import { BounceLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchUsers, getFavourites } from "./utils";
import { Routes, Route } from "react-router-dom";
import Map from "./Components/Map/map-component";
import NavBar from "./Components/Navigation/navBar-component";
import TableComponent from "./Components/Table/table-component";
import LocationFilter from "./Components/LocationFilter/locationFilter-component";
import LogIn from "./Components/LogIn/logIn-component";
import ShowMain from "./Components/Main/main-component";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((data) => data);
  const { spots: spotsData } = data.spots;
  const { userData } = data.user;
  useEffect(() => {
    if (spotsData.length === 0) {
      fetchData(dispatch).catch((err) => console.error(err.message));
      getFavourites({ dispatch });
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
        <NavBar avatar={userData?.avatar} name={userData?.name} />
      </div>

      <Routes>
        <Route exact path="/" element={<ShowMain />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
};

export default App;

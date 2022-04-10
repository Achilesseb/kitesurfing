import { useEffect, useState } from "react";
import "./App.css";
import { BounceLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, getFavourites } from "./api-utils";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navigation/navBar-component";
import LogIn from "./Components/LogIn/logIn-component";
import ShowMain from "./Components/Main/main-component";
import SignUp from "./Components/Signup/signup-component";
import { setFavoritesData } from "./redux/spotSlice/actions";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((data) => data);
  const { spots: spotsData, favorites } = data.spots;
  const { userInfo } = data.user;

  useEffect(() => {
    if (spotsData.length === 0) {
      fetchData(dispatch).catch((err) => console.error(err.message));
    }
  }, []);

   useEffect(() => {
    if (userInfo !== null) {
      if (userInfo === "Not found") {
        return alert("User not found!");
      } else getFavourites({ dispatch });
    }
  }, [userInfo]);
  useEffect(() => () => dispatch(setFavoritesData()), []);
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
        <NavBar avatar={userInfo?.avatar} name={userInfo?.name} />
      </div>

      <Routes>
        <Route exact path="/" element={<ShowMain />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;

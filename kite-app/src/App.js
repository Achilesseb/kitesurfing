import { useEffect, useState } from "react";
import "./App.css";
import Map from "./Components/Map/map-component";
import { BounceLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./utils";

function App() {
  const dispatch = useDispatch();
  const spotsData = useSelector((data) => data.spots);
  console.log(spotsData);

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
      <div className="map">
        <Map />
      </div>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import "./App.css";
import Map from "./Components/Map/map-component";
import { BounceLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { setSpotsData } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const spotsData = useSelector((data) => data.spots);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://6246b943739ac8459191ce55.mockapi.io/spot"
      )
        .then((response) => response.json())
        .then((results) => dispatch(setSpotsData(results)));
    };
    fetchData().catch((err) => console.error(err.message));
  }, []);
  console.log(spotsData);

  if (spotsData == null)
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

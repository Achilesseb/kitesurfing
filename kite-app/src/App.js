import { useEffect, useState } from "react";
import "./App.css";
import Map from "./Components/Map/map-component";
import { BounceLoader } from "react-spinners";

function App() {
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://6246b943739ac8459191ce55.mockapi.io/spot"
      )
        .then((response) => response.json())
        .then((results) => setState(results));
    };
    fetchData().catch((err) => console.error(err.message));
  }, []);
  console.log(state);

  if (state == null)
    return (
      <div className="waiting">
        <span className="waiting-label">Loading...</span>
        <BounceLoader color="#3b5999" size="20vh" />
      </div>
    );
  return (
    <div className="App">
      <div className="map">
        <Map state={state} />
      </div>
    </div>
  );
}

export default App;

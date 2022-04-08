import "./form-component.styles.scss";
import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { StyledEngineProvider } from "@mui/material/styles";
import { useState } from "react";
import { postData } from "../../utils";
import { updateSpotData } from "../../redux/spotSlice/actions";
import { useDispatch } from "react-redux";

const AddNewLocation = ({ props }) => {
  const dispatch = useDispatch();
  const coords = props.coords;
  const length = props.length;
  const [value, setValue] = useState(new Date());
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const date = new Date(value);
  const month = date.toLocaleString("default", { month: "long" });

  const handleClickedConfirmed = (e) => {
    e.preventDefault();
    if (coords === null) return alert("Place marker on map!");
    const data = {
      name: name,
      country: country,
      createdAt: new Date(),
      lat: coords.lat.toFixed(4),
      long: coords.lng.toFixed(4),
      probability: Math.trunc(Math.random() * 100),
      month: month,
      id: String(length + 2),
    };
    postData(data);
    dispatch(updateSpotData(data));
  };
  const handleDataChange = (e) => {
    e.preventDefault();
    const identifier = e.target.placeholder;
    identifier === "Name"
      ? setName(e.target.value)
      : setCountry(e.target.value);
  };
  const ViewsDatePicker = () => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box m={1}>
          <DatePicker
            inputFormat="MMMM"
            views={["month"]}
            label="Month"
            value={value}
            onChange={setValue}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
      </LocalizationProvider>
    );
  };
  return (
    <div className="add-form-div">
      <form className="add-form">
        <span>
          <label>Name</label>
          <input
            className="add-input"
            placeholder="Name"
            onChange={handleDataChange}
          />
        </span>
        <span>
          <label>Country</label>
          <input
            className="add-input"
            placeholder="Country"
            onChange={handleDataChange}
          />
        </span>
        <span>
          <label>High Season</label>

          <StyledEngineProvider injectFirst>
            <ViewsDatePicker />
          </StyledEngineProvider>
        </span>
        <span className="event-buttons">
          <button
            className="event-buttons confirm"
            onClick={handleClickedConfirmed}
          >
            Confirm{" "}
          </button>
          <button className="event-buttons cancel">Cancel</button>
        </span>
      </form>
    </div>
  );
};

export default AddNewLocation;

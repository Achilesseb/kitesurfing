import "./form-component.styles.scss";
import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { StyledEngineProvider } from "@mui/material/styles";
import { useState } from "react";

const ViewsDatePicker = () => {
  const [value, setValue] = useState(new Date());
  console.log(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box m={2}>
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
const AddNewLocation = (props) => {
  console.log("gulagula");
  return (
    <div className="add-form-div">
      <form className="add-form">
        <span>
          <label>Name</label>
          <input className="add-input" placeholder="Name"></input>
        </span>
        <span>
          <label>Country</label>
          <input className="add-input" placeholder="Country"></input>
        </span>
        <span>
          <label>High Season</label>

          <StyledEngineProvider injectFirst>
            <ViewsDatePicker />
          </StyledEngineProvider>
        </span>
        <span className="event-buttons">
          <button className="event-buttons confirm">Confirm </button>
          <button className="event-buttons cancel">Cancel</button>
        </span>
      </form>
    </div>
  );
};

export default AddNewLocation;

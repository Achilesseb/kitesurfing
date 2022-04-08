import React from "react";
import "./popUp-component.styles.scss";
import {
  formatPopUpLabelData,
  formatPopUpValueData,
  toUpperCamelCase,
} from "../../utils";

const PopupRow = (props) => {
  const data = props.entries;
  return data.map((data) => (
    <tr className="popup-row">
      <th>{toUpperCamelCase(formatPopUpLabelData(data[0]))}</th>
      <th>{formatPopUpValueData(data)}</th>
    </tr>
  ));
};
const PopUp = (props) => {
  const data = props.props;
  const entries = Object.entries(data).slice(3, -1);
  return (
    <div className="pop-up">
      <div className="kite-label">
        <h4>
          {data.name}
          <span>
            <h5 className="kite-label country"> {data.country}</h5>
          </span>
        </h4>
      </div>
      <table className="popUp-table">
        <tbody>
          <PopupRow entries={entries} />
        </tbody>
      </table>
      <button className="favorites-button">+ Add to favorites</button>
    </div>
  );
};

export default PopUp;

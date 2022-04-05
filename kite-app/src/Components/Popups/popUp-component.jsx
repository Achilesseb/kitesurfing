import React from "react";
import "./popUp-component.styles.scss";
import { formatPopUpData } from "../../utils";
const PopUp = (props) => {
  const data = props.props;
  console.log(data);
  const entries = Object.entries(data);
  console.log(entries);
  return (
    <div className="pop-up">
      <span>
        <h4>{data.name}</h4>
      </span>
      <span>
        <h5> {data.country}</h5>
      </span>
      <table>
        <tbody>
          {entries.slice(3, -1).map((entry) => (
            <tr>
              <th>{formatPopUpData(entry[0]).toUpperCase()}</th>
              <th>{entry[1]}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="favorites-button">Add to favorites</button>
    </div>
  );
};

export default PopUp;

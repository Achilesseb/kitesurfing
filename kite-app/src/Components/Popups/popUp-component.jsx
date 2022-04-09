import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import "./popUp-component.styles.scss";
import {
  formatPopUpLabelData,
  formatPopUpValueData,
  toUpperCamelCase,
} from "../../utils";
import { useDispatch } from "react-redux";
import { postFavorite, deleteFavorite } from "../../api-utils";
import {
  deleteSpotsData,
  updateFavoritesData,
  deleteFavoritesData,
} from "../../redux/spotSlice/actions";
import { useSelector } from "react-redux";
import { getFavourites } from "../../api-utils";
import { useState } from "react";
import { useEffect } from "react";

const PopupRow = (props) => {
  const data = props.entries;
  return data.map((data) => (
    <tr className="popup-row">
      <th>{toUpperCamelCase(formatPopUpLabelData(data[0]))}</th>
      <th>{formatPopUpValueData(data)}</th>
    </tr>
  ));
};
const PopUp = ({ props, isFavourite }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((data) => data.spots.favorites);
  const data = props;
  const entries = Object.entries(data).slice(3, -1);
  const handleAddFavorite = (e) => {
    e.preventDefault();
    const dataToAdd = {
      createdAt: new Date().toISOString(),
      spot: Number(data.id),
    };
    postFavorite(dataToAdd, dispatch);
    dispatch(updateFavoritesData(dataToAdd));
  };
  const handleDeleteFavorite = () => {
    const dataId = Number(data.id);
    deleteFavorite(dataId, dispatch);
  };

  return (
    <div className="pop-up">
      <div className="kite-label">
        <h4>
          {data.name}
          <div className="country-fav">
            <span className="kite-label country"> {data.country}</span>
            {isFavourite ? (
              <StarIcon
                sx={{ color: "orange", cursor: "pointer" }}
                fontSize="large"
                onClick={handleDeleteFavorite}
              />
            ) : (
              <StarBorderIcon
                sx={{ color: "red", cursor: "pointer" }}
                fontSize="large"
                onClick={handleAddFavorite}
              />
            )}
          </div>
        </h4>
      </div>
      <table className="popUp-table">
        <tbody>
          <PopupRow entries={entries} />
        </tbody>
      </table>
      {isFavourite ? (
        <button
          className="favorites-button delete"
          onClick={handleDeleteFavorite}
        >
          - Delete favorite
        </button>
      ) : (
        <button
          className="favorites-button add"
          onClick={(e) => handleAddFavorite(e)}
        >
          + Add to favorites
        </button>
      )}
    </div>
  );
};

export default PopUp;

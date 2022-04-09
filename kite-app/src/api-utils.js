import {
  setFavoritesData,
  setSpotsData,
  deleteFavoritesData,
} from "./redux/spotSlice/actions";
import { setUserId, setUser } from "./redux/userSlice/actions";
const MAIN_URL = "https://6246b943739ac8459191ce55.mockapi.io";
const DATA_URL = MAIN_URL + "/spot";
const USER_URL = MAIN_URL + "/user";
const LOGIN_URL = MAIN_URL + "/login";
const FAVOURITES_URL = MAIN_URL + "/favourites";
export const fetchData = async (dispatch) => {
  await fetch(DATA_URL)
    .then((response) => response.json())
    .then((results) => dispatch(setSpotsData(results)));
};

export const getUserId = async ({ userId, dispatch }) => {
  await fetch(USER_URL + "/" + userId)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(setUser(data));
    });
};

export const getFavourites = async ({ dispatch }) => {
  await fetch(FAVOURITES_URL)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setFavoritesData(data));
    });
};

export const logIn = async ({ userData, dispatch }) => {
  console.log(userData);
  await fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return getUserId({ dispatch, userId: data.userId });
    });
};

export const fetchUsers = async (dispatch, userId) => {
  await fetch(USER_URL)
    .then((response) => response.json())
    .then((results) => {
      console.log(results);
      dispatch(setUser(results));
    });
};
export const postData = async (data) =>
  await fetch(DATA_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {});

export const postFavorite = async (data, dispatch) =>
  await fetch(FAVOURITES_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      getFavourites({ dispatch });
    });

export const deleteFavorite = async (dataId, dispatch) => {
  await fetch(FAVOURITES_URL)
    .then((response) => response.json())
    .then((data) => {
      const spot = data.find((data) => data.spot === dataId);
      const { id } = spot;
      fetch(FAVOURITES_URL + "/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          getFavourites({ dispatch });
        });
    });
};

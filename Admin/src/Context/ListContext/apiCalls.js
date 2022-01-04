import axios from "axios";
import {
  createMovieFailure,
  deleteListsFailure,
  deleteListsStart,
  deleteListsSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};
export const deleteLists = async (dispatch, id) => {
  dispatch(deleteListsStart());
  try {
    await axios.delete("/Lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListsSuccess(id));
  } catch (err) {
    dispatch(deleteListsFailure());
  }
};
// export const createLists = async (dispatch, movie) => {
//   dispatch(createListstart());
//   try {
//     const res = await axios.post("/Lists/", movie, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(createListsuccess(res.data));
//   } catch (err) {
//     dispatch(createMovieFailure());
//   }
// };

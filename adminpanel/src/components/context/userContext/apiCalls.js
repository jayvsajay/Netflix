import axios from "axios";
import { createUsersFailure, createUsersStart, createUsersSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess, getUsersFailure, getUsersStart, getUsersSuccess } from "./UserActions";

export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
      const res = await axios.get("/users", {
        headers: {
          authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(getUsersSuccess(res.data));
    } catch (err) {
      dispatch(getUsersFailure());
    }
  };
  export const createUser = async (user, dispatch) => {
    dispatch(createUsersStart());
    try {
      const res = await axios.post("/auth/register", user, {
        headers: {
          authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(createUsersSuccess(res.data));
    } catch (err) {
      dispatch(createUsersFailure());
    }
  };
  
  //delete
  export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
      await axios.delete("/users/" + id, {
        headers: {
          authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(deleteUserSuccess(id));
    } catch (err) {
      dispatch(deleteUserFailure());
    }
  };
  
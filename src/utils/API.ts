import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { changeTheUserState } from "../redux/features/UserSlice";

export const userLogin = async (
  navigate: NavigateFunction,
  data: { userName: string; password: string },
  dispatch: Dispatch
) => {
  await axios
    .post(`${process.env.REACT_APP_BASE_URL}/login`, data)
    .then(function (response) {
      if (response.data.user === null) {
        axios
          .post(`${process.env.REACT_APP_BASE_URL}/createuser/`, data)
          .then((res) => {
            console.log(response.data);
            localStorage.setItem("token", res.data.user._id);
            dispatch(
              changeTheUserState({
                loggedIn: true,
                id: res.data.user.id,
                userName: res.data.user.userName,
              })
            );
            navigate("/");
          });
      } else {
        console.log(response);
        const user = response.data.user;
        localStorage.setItem("token", user._id);
        dispatch(
          changeTheUserState({
            loggedIn: true,
            id: user._id,
            userName: user.userName,
          })
        );
        navigate("/");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

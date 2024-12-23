import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk(
  "login/loginByUsername",
  async ({ username, password }: LoginByUsernameProps, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        username,
        password,
      });

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data)
      );
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e, "error");
      return thunkAPI.rejectWithValue("error");
    }
  }
);

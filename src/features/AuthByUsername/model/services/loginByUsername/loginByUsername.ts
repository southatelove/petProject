import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";

import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUsername", async ({ username, password }, thunkApi) =>
  // dispatch, extra, rejectWithValue - thunkApi деструктуризация
  {
    const { dispatch, extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post<User>("/login", {
        username,
        password,
      });

      // const response = await axios.post("http://localhost:8000/login", {
      //   username,
      //   password,
      // });

      // extra;

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data)
      );
      dispatch(userActions.setAuthData(response.data));

      extra.navigate("/about");

      console.log(response.data, "response.data");
      return response.data;
    } catch (e) {
      console.log(e, "error");
      return rejectWithValue("error");
    }
  }
);

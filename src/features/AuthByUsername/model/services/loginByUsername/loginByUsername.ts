import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ThunkExtraArg } from "app/providers/StoreProvider/config/StateSchema";
import { AxiosInstance } from "axios";

import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  // User - ответ который мы ожидаем получить (response.data)
  LoginByUsernameProps,
  // LoginByUsernameprops - аргументы, которые мы ожидаем получить в функции
  ThunkConfig<string>
  // custom ThunkConfig - настройки типизации thunkApi
>("login/loginByUsername", async ({ username, password }, thunkApi) =>
  // dispatch, extra, rejectWithValue - thunkApi деструктуризация
  {
    const { extra, dispatch, rejectWithValue } = thunkApi;
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

      return response.data;
    } catch (e) {
      console.log(e, "error");
      return rejectWithValue("error");
    }
  }
);

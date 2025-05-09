import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";

import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/fetchProfileData", async (_, thunkApi) =>
  // dispatch, extra, rejectWithValue - thunkApi деструктуризация
  {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.get<Profile>("/profile");

      return response.data;
    } catch (e) {
      console.log(e, "error");
      return rejectWithValue("error");
    }
  }
);

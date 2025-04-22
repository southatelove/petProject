import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";

import { Profile } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/updateProfileData", async (_, thunkApi) =>
  // dispatch, extra, rejectWithValue - thunkApi деструктуризация
  {
    const { extra, rejectWithValue, getState } = thunkApi;

    const formData = getProfileForm(getState());

    try {
      const response = await extra.api.put<Profile>("/profile", formData);

      return response.data;
    } catch (e) {
      console.log(e, "error");
      return rejectWithValue("error");
    }
  }
);

import axios from "axios";

import { loginByUsername } from "./loginByUsername";

import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

describe("loginByUsername.test", () => {
  //   let dispatch: Dispatch;
  //   let getState: () => StateSchema;

  //   beforeEach(() => {
  //     dispatch = jest.fn();
  //     getState = jest.fn();
  //   });
  //   test("succes login", async () => {
  //     const userValue = { username: "123", id: "1" };

  //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

  //     const action = loginByUsername({ username: "123", password: "123" });

  //     const result = await action(dispatch, getState, undefined);
  //     console.log(result);

  //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //     expect(dispatch).toHaveBeenCalledTimes(3);
  //     expect(mockedAxios.post).toHaveBeenCalled();
  //     expect(result.meta.requestStatus).toBe("fulfilled");
  //     expect(result.payload).toBe(userValue);
  //   });
  //   test("error login", async () => {
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

  //     const action = loginByUsername({ username: "123", password: "123" });

  //     const result = await action(dispatch, getState, undefined);
  //     console.log(result);

  //     expect(dispatch).toHaveBeenCalledTimes(2);
  //     expect(mockedAxios.post).toHaveBeenCalled();
  //     expect(result.meta.requestStatus).toBe("rejected");
  //     expect(result.payload).toBe("error");
  //   });
  test("succes login", async () => {
    const userValue = { username: "123", id: "1" };

    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await thunk.callThunk({ username: "123", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(userValue);
  });
  test("error login", async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({ username: "123", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});

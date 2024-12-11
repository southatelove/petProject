import { screen, waitFor } from "@testing-library/react";
import { Counter } from "./Counter";

import { componentRender } from "shared/lib/tests/componentRender/ComponentRender";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("Test render Counter", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });
  test("increment.test", async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    userEvent.click(screen.getByTestId("increment-btn"));
    await waitFor(() => {
      expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    });
  });
  test("decrement.test", async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    userEvent.click(screen.getByTestId("decrement-btn"));
    await waitFor(() => {
      expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    });
  });
});

import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "./Sidebar";

import { componentRender } from "shared/lib/tests/componentRender/ComponentRender";

describe("Sidebar", () => {
  test("Test render Sidebar", () => {
    // const SidebarWithTranslation = withTranslation()(Sidebar);
    // render(<SidebarWithTranslation />);
    // render(<Sidebar />);
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Test toggle Sidebar", () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(toggleBtn).toBeInTheDocument();

    //fireEvent для проврки клика
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import MainPage from "./MainPage";

const meta = {
  title: "pages/MainPage",
  component: MainPage,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

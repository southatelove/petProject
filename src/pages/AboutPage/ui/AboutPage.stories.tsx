import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import AboutPage from "./AboutPage";

const meta = {
  title: "pages/AboutPage",
  component: AboutPage,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

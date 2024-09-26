import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Navbar } from "./Navbar";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: "text",
  },
};

export const Dark: Story = {
  args: {
    children: "text",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

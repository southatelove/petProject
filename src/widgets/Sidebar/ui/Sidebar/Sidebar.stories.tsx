import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Sidebar } from "./Sidebar";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof Sidebar>;

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

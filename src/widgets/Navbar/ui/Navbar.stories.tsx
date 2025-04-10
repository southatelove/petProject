import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Navbar } from "./Navbar";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          username: "12312",
        },
      },
    }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};
export const AuthNavbar: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          username: "admin",
          id: "123",
        },
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};

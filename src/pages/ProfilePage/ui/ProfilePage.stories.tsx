import type { Meta, StoryObj } from "@storybook/react";

import ProfilePage from "./ProfilePage";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
export const Dark: Story = {
  args: {},
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};

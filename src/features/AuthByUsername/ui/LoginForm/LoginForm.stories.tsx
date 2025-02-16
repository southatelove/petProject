import type { Meta, StoryObj } from "@storybook/react";

import LoginForm from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator({ loginForm: { username: "123", password: "123" } }),
  ],
};
export const withError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: "123", password: "123", error: "Error" },
    }),
  ],
};
export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: "123", password: "123", isLoading: true },
    }),
  ],
};

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Avatar } from "./Avatar";
import AvatarImg from "./carforstorybook.jpeg";

const meta = {
  title: "shared/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 250,
    src: AvatarImg,
  },
};
export const Small: Story = {
  args: {
    size: 100,
    src: AvatarImg,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, ButtonSize, ButtonTheme } from "./Button";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "text",
  },
};

export const Clear: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.CLEAR,
  },
};
export const ClearInverted: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.OUTLINE,
  },
};
export const OutlineSizeM: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
  },
};
export const OutlineSizeL: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};
export const OutlineSizeXL: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};
export const OutlineDark: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.BACKGROUND,
  },
};
export const BackgroundInverted: Story = {
  args: {
    children: "text",
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareM: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};
export const SquareSizeXL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { PageError } from "./PageError";

const meta = {
  title: "widgets/PageError",
  component: PageError,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

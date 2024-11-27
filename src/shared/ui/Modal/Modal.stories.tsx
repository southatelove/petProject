import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum qui, nostrum deserunt quo quisquam incidunt debitis iure veritatis omnis vero illo mollitia quos. Magnam, ab consequuntur animi hic quos, placeat dolorem ipsum aliquid rerum atque, iusto voluptates suscipit facere illum possimus quaerat aut nulla. Corporis aut rem reprehenderit repellat reiciendis?",
    // theme: AppLinkTheme.PRIMARY,
  },
};
export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum qui, nostrum deserunt quo quisquam incidunt debitis iure veritatis omnis vero illo mollitia quos. Magnam, ab consequuntur animi hic quos, placeat dolorem ipsum aliquid rerum atque, iusto voluptates suscipit facere illum possimus quaerat aut nulla. Corporis aut rem reprehenderit repellat reiciendis?",
    // theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
// export const Secondary: Story = {
//   args: {
//     children: "text",
//     theme: AppLinkTheme.SECONDARY,
//   },
//   decorators: [ThemeDecorator(Theme.DARK)],
// };

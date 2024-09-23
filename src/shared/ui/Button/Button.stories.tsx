import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import {Button} from "./Button"


const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {

    layout: 'centered',
  },

  tags: ['autodocs'],
  
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children:"text"
  }
};

export const Secondary: Story = {
  args: {
    children: "text"
  },
};



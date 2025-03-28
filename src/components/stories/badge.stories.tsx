import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Badge, BadgeProps } from "../ui/badge";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "primary", "info", "success", "warning", "destructive", "alpha", "beta", "new", "promotion", "outline"],
      description: "The variant style of the badge.",
    },
    children: {
      control: "text",
      description: "Content inside the badge.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for customization.",
    },
  },
} as Meta<BadgeProps>;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "neutral",
  children: "Default Badge",
};
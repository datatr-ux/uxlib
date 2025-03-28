import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "../ui/button"; // Adjust the path as needed
import { MoreHorizontal } from "lucide-react";
// import { TrashIcon } from "lucide-react";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "destructive", "neutral", "menu"],
    },
    mode: {
      control: "select",
      options: ["default", "outline", "ghost", "menu"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "menu"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

const TemplateMenu: StoryFn<ButtonProps> = (args) => (
  <Button
    {...args}
    data-testid="token-action-trigger"
    variant="menu"
    size="menu"
  >
    <span className="sr-only">Open menu</span>
    <MoreHorizontal className="h-4 w-4" />
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  mode: "default",
  size: "md",
  children: "Button",
};

export const Menu = TemplateMenu.bind({});
Menu.args = {
  variant: "menu",
  mode: "menu",
  size: "menu",
}
import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { AlertCircleIcon } from "lucide-react";
export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "success", "warning","neutral"],
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Alert {...args}>
    <AlertCircleIcon className="h-4 w-4"/>
    <div>
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>
        This is an alert description. It provides additional context and
        information about the alert.
      </AlertDescription>
    </div>
  </Alert>
);

export const Default = Template.bind({});
Default.args = {
  variant: "default",
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
};

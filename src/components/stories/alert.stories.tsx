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
      options: ["primary", "critical", "success", "warning","neutral", 'information'],
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Alert {...args}>
    <AlertCircleIcon className="h-5 w-5 pt-[0.125rem]"/>
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
  variant: "primary",
};

export const Neutral = Template.bind({});
Neutral.args = {
  variant: "neutral",
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

export const Information = Template.bind({});
Information.args = {
  variant: "information",
};

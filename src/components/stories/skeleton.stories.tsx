import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import { Skeleton } from "../ui/skeleton"; 

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {
    className: { control: 'text' },
  },
} as Meta;

const Template: StoryFn = () => (
    <div className="flex items-center space-x-4">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
);

export const Default = Template.bind({});
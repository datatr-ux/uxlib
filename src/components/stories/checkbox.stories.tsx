import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, CheckboxIndicator, CheckboxTile } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Star } from "lucide-react";

export default {
  title: "Components/Checkbox 🆕",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          "Accessible and customizable checkbox components built with Radix UI and styled with Tailwind CSS.",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes for styling the checkbox.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the checkbox.",
    },
    defaultChecked: {
      control: "boolean",
      description: "Sets the initial checked state of the checkbox.",
    },
  },
} as Meta;

//
// Default Checkbox
//
const Template: StoryFn = (args) => (
  <div className="flex items-center space-x-2">
    <Checkbox id="checkbox-default" {...args} />
    <Label htmlFor="checkbox-default">I agree to the terms and conditions</Label>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  defaultChecked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};


//
// CheckboxTile Story
//
export const TileVariant: StoryFn = (args) => (
  <div className="grid grid-cols-2 gap-4 max-w-md">
    <CheckboxTile id="basic" {...args}>
      <div className="flex gap-2 items-center">
        <CheckboxIndicator />
        <Label htmlFor="basic" className="font-medium">
          Basic Plan
        </Label>
      </div>
      <p className="text-sm text-muted-foreground">
        Includes basic access to core features.
      </p>
    </CheckboxTile>

    <CheckboxTile id="premium" {...args}>
      <div className="flex gap-2 items-center">
        <CheckboxIndicator />
        <Label htmlFor="premium" className="font-medium">
          Premium Plan
        </Label>
      </div>
      <p className="text-sm text-muted-foreground">
        Unlocks all premium features and support.
      </p>
    </CheckboxTile>
  </div>
);
TileVariant.storyName = "Tile Variant";
TileVariant.parameters = {
  docs: {
    description: {
      story:
        "The `CheckboxTile` variant creates a card-like selection experience, useful for plan selectors or feature choices.",
    },
  },
};
TileVariant.args = {
  defaultChecked: false,
};


//
// CheckboxIndicator Story
//
export const WithCustomIndicator: StoryFn = (args) => (
  <CheckboxTile id="premium" {...args}>
      <div className="flex gap-2 items-center">
        <CheckboxIndicator><Star className="size-4"/></CheckboxIndicator>
        <Label htmlFor="premium" className="font-medium">
          Premium Plan
        </Label>
      </div>
      <p className="text-sm text-muted-foreground">
        Unlocks all premium features and support.
      </p>
    </CheckboxTile>
);
WithCustomIndicator.storyName = "With Custom Indicator";
WithCustomIndicator.parameters = {
  docs: {
    description: {
      story:
        "Demonstrates how to customize the indicator within the checkbox using the `CheckboxIndicator` component.",
    },
  },
};
WithCustomIndicator.args = {
  defaultChecked: true,
};

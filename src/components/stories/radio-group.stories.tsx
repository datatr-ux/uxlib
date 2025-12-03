import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { RadioGroup, RadioGroupItem, RadioIndicator, RadioTile } from "../ui/radio-group";
import { Label } from "../ui/label";

export default {
  title: "Components/RadioGroup 🆕",
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Accessible and customizable radio group components built with Radix UI and styled with Tailwind CSS.",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes for styling the radio group container.",
    },
    defaultValue: {
      control: "text",
      description: "Specifies the initially selected value.",
    },
    disabled: {
      control: "boolean",
      description: "Disables all items in the radio group.",
    },
  },
} as Meta;

//
// Default Story
//
const Template: StoryFn = (args) => (
  <RadioGroup {...args}>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option1" id="option1" />
      <Label htmlFor="option1">Option 1</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option2" id="option2" />
      <Label htmlFor="option2">Option 2</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option3" id="option3" />
      <Label htmlFor="option3">Option 3</Label>
    </div>
  </RadioGroup>
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: "option1",
};



//
// Tile Variant
//
export const TileVariant: StoryFn = (args) => (
  <RadioGroup {...args} className="grid grid-cols-2 gap-4 max-w-md">
    <RadioTile value="basic" id="basic">
      <div className="flex items-start justify-between">
        <Label htmlFor="basic" className="text-sm font-medium">
          Basic Plan
        </Label>
        <RadioIndicator />
      </div>
      <p className="text-sm text-muted-foreground">
        Includes basic access to core features.
      </p>
    </RadioTile>

    <RadioTile value="premium" id="premium">
      <div className="flex items-start justify-between">
        <Label htmlFor="premium" className="text-sm font-medium">
          Premium Plan
        </Label>
        <RadioIndicator />
      </div>
      <p className="text-sm text-muted-foreground">
        Unlocks all premium features and support.
      </p>
    </RadioTile>
  </RadioGroup>
);
TileVariant.storyName = "Tile Variant";
TileVariant.args = {
  defaultValue: "basic",
};
TileVariant.parameters = {
  docs: {
    description: {
      story:
        "The `RadioTile` variant provides a card-like experience similar to the checkbox tile — ideal for plan or option selectors.",
    },
  },
};

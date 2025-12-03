import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  ButtonGroup,
  ButtonGroupText,
  ButtonGroupSeparator,
} from "../ui/button-group";
import { Button } from "../ui/button";
import { ChevronDownIcon } from "lucide-react";

export default {
  title: 'Components/ButtonGroup 🆕',
  component: ButtonGroup,
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  tags: ["new"],
} as Meta<typeof ButtonGroup>;

// ---------- Default Template ----------
const Template: StoryFn<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button mode="outline">Left</Button>
    <Button mode="outline">Middle</Button>
    <Button mode="outline">Right</Button>
  </ButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
  orientation: "horizontal",
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: "vertical",
};

// ---------- With Text Template ----------
const WithTextTemplate: StoryFn<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button mode="outline">Previous</Button>
    <ButtonGroupText>Step 2 of 4</ButtonGroupText>
    <Button mode="outline">
      Next <ChevronDownIcon className="ml-1 size-4" />
    </Button>
  </ButtonGroup>
);

export const WithText = WithTextTemplate.bind({});
WithText.args = {
  orientation: "horizontal",
};

// ---------- With Separator Template ----------
const WithSeparatorTemplate: StoryFn<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button mode="outline">Bold</Button>
    <Button mode="outline">Italic</Button>
    <ButtonGroupSeparator />
    <Button mode="outline">Link</Button>
    <Button mode="outline">Image</Button>
  </ButtonGroup>
);

export const WithSeparator = WithSeparatorTemplate.bind({});
WithSeparator.args = {
  orientation: "horizontal",
};

// ---------- Complex Example ----------
const ComplexTemplate: StoryFn<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button mode="outline">Filter</Button>
    <ButtonGroupSeparator />
    <ButtonGroupText>Category:</ButtonGroupText>
    <Button mode="ghost">All</Button>
    <Button mode="ghost">Active</Button>
    <Button mode="ghost">Archived</Button>
  </ButtonGroup>
);

export const Complex = ComplexTemplate.bind({});
Complex.args = {
  orientation: "horizontal",
};

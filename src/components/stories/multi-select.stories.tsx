import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { MultiSelect } from "../ui/multi-select";
import { Bell, Home, User, Settings, LogOut } from "lucide-react";

// Storybook metadata
export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
  argTypes: {
    onValueChange: { action: "selected values changed" },
  },
} as Meta<typeof MultiSelect>;

// Example options with icons
const options = [
  { label: "Home", value: "home", icon: Home },
  { label: "Profile", value: "profile", icon: User },
  { label: "Notifications", value: "notifications", icon: Bell },
  { label: "Settings", value: "settings", icon: Settings },
  { label: "Logout", value: "logout", icon: LogOut },
];

// Template for Storybook
const Template: StoryFn<typeof MultiSelect> = (args) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(args.defaultValue || []);

  return (
    <MultiSelect
      {...args}
      options={options}
      onValueChange={setSelectedValues}
      defaultValue={selectedValues}
    />
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {
  placeholder: "Select options",
  placeholderSearch: "Search...",
  labelNoResult: "No results found.",
  labelClear: "Clear",
  labelSelectAll: "(Select All)",
  labelClose: "Close",
};

// Story with preselected values
export const PreselectedValues = Template.bind({});
PreselectedValues.args = {
  ...Default.args,
  defaultValue: ["home", "profile"],
};

// Story with a limited maxCount (only 2 items visible at a time)
export const LimitedMaxCount = Template.bind({});
LimitedMaxCount.args = {
  ...Default.args,
  maxCount: 2,
};

// Story with a destructive variant
export const DestructiveVariant = Template.bind({});
DestructiveVariant.args = {
  ...Default.args,
  variant: "destructive",
};

// Story with an inverted variant
export const InvertedVariant = Template.bind({});
InvertedVariant.args = {
  ...Default.args,
  variant: "inverted",
};

// Story using the modal popover mode
export const ModalPopover = Template.bind({});
ModalPopover.args = {
  ...Default.args,
  modalPopover: true,
};

// Story with custom labels
export const CustomLabels = Template.bind({});
CustomLabels.args = {
  placeholder: "Choose your options...",
  placeholderSearch: "Type to search...",
  labelNoResult: "Oops! No matches found.",
  labelClear: "Remove all",
  labelSelectAll: "Select everything",
  labelClose: "Done",
};


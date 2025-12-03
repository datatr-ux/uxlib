import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from "../ui/native-select";

export default {
  title: "Components/NativeSelect 🆕",
  component: NativeSelect,
} as Meta<typeof NativeSelect>;

const Template: StoryFn<typeof NativeSelect> = (args) => (
  <div className="w-64">
    <NativeSelect {...args}>
      <NativeSelectOptGroup label="Fruits">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="orange">Orange</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Vegetables">
        <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
        <NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

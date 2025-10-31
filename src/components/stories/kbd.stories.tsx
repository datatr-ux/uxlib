import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Kbd, KbdGroup } from "../ui/kbd";

export default {
  title: "Components/Kbd 🆕",
  component: Kbd,
} as Meta<typeof Kbd>;

const Template: StoryFn<typeof Kbd> = () => (
  <div className="space-y-4">
    <p>
      Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy.
    </p>

    <KbdGroup>
      <Kbd>Shift</Kbd>
      <Kbd>Cmd</Kbd>
      <Kbd>P</Kbd>
    </KbdGroup>
  </div>
);

export const Default = Template.bind({});

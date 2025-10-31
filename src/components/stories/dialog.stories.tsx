import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";

export default {
  title: "Components/Dialog 🆕",
  component: Dialog,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        undefined,
        "neutral",
        "information",
        "primary",
        "success",
        "warning",
        "critical",
      ],
      description: "Visual variant for the top bar color",
      table: {
        defaultValue: { summary: "undefined" },
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Dialog {...args}>
    <DialogTrigger asChild>
      <Button variant="primary">Open Dialog</Button>
    </DialogTrigger>

    {/* Try changing variant: "primary" | "information" | etc. */}
    <DialogContent variant={args.variant}>
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>
          This is the dialog description.
        </DialogDescription>
      </DialogHeader>

      <DialogBody>
        Dialog body content goes here.
        This area is scrollable if it overflows.
      </DialogBody>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="neutral" mode="ghost">
            Cancel
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="primary">Confirm</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Default = Template.bind({});
Default.args = {
  variant: undefined, // no top bar style
};

export const NeutralVariant = Template.bind({});
NeutralVariant.args = {
  variant: "neutral",
};

export const InformationVariant = Template.bind({});
InformationVariant.args = {
  variant: "information",
};

export const SuccessVariant = Template.bind({});
SuccessVariant.args = {
  variant: "success",
};

export const WarningVariant = Template.bind({});
WarningVariant.args = {
  variant: "warning",

};export const CriticalVariant = Template.bind({});
CriticalVariant.args = {
  variant: "critical",
};
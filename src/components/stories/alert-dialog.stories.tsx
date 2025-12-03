import type { Meta, StoryFn } from "@storybook/react"
import * as React from "react"
import { AlertDialog, AlertDialogAction, AlertDialogBody, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { Button } from "../ui/button"


export default {
  title: "Components/AlertDialog 🆕",
  component: AlertDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        undefined,
        "neutral",
        "information",
        "primary",
        "success",
        "warning",
        "critical",
      ],
    },
  },
} as Meta;

// ─────────────────────────────────────
// Template
// ─────────────────────────────────────
const Template: StoryFn = (args) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open AlertDialog</Button>
    </AlertDialogTrigger>

    <AlertDialogContent variant={args.variant}>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete resource</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your resource and remove all associated data.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogBody>
        <p className="text-sm text-muted-foreground">
          Please confirm if you really want to proceed. Once deleted, this action cannot be reversed.
        </p>
      </AlertDialogBody>

      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Confirm</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)

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
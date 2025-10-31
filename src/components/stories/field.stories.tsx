import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
  FieldSet,
  FieldLegend,
  FieldSeparator,
  FieldGroup,
} from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils"

export default {
  title: "Components/Field 🆕",
  component: Field,
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal", "responsive"],
    },
  },
} as Meta<typeof Field>;

const Template: StoryFn<typeof Field> = (args) => (
  <form className="space-y-6">
    <FieldSet>
      <FieldLegend>Profile</FieldLegend>
      <FieldDescription>Fill in your profile information.</FieldDescription>
      <FieldSeparator />
      <FieldGroup>
        <Field orientation={args.orientation}>
          <FieldContent>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <FieldDescription>
              Provide your full name for identification
            </FieldDescription>
          </FieldContent>
          <Input id="name" placeholder="Evil Rabbit" required className={cn("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive")} />
        </Field>
        <FieldSeparator />
        <Field orientation={args.orientation}>
          <FieldContent>
            <FieldLabel htmlFor="lastName">Message</FieldLabel>
            <FieldDescription>
              You can write your message here. Keep it short, preferably
              under 100 characters.
            </FieldDescription>
          </FieldContent>
          <textarea
            id="message"
            placeholder="Hello, world!"
            required
            className="min-h-[100px] resize-none sm:min-w-[300px] border p-2"
          />
        </Field>
        <FieldSeparator />
        <Field orientation={args.orientation}>
          <Button type="submit">Submit</Button>
          <Button type="button" mode="outline">
            Cancel
          </Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  </form>
);

export const Default = Template.bind({});
Default.args = {
  orientation: "vertical",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: "horizontal",
};

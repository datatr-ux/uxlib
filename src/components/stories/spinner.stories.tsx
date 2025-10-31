import React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { Spinner } from "../ui/spinner"

export default {
  title: "Components/Spinner 🆕",
  component: Spinner,
  argTypes: {
    className: {
      control: "text",
      description: "Custom Tailwind classes to size or color the spinner.",
    },
  },
} as Meta<typeof Spinner>

const Template: StoryFn<typeof Spinner> = (args) => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {
  className: "text-primary size-4",
}

export const Large = Template.bind({})
Large.args = {
  className: "text-primary size-8",
}

export const Neutral = Template.bind({})
Neutral.args = {
  className: "text-muted-foreground size-5",
}

export const Destructive = Template.bind({})
Destructive.args = {
  className: "text-destructive size-5",
}

export const Success = Template.bind({})
Success.args = {
  className: "text-success size-5",
}

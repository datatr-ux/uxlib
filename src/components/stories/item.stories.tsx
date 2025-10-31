import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  Item,
  ItemGroup,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemMedia,
  ItemActions,
  ItemSeparator,
} from "../ui/item";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";

export default {
  title: "Components/Item 🆕",
  component: Item,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "muted"],
    },
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
} as Meta<typeof Item>;

const Template: StoryFn<typeof Item> = (args) => (
  <ItemGroup className="max-w-md">
    <Item {...args}>
      <ItemMedia variant="image">
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>John Doe</ItemTitle>
        <ItemDescription>Frontend Developer at OVHcloud</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm">Message</Button>
      </ItemActions>
    </Item>

    <ItemSeparator />

    <Item {...args}>
      <ItemContent>
        <ItemTitle>Server Maintenance</ItemTitle>
        <ItemDescription>Next scheduled downtime: Sunday 2 AM</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button mode="outline" size="sm">
          Details
        </Button>
      </ItemActions>
    </Item>
  </ItemGroup>
);

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  size: "default",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
};

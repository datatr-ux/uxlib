import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "../ui/input-group";
import { SearchIcon, CopyIcon } from "lucide-react";

export default {
  title: "Components/InputGroup 🆕",
  component: InputGroup,
} as Meta<typeof InputGroup>;

const Template: StoryFn<typeof InputGroup> = () => (
  <div className="flex flex-col gap-6 w-80">
    <InputGroup>
      <InputGroupAddon>
        <SearchIcon className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>

    <InputGroup>
      <InputGroupInput value="https://example.com" readOnly />
      <InputGroupAddon>
        <InputGroupButton variant="ghost">
          <CopyIcon className="size-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>

    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>@</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="username" />
    </InputGroup>
  </div>
);

export const Default = Template.bind({});

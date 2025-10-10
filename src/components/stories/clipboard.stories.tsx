import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  Clipboard,
  ClipboardText,
  ClipboardActions,
  ClipboardCopyButton,
  ClipboardDownloadButton,
} from "../ui/clipboard";
import { Button } from "../ui/button";

// ─────────────────────────────────────────────
// Meta configuration
// ─────────────────────────────────────────────
export default {
  title: "Components/Clipboard",
  component: Clipboard,
  argTypes: {
    value: {
      control: "text",
      description: "The text value to display and copy.",
      defaultValue: "npm install @datatr-ux/uxlib",
    },
    multiline: {
      control: "boolean",
      description: "If true, text wraps over multiple lines.",
    },
    showCopiedIcon: {
      control: "boolean",
      description: "Show the check icon after copying.",
    },
    showDownloadButton: {
      control: "boolean",
      description: "Display the download button next to the copy button.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the container.",
    },
  },
} as Meta<typeof Clipboard>;

// ─────────────────────────────────────────────
// Template for default usage
// ─────────────────────────────────────────────
const Template: StoryFn<typeof Clipboard> = (args) => <Clipboard {...args} />;

// ─────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────

export const Default = Template.bind({});
Default.args = {
  value: "npm install @datatr-ux/uxlib",
  multiline: false,
  showCopiedIcon: true,
  showDownloadButton: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
  value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  multiline: true,
  showCopiedIcon: true,
  showDownloadButton: true,
};

export const WithoutDownload = Template.bind({});
WithoutDownload.args = {
  value: "npm install shadcn-ui",
  showCopiedIcon: true,
  showDownloadButton: false,
};

export const WithoutCopiedIcon = Template.bind({});
WithoutCopiedIcon.args = {
  value: "yarn add react",
  showCopiedIcon: false,
  showDownloadButton: true,
};

export const CustomComposition: StoryFn<typeof Clipboard> = () => (
  <Clipboard value="echo 'Custom Clipboard Layout'" multiline className="bg-white">
    <ClipboardText className="text-blue-600 text-sm" />
    <ClipboardActions className="gap-2">
      <ClipboardCopyButton />
      <Button size="sm" variant="destructive" onClick={() => alert("Custom Action")}>
        Action
      </Button>
      <ClipboardDownloadButton fileName="custom.txt" />
    </ClipboardActions>
  </Clipboard>
);
CustomComposition.parameters = {
  docs: {
    description: {
      story:
        "A fully customized layout using subcomponents (`ClipboardText`, `ClipboardActions`, etc.).",
    },
  },
};

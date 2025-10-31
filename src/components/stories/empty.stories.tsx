import type { Meta, StoryObj } from "@storybook/react"
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "../ui/empty"
import { Inbox } from "lucide-react"

const meta: Meta<typeof Empty> = {
  title: "Components/Empty 🆕",
  component: Empty,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Empty>

export const Default: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>No Data Available</EmptyTitle>
        <EmptyDescription>
          There’s nothing to display here yet. Try adding some data or check your filters.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <button className="rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
          Create Item
        </button>
      </EmptyContent>
    </Empty>
  ),
}

export const WithoutIcon: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>Nothing Found</EmptyTitle>
        <EmptyDescription>
          Please adjust your search criteria or come back later.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}

export const CustomBackground: Story = {
  render: () => (
    <Empty className="bg-muted/20">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>Empty State with Background</EmptyTitle>
        <EmptyDescription>
          This variant shows how the component adapts to different backgrounds.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}

import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TimePicker } from "../ui/time-picker";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Calendar } from "../ui/calendar";

// Storybook metadata
export default {
  title: "Components/TimePicker",
  component: TimePicker,
  args: {
    date: new Date(),
  },
} as Meta<typeof TimePicker>;

// Template for Storybook
const Template: StoryFn<typeof TimePicker> = (args) => {
  const [time, setTime] = useState<Date | undefined>(args.date);
  const [date, setDate] = useState<Date | undefined>(args.date);

  // Ensure we have valid date and time objects
  const safeDate = date ?? new Date();
  const safeTime = time ?? new Date();

  // Merge date and time into a single Date object
  const fullDate = new Date(
    safeDate.getFullYear(),
    safeDate.getMonth(),
    safeDate.getDate(),
    safeTime.getHours(),
    safeTime.getMinutes(),
    safeTime.getSeconds()
  );
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Calendar and timepicker</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate} />
        <TimePicker {...args} date={time} setDate={setTime} />
        <div className="text-center text-sm mt-2">
          <p>
            <strong>Selected Date & Time:</strong>{" "}
            {fullDate.toLocaleString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {};

// Custom string labels
export const CustomStringLabels = Template.bind({});
CustomStringLabels.args = {
  labelHours: "Heures",
  labelMinutes: "Minutes",
  labelSeconds: "Secondes",
};

// Custom JSX labels
export const CustomJSXLabels = Template.bind({});
CustomJSXLabels.args = {
  labelHours: <span className="text-blue-500 font-bold">Hrs</span>,
  labelMinutes: <span className="text-green-500 italic">Min</span>,
  labelSeconds: <span className="text-red-500 underline">Sec</span>,
};

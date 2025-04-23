import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input"; // Example Input component
import { Button } from '../ui/button';
import { Toaster } from "../ui/toaster"; // Example Toaster component
import { useToast } from '../../hooks/use-toast'; // Example Toast component
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export default {
  title: "Components/Form",
  component: Form,
} as Meta;

const Template: StoryFn = () => {
  const toast = useToast()
  const schema = z.object({
    username: z.string().min(1, "Username is required").max(20, "Username must be at most 20 characters long")
  });
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
    },
  });
  console.log(form)

  return (
    <>
      <Toaster />
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => toast.toast({title:'Success', description: 'username is ' + data.username}), (error) => console.error(error))}
        className="space-y-4"
      >
        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your username.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded"
        >
          Submit
        </Button>
      </form>
    </Form>
    </>
  );
};

export const Default = Template.bind({});

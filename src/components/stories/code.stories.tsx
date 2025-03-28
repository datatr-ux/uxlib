import type { Meta, StoryObj } from "@storybook/react";
import { Code, javascript, python, html, githubLight } from "../ui/code";

const exampleCode = `function hello(name) {
  console.log('Hello, ' + name);
}`;

const longCode = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
`;

const meta: Meta<typeof Code> = {
  component: Code,
  title: "Components/Code",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    code: exampleCode,
    lang: javascript,
  },
};

export const WithLabel: Story = {
  args: {
    code: exampleCode,
    lang: javascript,
    label: "JavaScript Example",
  },
};

export const WithCopyButton: Story = {
  args: {
    code: exampleCode,
    lang: javascript,
    label: "Copy Me!",
    showCopyButton: true,
  },
};

export const WithLineNumbers: Story = {
  args: {
    code: longCode,
    lang: javascript,
    lineNumbers: true,
    label: "With Line Numbers",
  },
};

export const LightTheme: Story = {
  args: {
    code: exampleCode,
    lang: javascript,
    theme: githubLight,
    label: "Light Theme",
  },
};

export const PythonExample: Story = {
  args: {
    code: `def greet(name):\n    print(f"Hello, {name}")`,
    lang: python,
    label: "Python Example",
  },
};

export const HTMLExample: Story = {
  args: {
    code: `<div class="container">\n  <p>Hello world!</p>\n</div>`,
    lang: html,
    label: "HTML Example",
  },
};

export const WrappedCode: Story = {
  args: {
    code: `const reallyLongVariableName = 'this is a very long string that should wrap if wrapping is enabled: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, facilis porro soluta vitae ullam tempore veritatis reprehenderit dolor voluptas omnis ab eius libero eaque quaerat earum quibusdam harum illum repellat esse tenetur temporibus obcaecati suscipit. Aliquam laborum consequatur ducimus voluptas odio! Perspiciatis velit officia sint magni voluptatum culpa, et quos vitae non sunt vel, aspernatur fugit quo necessitatibus dolores molestias deleniti cupiditate blanditiis in quaerat voluptates? Sunt nulla cumque vel ullam porro non laboriosam perspiciatis eligendi mollitia veritatis enim voluptatum explicabo harum corrupti cum odit veniam dolorem distinctio, earum esse iusto officia. Laboriosam, inventore qui quia ducimus provident quam hic sint accusamus debitis nulla temporibus, saepe sequi minus officia aperiam impedit assumenda? In, fugit possimus. Esse necessitatibus a eum explicabo.';`,
    lang: javascript,
    wrap: true,
    label: "Wrapped Code",
  },
};

export const NoWrap: Story = {
  args: {
    code: `const reallyLongVariableName = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis animi nisi repudiandae ex doloribus blanditiis sit dolorum neque dolores, architecto, dolorem eos explicabo vel amet commodi quisquam maiores provident! Eaque, vel dolore aliquid architecto, maxime eum sit asperiores delectus, rerum ratione cupiditate illum natus harum laudantium blanditiis consequatur laboriosam quis. Commodi quisquam fugiat sapiente molestias, atque reprehenderit laboriosam corporis! Porro, molestiae. Veritatis dolore placeat tempora, voluptatibus excepturi quis dolorem neque blanditiis nam facere optio sed deserunt aspernatur, ipsa officiis? Libero eum illum, sint asperiores laudantium voluptatum, excepturi fugit nihil reprehenderit modi molestiae rem quisquam facere, ab et blanditiis? Eius libero itaque facilis ratione! Aspernatur ut id possimus impedit, necessitatibus accusantium cumque nulla explicabo totam beatae, corporis optio pariatur nostrum facere.`,
    lang: javascript,
    wrap: false,
    label: "No Wrap",
  },
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image } from "./index";

export default {
  title: "atoms/Image",
  component: Image,
  argTypes: {
    source: {
      control: { type: "select" },
      options: ["Assets/login.svg", "Assets/signup.svg"],
    },
    width: {
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args: any) => (
  <Image {...args} />
);

export const Login = Template.bind({});
Login.args = {
  source: "Assets/login.svg",
  width: "720px",
  height: "768px",
};

export const Signup = Template.bind({});
Signup.args = {
  source: "Assets/signup.svg",
  width: "720px",
  height: "768px",
};
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image } from "./index";

export default {
  title: "atoms/Image",
  component: Image,
  argTypes: {
    source: {
      control: { type: "select" },
      options: ["assets/images/LoginImage.svg", "assets/images/SignupImage.svg"],
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
  source: "assets/images/LoginImage.svg",
  width: "720px",
  height: "768px",
};

export const Signup = Template.bind({});
Signup.args = {
  source: "assets/images/SignupImage.svg",
  width: "720px",
  height: "768px",
};

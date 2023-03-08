import { ComponentMeta, ComponentStory } from "@storybook/react";
import ApplicationHeader from ".";

export default {
  title: "organisms/AppliactionHeader",
  component: ApplicationHeader  
} as ComponentMeta<typeof ApplicationHeader>;

const Template: ComponentStory<typeof ApplicationHeader> = () => (
  <ApplicationHeader/>
);
export const Primary = Template.bind({});
Primary.args = {
  
};


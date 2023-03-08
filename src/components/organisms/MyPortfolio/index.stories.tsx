import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyPortfolio from "."
export default {
    title: "organisms/MyPortfolio",
    component: MyPortfolio,
    argTypes: {
      mainHead:{
        control:{type:"text"},
      },
      imageOne:{
        control:{type:"text"},
      },
      imageTwo:{
        control:{type:"text"},
      }

    }
  } as ComponentMeta<typeof MyPortfolio>;
  const template: ComponentStory<typeof MyPortfolio> = (args) => <MyPortfolio {...args}/>;
  export const MyPortfolio1 = template.bind({});
MyPortfolio1.args = {
   mainHead:"My Portfolio",
   imageOne:"assets/images/chart.svg",
   imageTwo:"assets/images/list-1.svg"
  };
  
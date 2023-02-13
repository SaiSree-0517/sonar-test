import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from "./index"
export default {
    title: "Icon Atom",
    component: Icon,
    argTypes: {
      path: {
      control: {type:'select'},
      options: ['assets/images/bank-card.svg',
        "assets/images/eye.svg",
        "assets/images/filter.svg",
        "assets/images/filter.svg",
        "assets/images/graph.svg",
        "assets/images/info.svg",
        "assets/images/repeat.svg",
        "assets/images/dashboard.svg",
        "assets/images/arrows.svg",
        "assets/images/bitcoin.svg",
        "assets/images/chart.svg",
        "assets/images/edit.svg",
        "assets/images/lined-star.svg"],
      },
      width: {
        control: { type: 'text' },
      },
      height:{
        control: { type: 'text' },
      }, 
    }
  } as ComponentMeta<typeof Icon>;
  const template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
  export const Icon1 = template.bind({});
  Icon1.args = {
    path: 'assets/images/dashboard.svg',
    width: '20px',
    height: '20px',
  };
  
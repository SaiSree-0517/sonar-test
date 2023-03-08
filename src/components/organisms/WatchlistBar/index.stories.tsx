import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import WatchList from "."
export default {
    title: "organisms/WatchList",
    component: WatchList,
    argTypes: {
      mainText:{
        control:{type:"text"},
      },
      optionText:{
        control:{type:"text"},
      },
      icon:{
        control:{type:"text"},
      },
      editText:{
        control:{type:"text"},
      },
    }
  } as ComponentMeta<typeof WatchList>;
  const template: ComponentStory<typeof WatchList> = (args) => <WatchList {...args}/>;
  export const WatchList1 = template.bind({});
WatchList1.args = {
   mainText:"WatchList",
   optionText:"Discover Assets",
   icon:"assets/images/chevron-left-blue.svg",
   partition:"assets/images/Partition.svg",
   editText:"View List"
  };
  
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => {
  return (
    <div>
      <Button {...args} />
    </div>
  );
};

export const GrayBtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GrayBtn.args = {
  colorScheme: 'gray',
};

export const RedBtn = Template.bind({});

RedBtn.args = {
  colorScheme: 'red',
};

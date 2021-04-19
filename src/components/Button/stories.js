import React from "react";
import { Button } from ".";

export default {
  title: `components/Button`,
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "Primary",
};

export const Outline = Template.bind({});
Outline.args = {
  type: "outline",
  label: "Outline",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  label: "Secondary",
};

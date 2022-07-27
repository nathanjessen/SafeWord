import { Story, Meta } from '@storybook/react';
import { FeatureSection } from './FeatureSection';

export default {
  title: "Components/FeatureSection",
  component: FeatureSection,
} as Meta;

const Template: Story = (args) => <FeatureSection {...args} />;

export const Default = Template.bind({});
Default.args = {};

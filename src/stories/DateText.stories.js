import React from 'react';
import DateText from './DateText';

import moment from 'moment';
moment().format();

export default {
  component: DateText,
  title: 'DateText',
};

const Template = args => <DateText {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: moment().add(21, 'days'),
};

export const InLessThanADay = Template.bind({});
InLessThanADay.args = {
  date: moment().add(206, 'minutes'),
};

export const InThePast = Template.bind({});
InThePast.args = {
  ...Default.args,
  date: moment().subtract(14, 'days'),
}

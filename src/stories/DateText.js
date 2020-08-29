import React from "react";

import moment from 'moment';
moment().format();

export default function DateText({ date }) {
  return (
    <span>
      {moment(date).fromNow()}
    </span>
  );
}
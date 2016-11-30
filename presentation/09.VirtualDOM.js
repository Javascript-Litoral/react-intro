import React from "react";

import {
  Heading
} from "spectacle";

import Link from './common/Link'

export default function VirtualDOM() {
  return (
    <div>
      <Heading size={2} textColor="primary">Virtual DOM</Heading>
      <iframe
        width="840"
        height="472"
        src="https://www.youtube.com/embed/BYbgopx44vo"
        frameborder="0"
        allowfullscreen
      />
    </div>
  );
}

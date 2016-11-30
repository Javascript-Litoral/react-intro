import React from "react";

import {
  Heading
} from "spectacle";

import Link from './common/Link'

export default function JSX() {
  return (
    <Heading size={2}>
      <Link
        href="http://jsxtoreact.host/"
        textColor="quaternary"
      >
        JSX
      </Link>
    </Heading>
  );
}

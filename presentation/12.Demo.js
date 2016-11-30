import React from "react";

import {
  Heading
} from "spectacle";

import Link from './common/Link'

export default function Demo() {
  return (
    <Heading size={2}>
      <Link
        href="https://github.com/facebookincubator/create-react-app"
        textColor="quaternary"
      >
        creat-react-app (demo)
      </Link>
    </Heading>
  );
}

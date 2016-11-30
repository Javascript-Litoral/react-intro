import React from "react";

import {
  Heading,
  Text
} from "spectacle";

import Link from './common/Link'

export default function Me({image}) {
  return (
    <div>
      <Heading size={4} lineHeight={1} textColor="primary">
        Christian Gill
      </Heading>
      <Text>
        <Link textColor="quaternary" href="https://gillchristian.xyz">
          Fullstack JS
        </Link>
        {' - '}
        <Link textColor="quaternary" href="https://www.altoroslabs.com/">
          Altoros
        </Link>
      </Text>
    </div>
  );
}

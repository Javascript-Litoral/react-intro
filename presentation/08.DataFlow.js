import React from "react";

import {
  Heading
} from "spectacle";

import Link from './common/Link'

export default function DataFlow() {
  return (
    <Heading size={2} textColor="primary">
      <i>Data</i> => <i>Flow</i> => unidireccional
    </Heading>
  );
}

import React from "react";

import {
  Heading,
  Text,
  Image,
  Layout,
  Fill
} from "spectacle";

export default function Intro({image}) {
  return (
    <div>
      <Heading size={2} lineHeight={1} textColor="primary">
        React, UI con esteroides
      </Heading>
      <Layout>
        <Fill />
        <Fill />
        <Fill>
          <Image
            src={image}
            margin="150px 0 0"
            height="220px"
            className="react-logo"
            alt="logo"
          />
        </Fill>
      </Layout>
    </div>
  );
}

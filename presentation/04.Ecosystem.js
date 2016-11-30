import React from "react";

import {
  Image,
  Fill,
  Layout
} from "spectacle";

import Link from './common/Link'

export default function Ecosystem({images}) {
  return (
    <div>
      <Layout>
        <Fill>
          <Link href="http://redux.js.org/" margin="0 0 50px 0" style={{display: 'block'}}>
            <Image src={images[0]} width="220" height="200" />
          </Link>
        </Fill>
        <Fill>
          <Link href="https://facebook.github.io/flux/">
            <Image src={images[1]} width="200" height="200" />
          </Link>
        </Fill>
      </Layout>
      <Layout>
        <Fill>
          <Link
            href="https://facebook.github.io/immutable-js/"
            style={{
              marginTop: 50,
              display: 'block'
            }}
          >
            <Image src={images[3]} width="250" height="75" />
          </Link>
        </Fill>
        <Fill>
          <Link href="https://facebook.github.io/relay/">
            <Image src={images[2]} width="250" height="165" />
          </Link>
        </Fill>
      </Layout>
    </div>

  );
}

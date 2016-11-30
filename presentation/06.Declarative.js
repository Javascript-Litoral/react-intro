import React from "react";

import {
  Heading,
  CodePane
} from "spectacle";

const js =
  "function link(url, text) {\n" +
  "  return `<a href=${url}>${text}</a>`\n" +
  "}\n" +
  "\n" +
  "const node = document.getElementById('link')\n" +
  "node.innerHTML = link('http://facebook.github.io/react', 'React')"

const style = {
  fontSize: 21,
  background: 'secondary',
  borderRadius: 6
}

export default function Declarative() {
  return (
    <div>
      <Heading size={4} textColor="quaternary">Declarativo</Heading>
      <CodePane
        style={style}
        lang="html"
        source='<div id="link"></div>'
        margin="30px auto"
      />
      <CodePane
        style={style}
        lang="js"
        source={js}
        margin="30px auto"
      />
    </div>
  );
}

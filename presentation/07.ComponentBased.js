import React from "react";

import {
  Heading,
  CodePane
} from "spectacle";

const js =
  "function link(url, text) {\n" +
  "  return `<a href=${url}>${text}</a>`\n" +
  "}\n\n" +
  "function linkPerfil(slug) {\n" +
  "  return `\n" +
  "    <div class='linkPerfil'>\n" +
  "      ${link('/profile/' + slug, slug)}\n" +
  "    <div>\n"+
  "  `\n" +
  "}\n\n" +
  "const node = document.getElementById('link')\n" +
  "node.innerHTML = linkPerfil('js-litoral')\n"

const style = {
  fontSize: 21,
  background: 'secondary',
  borderRadius: 6
}

export default function ComponentBased() {
  return (
    <div>
      <Heading size={4} textColor="quaternary">
        <i>Component-Based</i>
      </Heading>
      <CodePane
        style={style}
        lang="js"
        source={js}
        margin="30px auto"
      />
    </div>
  );
}

// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import slides
import Intro from "./01.Intro";

// Import notes
import {notes, titlelize} from './notes'

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../style.css");

const images = {
  reactLogo: require("../assets/logo.svg"),
};

preloader(images);

const theme = createTheme({
  primary: "#61dafb",
  secondary: "#2d2d2d",
  tertiary: "#222",
  quaternary: "#cc7a6f"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={750}>
          <Slide bgColor="secondary" notes={titlelize(notes.intro)}>
            <Intro image={images.reactLogo}/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

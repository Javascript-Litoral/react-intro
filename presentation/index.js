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
import Me from "./02.Me";
import Roadmap from "./03.Roadmap";
import Ecosystem from "./04.Ecosystem";
import Concepts from "./05.Concepts";
import Declarative from "./06.Declarative";
import ComponentBased from "./07.ComponentBased";
import DataFlow from "./08.DataFlow";
import VirtualDOM from "./09.VirtualDOM";
import JSX from "./10.JSX";
import PropsState from "./11.PropsState";
import Demo from "./12.Demo";
import Questions from "./13.Questions";
import Thanks from "./14.Thanks";

// Import notes
import {notes, titlelize} from './notes'

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  reactLogo: require("../assets/logo.svg"),
  logoRedux: require("../assets/logo-redux.png"),
  logoFlux: require("../assets/logo-flux.png"),
  logoRelay: require("../assets/logo-relay.png"),
  logoImmutable: require("../assets/logo-immutable.png"),
  thanks: require("../assets/thanks.gif")
};

const logos = [
  images.logoRedux.replace("/", ""),
  images.logoFlux.replace("/", ""),
  images.logoRelay.replace("/", ""),
  images.logoImmutable.replace("/", "")
]

preloader(images);

const theme = createTheme({
  primary: "#61dafb",
  secondary: "#2d2d2d",
  tertiary: "#333",
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
          <Slide bgColor="secondary" >
            <Me />
          </Slide>
          <Slide bgColor="secondary" >
            <Roadmap />
          </Slide>
          <Slide bgColor="secondary" notes={titlelize(notes.concepts)}>
            <Concepts />
          </Slide>
          <Slide bgColor="secondary" notes={titlelize(notes.ecosystem)}>
            <Ecosystem images={logos} />
          </Slide>
          <Slide bgColor="#babfc6" notes={titlelize(notes.declarative)}>
            <Declarative />
          </Slide>
          <Slide bgColor="#babfc6" notes={titlelize(notes.componentBased)}>
            <ComponentBased />
          </Slide>
          <Slide bgColor="secondary" notes={titlelize(notes.dataFlow)}>
            <DataFlow />
          </Slide>
          <Slide bgColor="secondary" notes={titlelize(notes.vdom)}>
            <VirtualDOM />
          </Slide>
          <Slide bgColor="secondary" notes={titlelize(notes.jsx)}>
            <JSX />
          </Slide>
          <Slide bgColor="secondary" notes={titlelize(notes.propsState)}>
            <PropsState />
          </Slide>
          <Slide bgColor="secondary" notes={titlelize(notes.demo)}>
            <Demo />
          </Slide>
          <Slide bgColor="secondary" notes={titlelize(notes.questions)}>
            <Questions />
          </Slide>
          <Slide bgColor="secondary" notes={titlelize(notes.thanks)}>
            <Thanks image={images.thanks.replace("/", "")} />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

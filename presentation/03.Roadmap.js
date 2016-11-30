import React from 'react'

import {
  Heading,
  List,
  ListItem
} from 'spectacle'

const items = [
  'React',
  'Ecosistema',
  'Conceptos',
  'Virtual DOM',
  'JSX',
  'props, state & lifeCycle',
  'creat-react-app (demo)'
]

export default function Roadmap() {
  return (
    <div>
      <Heading textColor="primary" size={2}>
        Roadmap
      </Heading>
      <List textColor="quaternary">
        {items.map((item, key) => <ListItem key={key}>{item}</ListItem>)}
      </List>
    </div>
  )
}

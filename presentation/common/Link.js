import React from 'react'

import {Link} from 'spectacle'

export default function ExternalLink(props) {
  return <Link target="_blank" {...props}>{props.children}</Link>
}

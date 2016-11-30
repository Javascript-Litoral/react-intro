import React from 'react'

import './Alert.css'

export default function Alert({dismiss, children}) {
  return (
    <div className="alert">
      <div className="alert-content">
        {children}
      </div>
      <span className="alert-dismiss" onClick={dismiss}>x</span>
    </div>
  )
}

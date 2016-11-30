import React from 'react'

export default function({onChange, value, isValid, placeholder, type = 'text'}) {
  return (
    <div>
      <input
        className={!isValid && 'has-error'}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

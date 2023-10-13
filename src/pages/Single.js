import React from 'react'

export default function Single () {
        const ids = new URLSearchParams(document.location.search).get("key")

  return (
      <div>displaying profile for { ids}</div>
  )
}

import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

export default function Day() {
    const { id } = useParams()
    return (
      <>
        <h1>Day { id }</h1>
      </>
    )
}

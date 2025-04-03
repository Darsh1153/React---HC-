import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div>
        <h1>hi: {userid}</h1>
    </div>
  )
}

export default User

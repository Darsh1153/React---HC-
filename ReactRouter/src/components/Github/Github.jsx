import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Darsh1153")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data);
    })
  })

  return (
    <div>
      <h1 className='text-center text-3xl bg-gray-300 text-black p-4'>Github followers: {data.followers}</h1>
    </div>
  )
}

export default Github

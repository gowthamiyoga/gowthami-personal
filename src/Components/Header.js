import React, { useState } from 'react'

const Header = () => {
    const [name,setName]=useState("Gowthami")
  return (
    <div>
      <h1>My name is {name}</h1>
      <button onClick={setName("Gowthu")}>click here</button>
    </div>
  )
}

export default Header

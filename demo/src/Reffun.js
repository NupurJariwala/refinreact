import React, { useRef } from 'react'

function Reffun() {
  let name=useRef(null);
  function update()
  {
    console.warn("function call")
    name.current.value="Nupur"
    name.current.style.color="red"
  }
  return (
    <div>
      <div className='reffun'>
        <h1>useRef in react</h1>
        <input type='text' ref={name}></input>
        <button onClick={update}>check</button>
      </div>
    </div>
  )
}

export default Reffun
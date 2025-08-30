// Another.jsx
import React from 'react'

const Another = ({ toggle }) => {
  return (
    <div>
      <button onClick={() => {
        console.log("click");
        toggle();
      }}>click</button>
    </div>
  )
}

export default Another;

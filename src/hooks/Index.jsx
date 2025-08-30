// Index.jsx
import React from 'react'
import Another from './Another'
import useToggle from './useToggle'

const Index = () => {
  const [value, toggle] = useToggle(false);

  return (
    <div>
      <div>
        {value ? <h1>VALUE</h1> : <h1>NOT VALUE</h1>}
      </div>
      <Another toggle={toggle} />
    </div>
  )
}

export default Index;

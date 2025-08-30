import React from 'react'

const Button = ({click, title}) => {
  return (
    <button onClick={click} className="bg-pink-600 text-white px-5 py-2 rounded-xl active:scale-[0.95] text-xs">{title}</button>
  )
}

export default Button
import React, { Component } from 'react'
import withCounder from '../HOC/withCounder';

const HoverCounter = ({count, increment}) => {
    return (
      <div>
        <h1 onMouseOver={increment} className=" text-red-500 px-5 py-2 text-2xl rounded-md">
          Hovered {count} times
        </h1>
      </div>
    );
}

export default withCounder(HoverCounter);

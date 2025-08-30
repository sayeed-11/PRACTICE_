import React, { useState } from 'react';
import styled from 'styled-components';

const Checkbox = () => {
    const [cheched, setChecked] = useState(false)
  return (
    <StyledWrapper>
      <label className="burger" htmlFor="burger">
        <input onClick={() => {setChecked(!cheched)}} type="checkbox" checked={cheched} id="burger" />
        <span />
        <span />
        <span />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .burger {
    position: relative;
    width: 30px;
    height: 20px;
    background: transparent;
    cursor: pointer;
    display: block;
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: -2px;
    left: 1px;
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 19px;
    left: 1px;
  }`;

export default Checkbox;

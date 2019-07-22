// @flow
import React from 'react'
import styled from 'styled-components'
import { theme } from '../utils/helper'
import Timer from './Timer'
import { questionCount } from '../config'

export type Props = {
  current: number,
}

const Styled = styled.header`
  display: flex;
  justify-content: space-between;
  color: ${theme('hintTextColor')};
  position: relative;

  > .item {
    padding: 1rem;
    font-size: .8rem;
  }

  > .progress {
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 1rem;
    right: 1rem;
    background: currentColor;
    transform-origin: left;
    transition: transform .3s ease-in-out;
  }
`

const Header = (props: Props) => {
  const { current } = props

  return (
    <Styled {...props}>
      <div className="item">{ current } / { questionCount }</div>
      <Timer className="item" />
      <div
        className="progress"
        style={{transform: `scaleX(${current / questionCount})`}}
      />
    </Styled>
  )
}

export default Header
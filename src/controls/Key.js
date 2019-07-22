// @flow
import React from 'react'
import styled from 'styled-components'
import { theme, propTrue } from '../utils/helper'

export type Props = {
  value: string,
  primary?: boolean,
}

export const Styled = styled.button`
  appearance: none;
  border: none;
  outline: none;
  color: ${theme('secondaryTextColor')};
  background: transparent;
  height: 4rem;
  font-size: 1.2rem;
  font-family: inherit;
  position: relative;

  ${propTrue('primary')} {
    color: ${theme('primaryColor')};
  }

  &:active {
    &::after {
      transform: scale(1);
      transition-timing-function: ease-out;
      opacity: 1;
    }
  }

  &::after {
    content: '';
    background: rgba(100,100,100, .5);
    display: block;
    height: 4rem;
    width: 4rem;
    position: absolute;
    border-radius: 50%;
    transform: scale(1.2);
    left: 50%;
    margin-left: -2rem;
    top: 50%;
    margin-top: -2rem;
    opacity: 0;
    transition: transform .1s ease-in,
                opacity .2s ease-in;
  }
`

const Key = ({ value, ...props }: Props) => (
  <Styled {...props}>{ value }</Styled>
)

export default Key
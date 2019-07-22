// @flow
import React from 'react'
import styled from 'styled-components'
import { theme } from '../utils/helper'

export type Props = {
  expression: string,
  result: string,
}

export const Styled = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-size: 1.4rem;

  .expression {
    color: ${theme('secondaryTextColor')};
    font-size: 1em;
    margin-bottom: .5rem;
  }
  
  .result-wrapper {
    font-size: 3em;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: auto;
    text-align: right;
  }
`

const Monitor = ({ expression, result }: Props) => (
  <Styled>
    <div className="expression">{ expression }</div>
    <div className="result-wrapper">
      <div className="result">{ result || '=' }</div>
    </div>
  </Styled>
)

export default Monitor
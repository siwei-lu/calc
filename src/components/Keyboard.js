// @flow
import React from 'react'
import styled from 'styled-components'
import { range } from '../utils/common'
import Key, { Styled as StyledKey } from '../controls/Key'

export type Props = {
  onInput?: (value: string) => void,
  onPress?: (type: 'delete' | 'np' | 'clean' | 'submit') => void,
}

export const Styled = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${StyledKey} {
    width: 33.33%;
  }
`

const keys = [...range(1, 10), '.', 0, '⌫', '±', 'C'];

const Keyboard = ({ onInput, onPress }: Props) => {
  const handlePress = (v: string) => () => {
    let type = ''

    if (v === '⌫') {
      type = 'delete'
    } else if (v === '±') {
      type = 'np'
    } else if (v === 'C') {
      type = 'clean'
    } else if (v === '➤') {
      type = 'submit'
    } else {
      onInput && onInput(v)
      return
    }

    onPress && onPress(type)
  }

  return (
    <Styled>{keys.map(k =>
      <Key key={k} value={k.toString()} onClick={handlePress(k.toString())} />
    )}
      <Key value="➤" primary onClick={handlePress('➤')} />
    </Styled>
  )
}

export default Keyboard
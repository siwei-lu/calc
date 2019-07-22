// @flow
import React, { useState } from 'react'
import styled from 'styled-components'

export const Styled = styled.div``

const formated = (minute: number) => {
  const hours = String(Math.floor(minute / 60)).padStart(2, '0')
  const minutes = String(minute % 60).padStart(2, '0')
  return `${hours} : ${minutes}`
}

const Timer = (props: any) => {
  const [minute, changeMinute] = useState(0)

  setInterval(() => changeMinute(minute + 1), 60000)

  return (
    <Styled {...props}>{ formated(minute) }</Styled>
  )
}

export default Timer
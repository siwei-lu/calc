// @flow
import React, { useState } from 'react'
import styled from 'styled-components'
import Expression from '@idan-loo/expression'
import { questionCount } from '../config'
import Header from '../components/Header'
import Monitor, { Styled as StyledMonitor } from '../components/Monitor'
import Keyboard from '../components/Keyboard'

const Styled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;

  ${StyledMonitor} {
    flex: 1;
  }
`

const Index = () => {
  const [expr, changeExpr] = useState(Expression.make())
  const [current, changeCurrent] = useState(1)
  const [result, changeResult]= useState('')

  const goNext = () => {
    changeCurrent(current + 1)
    changeResult('')
    changeExpr(Expression.make())
  }

  const submit = () => {
    if (expr.result !== parseFloat(result)) {
      return alert('计算错误！')
    }

    if (current === questionCount) {
      alert('练习完成！')
      return location.reload()
    }

    goNext()
  }

  const handleKeyboardInput = v => {
    changeResult(result + v)
  }

  const handleKeyboardPress = type => {
    if (type === 'delete') {
      return changeResult(result.substr(0, result.length - 1))
    }

    if (type === 'np') {
      let newValue = result

      if (newValue[0] === '-') {
        newValue = newValue.substr(1, newValue.length)
      } else {
        newValue = '-' + newValue
      }

      return changeResult(newValue)
    }

    if (type === 'clean') {
      return changeResult('')
    }

    submit()
  }

  return (
    <Styled>
      <Header current={current} />
      <Monitor expression={expr.infix} result={result} />
      <Keyboard
        onInput={handleKeyboardInput}
        onPress={handleKeyboardPress} 
      />
    </Styled>
  )
}

export default Index
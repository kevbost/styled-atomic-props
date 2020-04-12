import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import getPropStyles, { Div, H1, Label, P } from '../styles'

import { colorVars } from '../styles/variables'

const StyledInput = styled.input.attrs({
  propStyles: 'w100 px1 py2 mb3 border borderRadius hover="bgDanger"'
})`
  &::placeholder {
    color: ${colorVars.$gray400}; /* $gray_a / #aaaaaa */
    opacity: 1; /* Override Firefox's unusual default opacity; */
  }

  ${( props ) => {
    return getPropStyles( props )
  }}
`

const StyledComponent = ( props ) => {
  return <Div {...props}>{'div'}</Div>
}

storiesOf( 'Scratchpad', module ).add( 'PropStyles Tester', () => {
  const [ inputValue, setInputValue ] = useState(
    'info bold center pa4 mb4 borderRadius border bcInfo ba2 bs1 bgWhite pointer'
  )
  function handleSubmit( e ) {
    e.preventDefault()
  }

  return (
    <Div padding bgDark h100vh>
      <Div
        bgWhite
        borderRadius
        padding
        pb2
        style={{
          boxShadow: '4px 5px 10px rgba(0, 0, 0, 0.25) '
        }}
      >
        <H1 ma0 center>
          {'propStyles Tester'}
        </H1>
        <Div my4 mx4>
          <Div pa4 border>
            <form onSubmit={handleSubmit}>
              <div>
                <h3>{'Add propStyles, separated by spaces'}</h3>
                <P fontSm mb2>
                  {'All default propStyles and those provided to the config are available here '}
                  {'(except for psudeoselectors such as hover, etc)'}
                </P>
                <Label gray400 bold fontSm mb0>
                  {'The "Div" below the input will be updated'}
                </Label>
                <StyledInput
                  type="text"
                  value={inputValue}
                  onChange={( e ) => {
                    return setInputValue( e.target.value )
                  }}
                  placeholder="mb4 danger border bcSuccess"
                />
              </div>
            </form>
            <StyledComponent propStyles={inputValue} />
          </Div>
        </Div>
      </Div>
    </Div>
  )
})

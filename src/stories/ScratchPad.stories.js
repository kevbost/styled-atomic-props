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

storiesOf( 'Scratchpad', module ).add( 'PropStyles Tester', () => {
  const [ propStylesInput, setPropStylesInput ] = useState(
    'info bold center pa4 mb4 borderRadius border bcInfo ba2 bs1 bgWhite pointer'
  )
  const [ hoverInput, setHoverInput ] = useState( 'white bgDanger bcDanger' )
  const [ activeInput, setActiveInput ] = useState( 'bgInfo bcInfo' )

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
              <Div mb3>
                <h3>{'Add propStyles, separated by spaces'}</h3>
                <P fontSm mb2>
                  {'The "Div" below the inputs will be updated'}
                </P>
                <P fontSm mb2>
                  {'All default propStyles and those provided to the config are available here'}
                </P>
                <Label gray400 bold fontSm mb0>
                  {'propStyles'}
                </Label>
                <StyledInput
                  type="text"
                  value={propStylesInput}
                  onChange={( e ) => {
                    return setPropStylesInput( e.target.value )
                  }}
                  placeholder="mb4 danger border bcSuccess"
                />
                <Label gray400 bold fontSm mb0>
                  {'hover'}
                </Label>
                <StyledInput
                  type="text"
                  value={hoverInput}
                  onChange={( e ) => {
                    return setHoverInput( e.target.value )
                  }}
                  placeholder="bgDanger"
                />
                <Label gray400 bold fontSm mb0>
                  {'active'}
                </Label>
                <StyledInput
                  type="text"
                  value={activeInput}
                  onChange={( e ) => {
                    return setActiveInput( e.target.value )
                  }}
                  placeholder="bgSuccess"
                />
              </Div>
            </form>
            <Div propStyles={propStylesInput} hover={hoverInput} active={activeInput}>
              {'div'}
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  )
})

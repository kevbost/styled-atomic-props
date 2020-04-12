import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Div from './Div'

afterEach( cleanup )

test( 'Div component', () => {
  render(
    <div>
      <Div border />
    </div>
  )
  const style = global.getStyledComponentStyles( Div )
  expect( style.border ).toEqual( '1px solid #bfc9d8' )
})

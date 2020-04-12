import React from 'react'
import _ from 'lodash'

import { propStyles } from './'

export const castPropStyles = propStyles

const splitToArray = ( str ) => {
  const propStyle = typeof str === 'function' ? str( 'key: value;' ) : str

  // console.log( propStyle )

  const strFixed = propStyle.replace( /^\s+/gm, '' ).split( /\r\n|\r|\n/ )
  const cleaned = _.reject( strFixed, ( x ) => {
    return x.length === 0 || x.indexOf( '}' ) === 0 || x.indexOf( '{' ) === x.length - 1 || x.indexOf( ',' ) === x.length - 1
  })

  return cleaned
}

describe( 'syntax', () => {
  it( 'should make sure all definitions have closing semicolon', () => {
    Object.keys( propStyles ).map( ( x ) => {
      if ( x.charAt( 0 ) !== '_' ) {
        const cleaned = splitToArray( castPropStyles[x] )
        cleaned.map( ( y ) => {
          if ( y.substr( -1 ) !== ';' ) {
            /* force better error to log in jest console */
            console.warn( `${x}: "${y}"` )
          }
          expect( y.substr( -1 ) ).toEqual( ';' )
        })
      }
    })
  })

  it( 'should should test this w/o semicolon', () => {
    const cleaned = splitToArray( `
      &:hover,
      .someSelector {

        without: semicolon

      }
    ` )
    cleaned.map( ( y ) => {
      expect( y.substr( -1 ) === ';' ).toEqual( false )
    })
  })

  it( 'should should test this w/ semicolon', () => {
    const cleaned = splitToArray( `
      &:hover,
      .someSelector {

        without: semicolon;

      }
    ` )
    cleaned.map( ( y ) => {
      expect( y.substr( -1 ) === ';' ).toEqual( true )
    })
  })
})

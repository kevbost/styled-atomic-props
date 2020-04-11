import styled from 'styled-components'
import getPropStyles from '../getPropStyles'

export const H1 = styled.h1`
  ${( props ) => {
    return getPropStyles( props )
  }}
`
H1.displayName = 'H1'

export const H2 = styled.h2`
  ${( props ) => {
    return getPropStyles( props )
  }}
`
H2.displayName = 'H2'

export const H3 = styled.h3`
  ${( props ) => {
    return getPropStyles( props )
  }}
`
H3.displayName = 'H3'

export const H4 = styled.h4`
  ${( props ) => {
    return getPropStyles( props )
  }}
`
H4.displayName = 'H4'

export const H5 = styled.h5`
  ${( props ) => {
    return getPropStyles( props )
  }}
`
H5.displayName = 'H5'

export const H6 = styled.h6`
  ${( props ) => {
    return getPropStyles( props )
  }}
`
H6.displayName = 'H6'

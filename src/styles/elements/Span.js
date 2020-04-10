/* eslint-disable import/named */
import styled from 'styled-components'
import getPropStyles from '../getPropStyles'

export const Span = styled.span`
  ${( props ) => {
    return getPropStyles( props )
  }}
`
Span.displayName = 'Span'

export default Span

import styled from 'styled-components'
import getPropStyles from '../getPropStyles'

export const A = styled.a`
  ${( props ) => {
    return getPropStyles( props )
  }}
`
A.displayName = 'A'

export default A

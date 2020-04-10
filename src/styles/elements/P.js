import styled from 'styled-components'
import getPropStyles from '../getPropStyles'

export const P = styled.p`
  ${( props ) => {
    return getPropStyles( props )
  }}
`
P.displayName = 'P'

export default P

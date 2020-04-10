import styled from 'styled-components'
import getPropStyles from '../getPropStyles'

export const Ul = styled.ul`
  ${( props ) => {
    return getPropStyles( props )
  }}
`
Ul.displayName = 'Ul'

export default Ul

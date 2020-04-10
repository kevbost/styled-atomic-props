import styled from 'styled-components'
import getPropStyles from '../getPropStyles'

export const Strong = styled.strong`
  ${( props ) => {
    return getPropStyles( props )
  }}
`
Strong.displayName = 'Strong'

export default Strong

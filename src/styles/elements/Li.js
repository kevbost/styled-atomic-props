import styled from 'styled-components'
import getPropStyles from '../getPropStyles'

export const Li = styled.li`
  ${( props ) => {
    return getPropStyles( props )
  }}
`
Li.displayName = 'Li'

export default Li

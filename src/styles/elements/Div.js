import styled from 'styled-components'
import getPropStyles from '../getPropStyles'

export const Div = styled.div`
  ${( props ) => {
    return getPropStyles( props )
  }}
`
Div.displayName = 'Div'

export default Div

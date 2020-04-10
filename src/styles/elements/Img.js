import styled from 'styled-components'
import getPropStyles from '../getPropStyles'

export const Img = styled.img`
  ${( props ) => {
    return getPropStyles( props )
  }}
`
Img.displayName = 'Img'

export default Img

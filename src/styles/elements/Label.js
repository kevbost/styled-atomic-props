import styled from 'styled-components'
import getPropStyles from '../getPropStyles'

export const Label = styled.label`
  ${( props ) => {
    return getPropStyles( props )
  }}
`
Label.displayName = 'Label'

export default Label

import { colorVars, themeVars } from '../variables'
import generatePropStyles from '../utils/generatePropStyles'

export const borderColorsPropStyles = generatePropStyles( 'border-color', 'bc', {
  ...colorVars,
  ...themeVars
})

export default borderColorsPropStyles

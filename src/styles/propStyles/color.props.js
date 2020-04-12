import { colorVars, themeVars } from '../variables'
import generatePropStyles from '../utils/generatePropStyles'

export const colorsPropStyles = generatePropStyles( 'color', '', colorVars )
export const themeColorsPropStyles = generatePropStyles( 'color', '', themeVars )

const colorPropStyles = {
  ...colorsPropStyles,
  ...themeColorsPropStyles
}

export default colorPropStyles

import { colorVars, themeVars } from '../variables'
import generatePropStyles from '../utils/generatePropStyles'

export const backgroundColors = generatePropStyles( 'background-color', 'bg', colorVars )
export const themeBackgroundColors = generatePropStyles( 'background-color', 'bg', themeVars )

const backgroundColorPropStyles = {
  ...backgroundColors,
  ...themeBackgroundColors
}

export default backgroundColorPropStyles

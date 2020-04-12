// eslint-disable-next-line no-restricted-imports
import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'

import { colorVars, themeVars, fontVars } from '../styles/variables'

// Options are, of course, optional, these are the default options
const options = {
  black: colorVars.$gray800,
  bodyColor: colorVars.$gray800,
  bodyBg: colorVars.$gray100,
  dtFontWeight: 700,
  enablePointerCursorForButtons: true,
  fontFamilyBase:
    '"Lato", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontFamilyMonospace:
    '"Lato", sans-serif, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSizeBase: fontVars.$font_size,
  fontWeightBase: 400,
  fontWeightBolder: 'bolder',
  headingsMarginBottom: '0.5rem',
  labelMarginBottom: '0.5rem',
  lineHeightBase: 1.5,
  linkColor: themeVars.$primary,
  linkDecoration: 'none',
  linkHoverColor: themeVars.$secondary,
  linkHoverDecoration: 'none',
  paragraphMarginBottom: '1rem',
  tableCaptionColor: colorVars.$gray500,
  tableCellPadding: '0.75rem'
}

const rebootCss = reboot( options )

const GlobalStyle = createGlobalStyle`
  ${rebootCss}
  /* other styles */
`

export default GlobalStyle

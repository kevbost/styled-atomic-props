import vars, { colorVars, themeVars, fontVars } from '../variables'
import { marginPropStyles, paddingPropStyles } from './spacing.props'

export const colorPropStyles = {
  transparent: `color: ${colorVars.$transparent};`,
  white: `color: ${colorVars.$white};`,
  black: `color: ${colorVars.$black};`,
  gray100: `color: ${colorVars.$gray100};`,
  gray200: `color: ${colorVars.$gray200};`,
  gray300: `color: ${colorVars.$gray300};`,
  gray400: `color: ${colorVars.$gray400};`,
  gray500: `color: ${colorVars.$gray500};`,
  gray600: `color: ${colorVars.$gray600};`,
  gray700: `color: ${colorVars.$gray700};`,
  gray800: `color: ${colorVars.$gray800};`,
  gray900: `color: ${colorVars.$gray900};`,
  primary: `color: ${themeVars.$primary};`,
  secondary: `color: ${themeVars.$secondary};`,
  danger: `color: ${themeVars.$danger};`
}

export const backgroundColorPropStyles = {
  bgTransparent: `background-color: ${colorVars.$transparent};`,
  bgWhite: `background-color: ${colorVars.$white};`,
  bgBlack: `background-color: ${colorVars.$black};`,
  bgGray100: `background-color: ${colorVars.$gray100};`,
  bgGray200: `background-color: ${colorVars.$gray200};`,
  bgGray300: `background-color: ${colorVars.$gray300};`,
  bgGray400: `background-color: ${colorVars.$gray400};`,
  bgGray500: `background-color: ${colorVars.$gray500};`,
  bgGray600: `background-color: ${colorVars.$gray600};`,
  bgGray700: `background-color: ${colorVars.$gray700};`,
  bgGray800: `background-color: ${colorVars.$gray800};`,
  bgGray900: `background-color: ${colorVars.$gray900};`,
  bgPrimary: `background-color: ${themeVars.$primary};`,
  bgSecondary: `background-color: ${themeVars.$secondary};`,
  bgDanger: `background-color: ${themeVars.$danger};`
}

export const borderPropStyles = {
  border: `border: ${vars.$border};`
}

export const psuedoSelectorsPropStyles = {
  hover: ( style ) => {
    return `&:hover {
      ${style}
    }`
  },
  focus: ( style ) => {
    return `&:focus {
      ${style}
    }`
  },
  active: ( style ) => {
    return `&:active {
      ${style}
    }`
  },
  propStyles: ( style ) => {
    return `${style}`
  }
}

export const displayPropStyles = {
  hide: 'display: none;',
  displayNone: 'display: none;',
  block: 'display: block;',
  inlineBlock: 'display: inline-block;',
  inline: 'display: inline;',

  hidei: 'display: none !important;',
  displayNonei: 'display: none !important;',
  blocki: 'display: block !important;',
  inlineBlocki: 'display: inline-block !important;',
  inlinei: 'display: inline !important;'
}

export const utilityPropStyles = {
  test: 'background-color: rebeccapurple !important;',
  transition: 'transition: all 0.15s ease-in-out;',
  invisible: 'visibility: hidden;',
  pointer: 'cursor: pointer;',
  cursorPointer: 'cursor: pointer;',
  debug: 'border: 1px solid red;',
  // debugGrid from tachyons.io
  debugGrid:
    'background: transparent url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVR4AWPAC97/9x0eCsAEPgwAVLshdpENIxcAAAAASUVORK5CYII= ) repeat top left;',
  debugGrid16:
    'background: transparent url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVR4AWOgCLz/b0epAa6UGuBOqQHOQHLUgFEDnAbcBZ4UGwDOkiCnkIhdgNgNxAYAiYlD+8sEuo8AAAAASUVORK5CYII= ) repeat top left;',
  alignLeft: 'text-align: left;',
  alignRight: 'text-align: right;',
  center: 'text-align: center;',
  marginCenter: 'margin-left: auto; margin-right: auto;',
  bold: 'font-weight: bold;',
  fwNormal: 'font-weight: normal;',
  italic: 'font-style: italic;',
  fsNormal: 'font-style: normal;',
  small: `font-size: ${fontVars.$font_size_sm}`,
  fontXs: `font-size: ${fontVars.$font_size_xs}`,
  fontSm: `font-size: ${fontVars.$font_size_sm}`,
  fontLg: `font-size: ${fontVars.$font_size_lg}`,
  vBase: 'vertical-align: baseline;',
  vMid: 'vertical-align: middle;',
  vTop: 'vertical-align: top;',
  vBtm: 'vertical-align: bottom;',
  wsNormal: 'white-space: normal;',
  nowrap: 'white-space: nowrap;',
  pre: 'white-space: pre;',
  strike: 'text-decoration: line-through;',
  underline: 'text-decoration: underline;',
  noUnderline: 'text-decoration: none;',
  ttc: 'text-transform: capitalize;',
  ttl: 'text-transform: lowercase;',
  ttu: 'text-transform: uppercase;',
  ttn: 'text-transform: none;',
  static: 'position: static;',
  relative: 'position: relative;',
  absolute: 'position: absolute;',
  fixed: 'position: fixed;',
  listStyleNone: 'list-style-type: none;',
  inheritLineHeight: 'line-height: inherit;',
  userSelectNone: 'user-select: none;',
  h100vh: 'height: 100vh;',
  h100p: 'height: 100%;',
  hAuto: 'height: auto;',
  listUnstyled: `
    padding-left: 0;
    list-style: none;
  `,
  listInline: `
    padding-left: 0;
    list-style: none;

    li {
      display: inline-block;

      &:not(:last-child) {
        margin-right: .5rem;
      }
    }
  `,
  responsive: `
    max-width: 100%;
    height: auto;
  `
}

export const propStyles = {
  ...colorPropStyles,
  ...borderPropStyles,
  ...backgroundColorPropStyles,
  ...psuedoSelectorsPropStyles,
  ...displayPropStyles,
  ...utilityPropStyles,
  ...marginPropStyles,
  ...paddingPropStyles
}

export default propStyles

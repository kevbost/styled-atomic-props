import { colorVars } from './variables'

export const colorPropStyles = {
  transparent: `color: ${colorVars.$transparent};`,
  white: `color: ${colorVars.$white};`,
  black: `color: ${colorVars.$black};`
}

export const borderPropStyles = {
  border: 'border: 1px solid red;'
}

export const backgroundColorPropStyles = {
  bgWhite: `color: ${colorVars.$white};`,
  bgBlack: `color: ${colorVars.$black};`
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
  small: 'font-size: 0.875rem;',
  fontXs: 'font-size: 0.75rem;',
  fontSm: 'font-size: 0.875rem;',
  fontLg: 'font-size: 1.25rem;',
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
  ...utilityPropStyles
}

export default propStyles

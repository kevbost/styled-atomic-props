import { fontVars } from '../variables'
import { css } from 'styled-components'

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
  small: `font-size: ${fontVars.$font_size_sm};`,
  fontXs: `font-size: ${fontVars.$font_size_xs};`,
  fontSm: `font-size: ${fontVars.$font_size_sm};`,
  fontLg: `font-size: ${fontVars.$font_size_lg};`,
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
  listUnstyled: css`
    padding-left: 0;
    list-style: none;
  `[0],
  listInline: css`
    padding-left: 0;
    list-style: none;
    li {
      display: inline-block;
      &:not(:last-child) {
        margin-right: 0.5rem;
      }
    }
  `[0],
  responsive: css`
    max-width: 100%;
    height: auto;
  `
}

export default utilityPropStyles

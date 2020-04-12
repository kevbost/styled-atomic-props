export const boxShadowPropStyles = {
  boxShadowNone: `
    box-shadow: none !important;
    &:hover, &:focus, &:active {
      box-shadow: none !important;
    }
  `,
  bs0: `
    box-shadow: none !important;
    &:hover, &:focus, &:active {
      box-shadow: none !important;
    }
  `,
  bs1: `
    transition: all .15s;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
    &:hover {
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .16), 0 4px 20px 0 rgba(0, 0, 0, .12);
    }
  `
}

export default boxShadowPropStyles

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

export default psuedoSelectorsPropStyles

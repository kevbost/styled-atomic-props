// opacity 5% through opacity 100%
export const opacityPropStyles = () => {
  const obj = {}
  for ( let i = 5; i <= 100; i += 5 ) {
    obj[`opacity${i}p`] = `opacity: ${i / 100};`
  }

  return obj
}

export default opacityPropStyles

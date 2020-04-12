export const fontSizePropStyles = () => {
  const arr = [
    10,
    20,
    30,
    40,
    50,
    55,
    60,
    65,
    70,
    75,
    80,
    85,
    90,
    95,
    100,
    105,
    110,
    115,
    120,
    125,
    130,
    135,
    140,
    145,
    150,
    160,
    170,
    180,
    190,
    200,
    250,
    300,
    350,
    400,
    450,
    500
  ]
  const obj = {}

  arr.map( ( i ) => {
    return ( obj[`font${i}p`] = `font-size: ${i}%;` )
  })

  return obj
}

export default fontSizePropStyles

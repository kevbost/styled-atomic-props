export const flexPropStyles = {
  flex: 'display: flex;',
  displayFlex: 'display: flex;',
  inlineFlex: 'display: inline-flex;',

  flexAuto: `
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
  `,

  flexNone: 'flex: none;',

  flexColumn: 'flex-direction: column;',
  flexRow: 'flex-direction: row;',
  flexWrapWrap: 'flex-wrap: wrap;',
  flexWrapNowrap: 'flex-wrap: nowrap;',
  flexWrapReverse: 'flex-wrap: wrap-reverse;',
  flexColumnReverse: 'flex-direction: column-reverse;',
  flexRowReverse: 'flex-direction: row-reverse;',

  itemsStart: 'align-items: flex-start;',
  itemsEnd: 'align-items: flex-end;',
  itemsCenter: 'align-items: center;',
  itemsBaseline: 'align-items: baseline;',
  itemsStretch: 'align-items: stretch;',

  selfStart: 'align-self: flex-start;',
  selfEnd: 'align-self: flex-end;',
  selfCenter: 'align-self: center;',
  selfBaseline: 'align-self: baseline;',
  selfStretch: 'align-self: stretch;',

  justifyStart: 'justify-content: flex-start;',
  justifyEnd: 'justify-content: flex-end;',
  justifyCenter: 'justify-content: center;',
  justifyBetween: 'justify-content: space-between;',
  justifyAround: 'justify-content: space-around;',

  contentStart: 'align-content: flex-start;',
  contentEnd: 'align-content: flex-end;',
  contentCenter: 'align-content: center;',
  contentBetween: 'align-content: space-between;',
  contentAround: 'align-content: space-around;',
  contentStretch: 'align-content: stretch;',

  flexGrow0: 'flex-grow: 0;',
  flexGrow1: 'flex-grow: 1;',

  flexShrink0: 'flex-shrink: 0;',
  flexShrink1: 'flex-shrink: 1;'
}

export default flexPropStyles

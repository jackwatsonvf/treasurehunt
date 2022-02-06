import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledFogRowProps } from './FogRow.style.types.ts'

export const FogRow = styled.div((props): FlattenSimpleInterpolation => {
  return css`
    width: 800px;
  `
})

export const Square = styled.button(
  (props: StyledFogRowProps): FlattenSimpleInterpolation => {
    return css`
      width: 90px;
      height: 88px;
      background-color: #333;

      ${props.wasGuessed &&
      css`
        background-color: rgba(0, 0, 0, 0);
        pointer-events: none;
      `}

      ${props.isTreasure &&
      css`
        background-color: red;
      `}
    `
  }
)

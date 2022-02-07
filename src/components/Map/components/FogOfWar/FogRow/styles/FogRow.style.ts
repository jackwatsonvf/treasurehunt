import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledFogRowProps } from './FogRow.style.types.ts'

import shovel from '../../../../../../assets/shovel.png'
import bitcoin from '../../../../../../assets/bitcoin.png'

export const FogRow = styled.div((props): FlattenSimpleInterpolation => {
  return css`
    width: 720px;
    height: 88px;
  `
})

export const Square = styled.button(
  (props: StyledFogRowProps): FlattenSimpleInterpolation => {
    return css`
      width: 90px;
      height: 88px;
      background-color: #333;
      opacity: 0.95;
      border-width: 1px;

      ${props.wasGuessed &&
      css`
        background-color: rgba(0, 0, 0, 0);
        pointer-events: none;
      `}

      ${props.isTreasure &&
      css`
        border-color: rgba(0, 0, 0, 0);
        animation: success 0.4s;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        background-image: url(${bitcoin});
        background-repeat: no-repeat;
        background-position: center;
        opacity: 1;

        @keyframes success {
          0% {
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.2);
          }
          80% {
            transform: scale(0.89);
          }
          100% {
            transform: scale(1);
          }
        }
      `}

      ${props.guessEnabled &&
      css`
        cursor: url(${shovel}) 20 20, auto;

        :hover {
          background-color: #555;
        }
      `}
    `
  }
)

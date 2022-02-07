import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledFogOfWarProps } from './FogOfWar.style.types.ts'

export const FogOfWar = styled.div(
  (props: StyledFogOfWarProps): FlattenSimpleInterpolation => {
    return css`
      position: absolute;
      top: 38px;
      left: 40px;
      width: auto;
    `
  }
)

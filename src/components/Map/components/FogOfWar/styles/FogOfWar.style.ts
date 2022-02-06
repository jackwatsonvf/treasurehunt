import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

export const FogOfWar = styled.div((props): FlattenSimpleInterpolation => {
  return css`
    position: absolute;
    top: 38px;
    left: 40px;
    width: auto;
  `
})

import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

export const Page = styled.div((props): FlattenSimpleInterpolation => {
  return css`
    width: 100%;
    height: 100%;
    background-color: #29639b;
  `
})

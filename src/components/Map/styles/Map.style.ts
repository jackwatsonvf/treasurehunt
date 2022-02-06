import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

export const MapContainer = styled.div((props): FlattenSimpleInterpolation => {
  return css`
    position: relative;
    width: 800px;
    margin: 60px auto 0;
  `
})

export const Map = styled.img((props): FlattenSimpleInterpolation => {
  return css``
})

import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

export const TreasureDash = styled.div((props): FlattenSimpleInterpolation => {
  return css`
    width: 100%;
    display: flex;
    flex-direction: column;
  `
})

export const Text = styled.h1((props): FlattenSimpleInterpolation => {
  return css`
    display: flex;
    justify-content: center;
    color: white;
  `
})

export const GuessButton = styled.button(
  (props): FlattenSimpleInterpolation => {
    return css`
      width: 250px;
      height: 50px;
      border-radius: 4px;
      margin: 20px auto 0;
      border-style: none;
      background-color: #3caea3;
      color: white;
      cursor: pointer;
    `
  }
)

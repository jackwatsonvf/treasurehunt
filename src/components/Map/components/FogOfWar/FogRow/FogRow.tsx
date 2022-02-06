import { ReactElement, FC } from 'react'
import { FogRowProps } from './FogRow.types'

import * as Styled from './styles/FogRow.style.ts'

const FogRow: FC<FogRowProps> = ({
  row,
  onClick,
  guesses,
  treasureCoords,
  guessAvailable
}: FogRowProps): ReactElement => {
  const squaresPerRow: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

  const onSquareClick = (squareLocation: string, updatedTreasureCoords) => {
    if (!guessAvailable) return
    onClick(squareLocation, updatedTreasureCoords)
  }

  const getWasGuessed = (
    guesses: FogRowProps['guesses'],
    squareLocation: string
  ): boolean => {
    if (guesses.some((guess) => guess === squareLocation)) {
      return true
    }
    return false
  }

  const getIsTreasure = (
    wasGuessed: boolean,
    treasureCoords: FogRowProps['treasureCoords'],
    squareLocation: string
  ): boolean => {
    let isTreasure = false
    // if the square location has been guessed, and it's also a treasure coordinate - it's treasure!
    if (wasGuessed) {
      treasureCoords.some((treasure): void => {
        if (`${treasure.x}${treasure.y}` === squareLocation) isTreasure = true
      })
    }
    return isTreasure
  }

  return (
    <Styled.FogRow>
      {squaresPerRow.map((square, key): ReactElement => {
        const squareLocation = `${square}${row}`
        const wasGuessed = getWasGuessed(guesses, squareLocation)
        const isTreasure = getIsTreasure(
          wasGuessed,
          treasureCoords,
          squareLocation
        )

        const updatedTreasureCoords = treasureCoords.filter((coord) => {
          return `${coord.x}${coord.y}` !== squareLocation
        })

        return (
          <Styled.Square
            key={key}
            onClick={() => {
              onSquareClick(squareLocation, updatedTreasureCoords)
            }}
            isTreasure={isTreasure}
            wasGuessed={wasGuessed}
            guessAvailable={guessAvailable}
          />
        )
      })}
    </Styled.FogRow>
  )
}

export default FogRow

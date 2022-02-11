import React, { ReactElement, FC } from 'react'
import { FogOfWarProps } from './FogOfWar.types'

import FogRow from './FogRow/index.ts'

import * as Styled from './styles/FogOfWar.style.ts'

const FogOfWar: FC<FogOfWarProps> = ({
  onClick,
  treasureCoords,
  remainingTreasureCoords,
  guesses,
  guessIsActive
}: FogOfWarProps): ReactElement => {
  const rows = ['a', 'b', 'c', 'd', 'e']
  return (
    <Styled.FogOfWar guessIsActive={guessIsActive}>
      {rows.map((row, key) => {
        return (
          <FogRow
            key={key}
            row={row}
            onClick={onClick}
            guesses={guesses}
            treasureCoords={treasureCoords}
            remainingTreasureCoords={remainingTreasureCoords}
            guessIsActive={guessIsActive}
          />
        )
      })}
    </Styled.FogOfWar>
  )
}

export default FogOfWar

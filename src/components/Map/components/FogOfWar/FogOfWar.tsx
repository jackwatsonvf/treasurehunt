import React, { ReactElement, FC } from 'react'
import { FogOfWarProps } from './FogOfWar.types'

import FogRow from './FogRow/index.ts'

import * as Styled from './styles/FogOfWar.style.ts'

const FogOfWar: FC<FogOfWarProps> = ({
  onClick,
  treasureCoords,
  guesses,
  guessAvailable
}: FogOfWarProps): ReactElement => {
  const rows = ['a', 'b', 'c', 'd', 'e']
  return (
    <Styled.FogOfWar>
      {rows.map((row, key) => {
        return (
          <FogRow
            key={key}
            row={row}
            onClick={onClick}
            guesses={guesses}
            treasureCoords={treasureCoords}
            guessAvailable={guessAvailable}
          />
        )
      })}
    </Styled.FogOfWar>
  )
}

export default FogOfWar

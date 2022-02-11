import React, { ReactElement, FC } from 'react'

import FogOfWar from './components/FogOfWar/index.ts'

import * as Styled from './styles/Map.style.ts'

import mapImage from '../../assets/map.png'
import { MapProps } from './Map.types'

const Map: FC<MapProps> = ({
  onClick,
  guesses,
  treasureCoords,
  guessIsActive,
  remainingTreasureCoords
}: MapProps): ReactElement => {
  return (
    <Styled.MapContainer>
      <FogOfWar
        onClick={onClick}
        guesses={guesses}
        treasureCoords={treasureCoords}
        guessIsActive={guessIsActive}
        remainingTreasureCoords={remainingTreasureCoords}
      />
      <img alt="treasure map" src={mapImage} />
    </Styled.MapContainer>
  )
}

export default Map

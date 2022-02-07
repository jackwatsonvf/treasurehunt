import React, { ReactElement, FC } from 'react'

import FogOfWar from './components/FogOfWar/index.ts'

import * as Styled from './styles/Map.style.ts'

import mapImage from '../../assets/map.png'
import { MapProps } from './Map.types'

const Map: FC<MapProps> = ({
  onClick,
  guesses,
  treasureCoords,
  guessEnabled,
  remainingTreasureCoords
}: MapProps): ReactElement => {
  return (
    <Styled.MapContainer>
      <FogOfWar
        guesses={guesses}
        treasureCoords={treasureCoords}
        onClick={onClick}
        guessEnabled={guessEnabled}
        remainingTreasureCoords={remainingTreasureCoords}
      />
      <img alt="treasure map" src={mapImage} />
    </Styled.MapContainer>
  )
}

export default Map

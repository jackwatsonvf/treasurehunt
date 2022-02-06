import React, { ReactElement, FC } from 'react'

import FogOfWar from './components/FogOfWar/index.ts'

import * as Styled from './styles/Map.style.ts'

import mapImage from '../../assets/map.jpeg'
import { MapProps } from './Map.types'

const Map: FC<MapProps> = ({
  onClick,
  guesses,
  treasureCoords,
  guessAvailable
}: MapProps): ReactElement => {
  return (
    <Styled.MapContainer>
      <FogOfWar
        guesses={guesses}
        treasureCoords={treasureCoords}
        onClick={onClick}
        guessAvailable={guessAvailable}
      />
      <img alt="treasure map" src={mapImage} />
    </Styled.MapContainer>
  )
}

export default Map

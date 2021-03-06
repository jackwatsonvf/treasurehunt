import { TreasureCoords } from '../../helpers/generateTreasureCoordsList/generateTreasureCoordsList.ts'

export interface PageProps {
  /**
   * Page id
   * */
  id?: string
}

export interface PageState {
  /**
   * Coordinates of the treasure
   * */
  treasureCoords: TreasureCoords[]
  /**
   * Coordinates of the treasure
   * */
  remainingTreasureCoords: TreasureCoords[]
  /**
   * Guesses made by the players
   * */
  guesses: string[]
  /**
   * Whether or not the map tiles can be clicked
   * */
  guessIsActive: boolean
  /**
   * Whether making a guess is available (if somoene else is taking a guess)
   * */
  guessAvailable: boolean
  /**
   * The current prize pool
   * */
  prizePool: number
}

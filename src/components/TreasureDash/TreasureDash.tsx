import React, { ReactElement, FC } from 'react'
import {
  getFirestore,
  updateDoc,
  doc,
  getDoc,
  setDoc,
  onSnapshot
} from 'firebase/firestore'

import * as Styled from './styles/TreasureDash.style.ts'

import { TreasureDashProps } from './TreasureDash.types'

const TreasureDash: FC<TreasureDashProps> = ({
  prizePool,
  remainingTreasure,
  guessAvailable,
  guessIsActive
}: TreasureDashProps): ReactElement => {
  const db = getFirestore()

  const makeGuess = async () => {
    const gameData = doc(db, 'data', 'gameData')
    // call server to ask if guess is available
    if (!guessAvailable) return
    // if available set guesses to busy and present QR code
    await updateDoc(gameData, {
      guessAvailable: false
    })
    // lightning magic to confirm payment

    // if unsuccessful early return and set guesses to available
    // await updateDoc(gameData, {
    //   guessAvailable: true
    // })

    // if payment successful set guessIsActive to true and update prize pool
    await updateDoc(gameData, {
      guessIsActive: true,
      prizePool: prizePool + 1
    })
  }
  return (
    <Styled.TreasureDash>
      <Styled.Text>treasure total value: {prizePool} pence</Styled.Text>
      <Styled.Text>treasure chests remaining: {remainingTreasure}</Styled.Text>
      <Styled.GuessButton onClick={makeGuess}>
        {guessIsActive ? <h3>Guess busy</h3> : <h3>Take a guess for £0.01</h3>}
      </Styled.GuessButton>
    </Styled.TreasureDash>
  )
}

export default TreasureDash

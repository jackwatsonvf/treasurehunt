import React, { ReactElement, FC, useState } from 'react'

import * as Styled from './styles/TreasureDash.style.ts'

import { TreasureDashProps } from './TreasureDash.types'

const TreasureDash: FC<TreasureDashProps> = ({
  onPaymentCallback,
  currentPrizePool,
  remainingTreasure
}: TreasureDashProps): ReactElement => {
  const onClick = () => {
    // call server to ask if guess is available

    // if busy update button text to say try again later

    // if available set guesses to busy and present QR code

    // lightning magic to confirm payment

    // if unsuccessful early return and set guesses to available

    // if successful payment gets added to prize pool
    // map buttons become available - CB
    onPaymentCallback(true, 1)

    // if guess correct present with LN address to send reward to

    // update reward total

    // reset guesses
  }

  return (
    <Styled.TreasureDash>
      <Styled.Text>treasure total value: {currentPrizePool} pence</Styled.Text>
      <Styled.Text>treasure chests remaining: {remainingTreasure}</Styled.Text>
      <Styled.GuessButton onClick={onClick}>
        <h3>Take a guess for £0.01</h3>
      </Styled.GuessButton>
    </Styled.TreasureDash>
  )
}

export default TreasureDash

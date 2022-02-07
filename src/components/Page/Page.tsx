import React, { PureComponent, ReactNode } from 'react'

import TreasureDash from '../TreasureDash/index.ts'
import Map from '../Map/index.ts'

import generateTreasureCoordsList from '../../helpers/generateTreasureCoordsList/generateTreasureCoordsList.ts'

import * as Styled from './styles/Page.style.ts'
import { TreasureCoords } from '../helpers/generateTreasureCoordsList/generateTreasureCoordsList.ts'

import { PageProps, PageState } from './Page.types'

export default class Page extends PureComponent<PageProps> {
  // needs to come from server eventually
  treasureLocations = generateTreasureCoordsList()

  state: PageState = {
    guesses: [],
    treasureCoords: [...this.treasureLocations],
    remainingTreasureCoords: [...this.treasureLocations],
    guessEnabled: false,
    currentPrizePool: 10
  }

  onPaymentCallback = (guessEnabled: boolean, feeToAdd) => {
    this.setState({
      guessEnabled,
      currentPrizePool: this.state.currentPrizePool + feeToAdd
    })
  }

  onGuessClick = (
    guess: string,
    remainingTreasureCoords: TreasureCoords
  ): void => {
    this.setState({
      guesses: [...this.state.guesses, guess],
      guessEnabled: false,
      remainingTreasureCoords
    })
  }

  render(): ReactNode {
    console.log(this.state)
    return (
      <Styled.Page id={this.props.id}>
        <TreasureDash
          onPaymentCallback={this.onPaymentCallback}
          currentPrizePool={this.state.currentPrizePool}
          remainingTreasure={this.state.remainingTreasureCoords.length}
        />
        <Map
          onClick={this.onGuessClick}
          guessEnabled={this.state.guessEnabled}
          treasureCoords={this.state.treasureCoords}
          remainingTreasureCoords={this.state.remainingTreasureCoords}
          guesses={this.state.guesses}
        />
      </Styled.Page>
    )
  }
}

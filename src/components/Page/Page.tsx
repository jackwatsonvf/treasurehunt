import React, { PureComponent, ReactNode } from 'react'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  updateDoc,
  doc,
  getDoc,
  setDoc,
  onSnapshot
} from 'firebase/firestore'

import firebaseConfig from '../../firebase.config.ts'
import TreasureDash from '../TreasureDash/index.ts'
import Map from '../Map/index.ts'

import generateTreasureCoordsList from '../../helpers/generateTreasureCoordsList/generateTreasureCoordsList.ts'

import * as Styled from './styles/Page.style.ts'
import { TreasureCoords } from '../helpers/generateTreasureCoordsList/generateTreasureCoordsList.ts'

import { PageProps, PageState } from './Page.types'

export default class Page extends PureComponent<PageProps> {
  state: PageState = {
    treasureCoords: [],
    remainingTreasureCoords: [],
    guesses: [],
    guessIsActive: false,
    guessAvailable: true,
    prizePool: 0
  }

  // firebase setup
  firebaseApp = initializeApp(firebaseConfig)
  db = getFirestore()

  // Listens to updates to the database and updates the Page state in real time
  listenToGameData = () => {
    onSnapshot(doc(this.db, 'data', 'gameData'), (doc) => {
      console.log('Current data: ', doc.data())

      if (doc.data() && doc.data().treasureCoords) {
        const {
          treasureCoords,
          remainingTreasureCoords,
          prizePool,
          guesses,
          guessAvailable,
          guessIsActive
        } = doc.data()
        this.setState({
          treasureCoords,
          remainingTreasureCoords,
          prizePool,
          guessAvailable,
          guessIsActive,
          guesses
        })
      }
    })
  }

  // Provisions the initial gameData to the database
  initGameData = async () => {
    const treasureCoords = generateTreasureCoordsList()
    try {
      await setDoc(doc(this.db, 'data', 'gameData'), {
        treasureCoords,
        remainingTreasureCoords: treasureCoords,
        guessIsActive: false,
        guesses: [],
        prizePool: 10,
        guessAvailable: true
      })
    } catch (e) {
      console.error('Error initialising treasureCoords: ', e)
    }
  }

  // Checks if any gameData exists in the db and if not provisions it
  fetchGameData = async () => {
    const dataQuery = await getDoc(doc(this.db, 'data', 'gameData'))
    if (!dataQuery.data() || !dataQuery.data().treasureCoords) {
      await this.initGameData()
    }
  }

  componentDidMount(): void {
    this.listenToGameData()
    this.fetchGameData()
  }

  onGuessClick = async (
    guess: string,
    remainingTreasureCoords: TreasureCoords
  ): Promise<void> => {
    const gameData = doc(this.db, 'data', 'gameData')

    await updateDoc(gameData, {
      guesses: [...this.state.guesses, guess],
      guessIsActive: false,
      guessAvailable: true,
      remainingTreasureCoords
    })
  }

  render(): ReactNode {
    console.log('page state', this.state)
    return (
      <Styled.Page id={this.props.id}>
        <TreasureDash
          guessAvailable={this.state.guessAvailable}
          guessIsActive={this.state.guessIsActive}
          prizePool={this.state.prizePool}
          remainingTreasure={this.state.remainingTreasureCoords.length}
        />
        <Map
          onClick={this.onGuessClick}
          guessIsActive={this.state.guessIsActive}
          treasureCoords={this.state.treasureCoords}
          remainingTreasureCoords={this.state.remainingTreasureCoords}
          guesses={this.state.guesses}
        />
      </Styled.Page>
    )
  }
}

import { PageState } from '../Page/Page.types'

export interface TreasureDashProps {
  /**
   * On Pay Click callback
   * */
  onPaymentCallback: () => {}
  /**
   * Current Prize Pool
   * */
  currentPrizePool: PageState['currentPrizePool']
  /**
   * Remaning number of treasures
   * */
  remainingTreasure: number
}

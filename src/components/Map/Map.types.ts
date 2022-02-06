import { PageState } from '../Page/Page.types'

export interface MapProps extends PageState {
  /**
   * On Click
   * */
  onClick: (
    location: string,
    updatedTreasureLocations: PageState['remainingTreasureCoords']
  ) => {}
}

import { PageState } from '../../../../Page/Page.types'
import { MapProps } from '../../../Map.types'

export interface FogRowProps extends PageState {
  /**
   * Row letter
   * */
  row: string
  /**
   * On Click
   * */
  onClick: MapProps['onClick']
}

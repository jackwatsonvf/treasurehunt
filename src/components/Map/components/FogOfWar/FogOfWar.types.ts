import { PageState } from '../../../Page/Page.types'
import { MapProps } from '../../Map.types'

export interface FogOfWarProps extends PageState {
  /**
   * On Click
   * */
  onClick: MapProps['onClick']
}

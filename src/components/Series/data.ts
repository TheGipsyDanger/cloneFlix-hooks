import { ISerieList } from '../../utils/interfaces';

export default interface ISeries {
  data?: any;
}

export interface ISeriesLayout extends ISeries {
  series: Array<ISerieList>;
}

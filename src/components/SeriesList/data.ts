import { ISerieList as IList, ISerieListItem } from '../../utils/interfaces';

export default interface ISeriesList {
  data?: any;
  list: IList;
}

export interface ISeriesListLayout extends ISeriesList {
  setSerieAndGoTo(serie: ISerieListItem): void;
}

import { ISerieListItem as IItem } from '../../utils/interfaces';

export default interface ISeriesListItem {
  data?: any;
  item: IItem;
  specialType: boolean;
  lastItem: boolean;
}

export interface ISeriesListItemLayout extends ISeriesListItem {}

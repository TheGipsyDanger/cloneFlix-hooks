export default interface ISeriesDetails {
  data?: any;
}

export interface ISeasonActions {
  name: string;
  active: boolean;
}

export interface ISeriesActions {
  icon: string;
  text: string;
}

export interface ISeriesDetailsLayout extends ISeriesDetails {
  cover: string;
  cast: string;
  description: string;
  changeSelected(index: number): void;
  seasonsActions: Array<ISeasonActions>;
  seriesActions: Array<ISeriesActions>;
}

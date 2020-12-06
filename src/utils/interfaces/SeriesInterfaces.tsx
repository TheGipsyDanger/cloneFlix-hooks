export declare interface ISeriesContext {
  currentSeries: ISerieListItem;
  defineCurrentSeries(currentSeries: ISerieListItem): void;
}

export declare interface ISerieListItem {
  name: string;
  cover: string;
  description: string;
  cast: string;
}

export declare interface ISerieList {
  list_title: string;
  list_type: string;
  items: Array<ISerieListItem>;
}

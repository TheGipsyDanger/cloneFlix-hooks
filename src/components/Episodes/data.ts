export default interface IEpisodes {
  data?: any;
}

export interface IEpisodesItem {
  name: string;
  cover: string;
  description: string;
}

export interface IEpisodesList {
  seasson: number;
  episodes: Array<IEpisodesItem>;
}

export interface IEpisodesLayout extends IEpisodes {
  episodesList: IEpisodesList;
}

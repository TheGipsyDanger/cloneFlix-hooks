export default interface ISpotlight {
  data?: any;
  translateY: any;
}

export interface ISpotlightLayout extends ISpotlight {
  tagsOptions: Array<string>;
}

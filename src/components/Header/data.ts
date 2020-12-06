export default interface IHeader {
  data?: any;
}

export interface IHeaderLayout extends IHeader {
  menuOptions: Array<string>;
}

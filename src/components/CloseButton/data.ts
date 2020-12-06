export default interface ICloseButton {
  data?: any;
}

export interface ICloseButtonLayout extends ICloseButton {
  goBack(): void;
}

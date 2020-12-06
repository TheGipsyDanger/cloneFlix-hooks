import { Dimensions } from 'react-native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

const headerHeight = isIphoneX() ? 64 + getStatusBarHeight() : 64;

export default {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
  header: headerHeight,
  spotlight: isIphoneX()
    ? headerHeight +
      getStatusBarHeight() +
      Dimensions.get('window').height / 1.5
    : headerHeight + Dimensions.get('window').height / 1.5,
};

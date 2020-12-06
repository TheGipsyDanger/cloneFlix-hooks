import styled from 'styled-components/native';
import BG from '../../../../assets/featuredSeries.png';
import LOGO from '../../../../assets/vikings_logo.png';
import ICON from '@expo/vector-icons/build/MaterialCommunityIcons';
import { colors, metrics } from '../../../styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated } from 'react-native';

export default {
  Container: styled.View`
    height: ${metrics.spotlight}px;
  `,
  AnimatedImage: styled(Animated.View)``,
  Image: styled.ImageBackground.attrs({
    source: BG,
    resizeMode: 'cover',
  })`
    width: 100%;
    height: 100%;
  `,
  LinearContent: styled.View`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
  `,
  Linear: styled(LinearGradient).attrs({
    colors: ['transparent', colors.BgPrimary],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0.97 },
  })`
    justify-content: flex-end;
    height: 100%;
  `,
  Infos: styled.View`
    height: 200px;
  `,
  Logo: styled.ImageBackground.attrs({
    source: LOGO,
    resizeMode: 'contain',
  })`
    width: 100%;
    height: 100%;
    justify-content: flex-start;
  `,
  LogoContent: styled.View`
    height: 100px;
  `,
  SeriesTags: styled.View`
    margin-top: 24px;
    justify-content: center;
    flex-direction: row;
  `,
  Tags: styled.Text`
    font-size: 14px;
    color: #fff;
    box-shadow: 1px 1px 4px black;
  `,
  Options: styled.View`
    flex: 1;
    margin-top: 16px;
    justify-content: space-around;
    flex-direction: row;
  `,
  OptionsButton: styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
  OptionsText: styled.Text`
    font-size: 14px;
    color: #fff;
    box-shadow: 1px 1px 4px black;
  `,
  Icon: styled(ICON).attrs<{ type: string }>(props => ({
    name: props.type,
    size: 30,
    color: props.type != 'play' ? 'white' : colors.BgPrimary,
  }))``,
  PlayerButton: styled.View`
    width: 100%;
    height: 32px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 2px;
  `,
  ButtonText: styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.BgPrimary};
  `,
};

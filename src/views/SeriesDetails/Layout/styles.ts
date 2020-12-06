import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, metrics } from '../../../styles';
import ICON from '@expo/vector-icons/build/Ionicons';

export default {
  Container: styled.ScrollView`
    flex: 1;
    background-color: ${colors.BgPrimary};
  `,
  CurrentSeries: styled.View`
    height: ${metrics.spotlight}px;
    background-color: ${colors.BgSecondary};
  `,
  BlurImage: styled.ImageBackground.attrs({
    resizeMode: 'cover',
    blurRadius: 50,
  })`
    width: 100%;
    height: 80%;
  `,
  Linear: styled(LinearGradient).attrs({
    colors: ['transparent', colors.BgSecondary],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0.97 },
  })`
    height: 100%;
  `,
  Infos: styled.View`
    position: absolute;
    flex: 1;
    top: 0;
    height: 100%;
    width: 100%;
    padding-top: ${metrics.header}px;
    justify-content: space-between;
  `,
  Cover: styled.View`
    justify-content: center;
    align-items: center;
    box-shadow: 4px 4px 10px black;
  `,
  Image: styled.Image`
    width: ${metrics.width / 3}px;
    height: ${metrics.width / 2}px;
    border-radius: 4px;
  `,
  Options: styled.View`
    margin: 0px 8px;
  `,
  PlayButton: styled.TouchableOpacity.attrs({
    activeOpacity: 0.6,
  })`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 32px;
    margin: 16px 0px;
    border-radius: 2px;
    background-color: ${colors.RedPrimary};
  `,
  Icon: styled(ICON).attrs<{ type: string }>(props => ({
    name: props.type,
    size: 25,
    color: 'white',
  }))``,
  TextButton: styled.Text`
    font-size: 14px;
    margin-left: 4px;
    color: white;
    font-weight: bold;
  `,
  DescriptionContet: styled.View`
    margin-bottom: 16px;
  `,
  Description: styled.Text`
    font-size: 12px;
    color: white;
    font-weight: bold;
    text-align: left;
  `,
  CastContent: styled.View`
    margin-bottom: 16px;
  `,
  Cast: styled.Text`
    font-size: 12px;
    color: ${colors.Grey};
    text-align: left;
  `,
  SeriesActions: styled.View`
    justify-content: space-between;
    flex-direction: row;
    margin-left: 16px;
    width: 60%;
    height: 60px;
  `,
  Actions: styled.TouchableOpacity.attrs({
    activeOpacity: 0.6,
  })`
    align-items: center;
  `,
  ActionText: styled.Text`
    font-size: 11px;
    color: ${colors.Grey};
    text-align: left;
  `,
  EpisodesContent: styled.View`
    margin-top: 4px;
    padding: 0 8px;
    background-color: ${colors.BgSecondary};
  `,
  SeasonsActionsContainer: styled.View`
    flex-direction: row;
  `,
  SeasonsActionsContent: styled.View`
    flex-direction: row;
  `,
  SeasonsActions: styled.TouchableOpacity.attrs({
    activeOpacity: 0.6,
  })<{ active: boolean }>`
    border-color: ${props =>
      props.active ? colors.RedPrimary : 'transparent'};
    border-top-width: 4px;
  `,
  SeasonsActionsText: styled.Text<{ active: boolean }>`
    font-size: 14px;
    padding-top: 16px;
    padding-bottom: 32px;
    color: ${props => (props.active ? 'white' : colors.Grey)};
    font-weight: bold;
  `,
  Separator: styled.View`
    width: 10px;
  `,
};

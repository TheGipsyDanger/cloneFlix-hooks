import styled from 'styled-components/native';
import { metrics, colors } from '../../../styles';
import ICON from '@expo/vector-icons/build/Ionicons';

export default {
  Container: styled.View``,
  CurrentSeason: styled.TouchableOpacity.attrs({
    activeOpacity: 0.6,
  })`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
  `,
  Text: styled.Text`
    font-size: 13px;
    color: white;
    font-weight: bold;
    margin-right: 8px;
  `,
  Icon: styled(ICON).attrs<{ size: number; type: string }>(props => ({
    name: props.type,
    size: props.size,
    color: colors.CleanBlue,
  }))``,
  EpisodeContainer: styled.TouchableOpacity.attrs({
    activeOpacity: 0.6,
  })``,
  EpisodeContent: styled.View`
    flex-direction: row;
    padding-bottom: 16px;
  `,
  CoverContent: styled.View`
    flex: 1.5;
    justify-content: center;
    align-items: center;
  `,
  Cover: styled.Image`
    width: 100%;
    height: 100px;
  `,
  InfosContent: styled.View`
    flex: 2;
    align-items: center;
    justify-content: space-between;
    margin: 0 8px;
    flex-direction: row;
  `,
  TextInfos: styled.View``,
  Title: styled.Text`
    font-size: 13px;
    color: white;
    font-weight: bold;
    text-align: left;
  `,
  Duration: styled.Text`
    font-size: 12px;
    color: ${colors.Grey};
    text-align: left;
  `,
  DescriptionContent: styled.View`
    padding-bottom: 16px;
  `,
  Description: styled.Text`
    font-size: 12px;
    color: ${colors.Grey};
    text-align: left;
  `,
};

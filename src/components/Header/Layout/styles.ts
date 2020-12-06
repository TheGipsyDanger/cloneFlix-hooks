import styled from 'styled-components/native';
import ICON from '@expo/vector-icons/build/MaterialCommunityIcons';
import { colors, metrics } from '../../../styles';

export default {
  Container: styled.View`
    height: ${metrics.header}px;
    background-color: rgba(0, 0, 0, 0.02);
  `,
  Content: styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  `,
  LogoContent: styled.View`
    flex: 1;
    height: 30px;
    justify-content: center;
    align-items: center;
  `,
  Logo: styled(ICON).attrs({
    name: 'netflix',
    size: 30,
    color: colors.RedPrimary,
  })``,
  MenuContent: styled.View`
    flex: 5;
    height: 30px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `,
  MenuItem: styled.TouchableOpacity``,
  Text: styled.Text`
    font-size: 14px;
    color: white;
    box-shadow: 1px 1px 4px black;
  `,
};

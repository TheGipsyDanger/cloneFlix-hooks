import styled from 'styled-components/native';

export default {
  Container: styled.View``,
  Title: styled.Text`
    font-size: 20px;
    margin-bottom: 8px;
    margin-left: 8px;
    color: #fff;
    font-weight: bold;
  `,
  List: styled.FlatList`
    margin-bottom: 24px;
  `,
  Item: styled.TouchableOpacity.attrs({
    activeOpacity: 0.6,
  })``,
};

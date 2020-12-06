import styled from 'styled-components/native';
import { metrics, colors } from '../../../styles';

export default {
  Container: styled.View<{ lastItem: boolean }>`
    height: ${metrics.width / 2.5}px;
    width: ${metrics.width / 3.6}px;
    margin-right: ${props => (props.lastItem ? 8 : 0)}px;
    margin-left: 8px;
  `,
  SpecialContainer: styled.View<{ lastItem: boolean }>`
    height: ${metrics.width / 4}px;
    width: ${metrics.width / 4}px;
    margin-right: ${props => (props.lastItem ? 12 : 0)}px;
    margin-left: 8px;
  `,
  Image: styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 6px;
  `,
  SpecialImage: styled.Image.attrs({
    resizeMode: 'cover',
  })`
    width: 100%;
    height: 100%;
    border-radius: ${metrics.width / 8}px;
    border-width: 1px;
    border-color: ${colors.CleanBlue};
  `,
};

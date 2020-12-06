import React from 'react';
import { ISpotlightLayout } from '../data';
import { metrics } from '../../../styles';
import Header from '../../Header';
import C from './styles';

export default function Spotlight({
  tagsOptions,
  translateY,
}: ISpotlightLayout) {
  return (
    <C.Container testID={`Spotlight`}>
      <C.AnimatedImage
        style={{
          opacity: translateY.interpolate({
            inputRange: [0, metrics.spotlight - 240],
            outputRange: [1, 0],
            extrapolate: 'clamp',
          }),
          height: translateY.interpolate({
            inputRange: [0, metrics.spotlight],
            outputRange: [metrics.spotlight, metrics.spotlight - 240],
            extrapolate: 'clamp',
          }),
        }}>
        <C.Image>
          <Header />
        </C.Image>
      </C.AnimatedImage>
      <C.LinearContent>
        <C.Linear
          // @ts-ignore
          children={
            <C.Infos>
              <C.LogoContent>
                <C.Logo />
              </C.LogoContent>
              <C.SeriesTags>
                {tagsOptions.map((tag, index) => (
                  <C.Tags key={index}>{tag}</C.Tags>
                ))}
              </C.SeriesTags>
              <C.Options>
                <C.OptionsButton>
                  <C.Icon type={'plus'} />
                  <C.OptionsText>Minha lista</C.OptionsText>
                </C.OptionsButton>
                <C.OptionsButton>
                  <C.PlayerButton>
                    <C.Icon type={'play'} />
                    <C.ButtonText>Assistir</C.ButtonText>
                  </C.PlayerButton>
                </C.OptionsButton>
                <C.OptionsButton>
                  <C.Icon type={'information-outline'} />
                  <C.OptionsText>Saiba mais</C.OptionsText>
                </C.OptionsButton>
              </C.Options>
            </C.Infos>
          }
        />
      </C.LinearContent>
    </C.Container>
  );
}

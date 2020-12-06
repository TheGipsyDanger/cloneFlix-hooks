import React from 'react';
import { ISeriesDetailsLayout } from '../data';
import { CloseButton, Episodes } from '../../../components';
import C from './styles';

export default function SeriesDetails({
  cast,
  cover,
  description,
  seriesActions,
  seasonsActions,
  changeSelected,
}: ISeriesDetailsLayout) {
  return (
    <C.Container testID={`SeriesDetails`} showsVerticalScrollIndicator={false}>
      <CloseButton />
      <C.CurrentSeries>
        <C.BlurImage source={{ uri: cover }}>
          <C.Linear />
        </C.BlurImage>
        <C.Infos>
          <C.Cover>
            <C.Image source={{ uri: cover }} />
          </C.Cover>
          <C.Options>
            <C.PlayButton>
              <C.Icon type={'ios-play'} />
              <C.TextButton>Assistir</C.TextButton>
            </C.PlayButton>
            <C.DescriptionContet>
              <C.Description numberOfLines={3}>{description}</C.Description>
            </C.DescriptionContet>
            <C.CastContent>
              <C.Cast>{`Elenco: ${cast}`}</C.Cast>
            </C.CastContent>
            <C.SeriesActions>
              {seriesActions.map((action, index) => (
                <C.Actions key={index}>
                  <C.Icon type={action.icon} />
                  <C.ActionText>{action.text}</C.ActionText>
                </C.Actions>
              ))}
            </C.SeriesActions>
          </C.Options>
        </C.Infos>
      </C.CurrentSeries>
      <C.EpisodesContent>
        <C.SeasonsActionsContainer>
          {seasonsActions.map(({ name, active }, index) => (
            <C.SeasonsActionsContent key={index}>
              <C.SeasonsActions
                active={active}
                onPress={() => changeSelected(index)}>
                <C.SeasonsActionsText active={active}>
                  {name}
                </C.SeasonsActionsText>
              </C.SeasonsActions>
              <C.Separator />
            </C.SeasonsActionsContent>
          ))}
        </C.SeasonsActionsContainer>
        <Episodes />
      </C.EpisodesContent>
    </C.Container>
  );
}

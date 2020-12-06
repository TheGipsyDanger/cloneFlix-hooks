import React from 'react';
import { IEpisodesLayout, IEpisodesItem } from '../data';
import C from './styles';

export default function Episodes({
  episodesList: { episodes },
}: IEpisodesLayout) {
  return (
    <C.Container testID={`Episodes`}>
      <C.CurrentSeason>
        <C.Text>{'Temporada 1'}</C.Text>
        <C.Icon type={'ios-arrow-down'} size={20} />
      </C.CurrentSeason>
      {episodes.map(
        ({ name, cover, description }: IEpisodesItem, index: number) => (
          <C.EpisodeContainer key={index}>
            <C.EpisodeContent>
              <C.CoverContent>
                <C.Cover
                  source={{
                    uri: cover,
                  }}
                />
              </C.CoverContent>
              <C.InfosContent>
                <C.TextInfos>
                  <C.Title>{`${index + 1}. ${name}`}</C.Title>
                  <C.Duration>44m</C.Duration>
                </C.TextInfos>
                <C.Icon type={'md-download'} size={25} />
              </C.InfosContent>
            </C.EpisodeContent>
            <C.DescriptionContent>
              <C.Description numberOfLines={3}>{description}</C.Description>
            </C.DescriptionContent>
          </C.EpisodeContainer>
        )
      )}
    </C.Container>
  );
}

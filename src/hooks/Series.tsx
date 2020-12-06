import React, { createContext, useContext, useState, useCallback } from 'react';
import {
  ISeriesContext,
  ISerieListItem,
} from '../utils/interfaces/SeriesInterfaces';

export const SeriesContext = createContext<ISeriesContext>(
  {} as ISeriesContext
);

export const SeriesProvider: React.FC = ({ children }) => {
  const [currentSeries, setCurrentSeries] = useState<ISerieListItem>(
    {} as ISerieListItem
  );

  const defineCurrentSeries = useCallback(
    (currentSeries: ISerieListItem) => {
      setCurrentSeries(currentSeries);
    },
    [setCurrentSeries]
  );

  const value = {
    defineCurrentSeries,
    currentSeries,
  };

  return (
    <SeriesContext.Provider value={value}>{children}</SeriesContext.Provider>
  );
};

export function useSeries(): ISeriesContext {
  return useContext(SeriesContext);
}

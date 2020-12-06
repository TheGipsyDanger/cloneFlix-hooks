import React from 'react';

import { InitialProvider, ModalProvider, SeriesProvider } from '../../hooks';

const GlobalProvider: React.FC = ({ children }) => {
  return (
    <ModalProvider>
      <SeriesProvider>
        <InitialProvider>{children}</InitialProvider>
      </SeriesProvider>
    </ModalProvider>
  );
};

export default GlobalProvider;

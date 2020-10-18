/* eslint-disable linebreak-style */
import React from 'react';
import { AppMedia } from '@/utils/app-media';
import { CacheProvider, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import createCache from '@emotion/cache';

import 'semantic-ui-css/semantic.min.css';
import GlobalStyles from '@/theme/GlobalStyles.theme';
import THEME from '@/theme/Theme';

const mediaStyles = AppMedia.createMediaStyle();
const { MediaContextProvider } = AppMedia;
const BFS_CACHE = createCache({
  key: 'bfs-cache',
});

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={BFS_CACHE}>
    <ThemeProvider theme={THEME}>
      <MediaContextProvider>
        <style>{mediaStyles}</style>
        <Global styles={GlobalStyles} />
        {element}
      </MediaContextProvider>
    </ThemeProvider>
  </CacheProvider>
);

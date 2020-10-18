import React from 'react';
import { AppMedia } from '@/utils/app-media';
import { CacheProvider, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import createCache from '@emotion/cache';
import GlobalStyles from '@/theme/GlobalStyles.theme';
import 'semantic-ui-css/semantic.min.css';
import THEME from '@/theme/Theme';

const mediaStyles = AppMedia.createMediaStyle();
const { MediaContextProvider } = AppMedia;
const BFS_CACHE = createCache({
  key: 'bfs-cache',
});

// Logs when the client route changes
export function onRouteUpdate({ location, prevLocation }) {
  console.log('new pathname', location.pathname);
  console.log('old pathname', prevLocation ? prevLocation.pathname : null);
}

// Wraps every page in a component
export function wrapPageElement({ element }) {
  return (
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
}

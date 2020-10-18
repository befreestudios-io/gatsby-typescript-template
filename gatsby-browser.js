import React from 'react';
import { AppMedia } from '@/utils/app-media';
import { Global } from '@emotion/core';
import GlobalStyles from '@/theme/GlobalStyles.theme';
import 'semantic-ui-css/semantic.min.css';

const mediaStyles = AppMedia.createMediaStyle();
const { MediaContextProvider } = AppMedia;

// Logs when the client route changes
export function onRouteUpdate({ location, prevLocation }) {
  console.log('new pathname', location.pathname);
  console.log('old pathname', prevLocation ? prevLocation.pathname : null);
}

// Wraps every page in a component
export function wrapPageElement({ element }) {
  return (
    <MediaContextProvider>
      <style>{mediaStyles}</style>
      <Global styles={GlobalStyles} />
      {element}
    </MediaContextProvider>
  );
}

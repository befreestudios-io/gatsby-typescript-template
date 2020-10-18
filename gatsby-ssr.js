/* eslint-disable linebreak-style */
import React from 'react';
import { AppMedia } from '@/utils/app-media';
import { Global } from '@emotion/core';
import GlobalStyles from '@/theme/GlobalStyles.theme';

const mediaStyles = AppMedia.createMediaStyle();
const { MediaContextProvider } = AppMedia;

export const wrapRootElement = ({ element }) => (
  <MediaContextProvider>
    <style>{mediaStyles}</style>
    <Global styles={GlobalStyles} />
    {element}
  </MediaContextProvider>
);

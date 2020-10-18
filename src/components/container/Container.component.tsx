import { AppContainer_StyledComponent } from '@/components/container/Container.styles';
import { AppMedia } from '@/utils/app-media';
import React from 'react';

const AppContainer: React.FC = ({ ...props }): React.ReactElement => {
  const { children } = props;
  const { Media } = AppMedia;

  return (
    <>
      <Media lessThan="tablet">
        <AppContainer_StyledComponent className="mobile-container">
          {children}
        </AppContainer_StyledComponent>
      </Media>
      <Media greaterThanOrEqual="tablet">
        <AppContainer_StyledComponent className="desktop-container">
          {children}
        </AppContainer_StyledComponent>
      </Media>
    </>
  );
};

export default AppContainer;

import ContainerStyles from '@/components/container/Container.styles';
import { AppMedia } from '@/utils/app-media';
import React from 'react';

const AppContainer: React.FC = ({ ...props }): React.ReactElement => {
  const { children } = props;
  const { Media } = AppMedia;

  return (
    <>
      <Media lessThan="tablet">
        <ContainerStyles.AppContainer className="mobile-container">
          {children}
        </ContainerStyles.AppContainer>
      </Media>
      <Media greaterThanOrEqual="tablet">
        <ContainerStyles.AppContainer className="desktop-container">
          {children}
        </ContainerStyles.AppContainer>
      </Media>
    </>
  );
};

export default AppContainer;

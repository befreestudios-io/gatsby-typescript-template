import React from 'react';
import ContainerStyles from '@/components/container/Container.styles';

const Layout: React.FC = ({ children }): React.ReactElement => (
  <ContainerStyles.AppContainer className="app-container">
    {children}
  </ContainerStyles.AppContainer>
);

export default Layout;

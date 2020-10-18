import React from 'react';
import AppContainer from '@/components/container/Container.component';

const Layout: React.FC = ({ children }): React.ReactElement => (
  <AppContainer>{children}</AppContainer>
);

export default Layout;

import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

interface Props {
  children: any;
}

const ThemeContext = ({children}: Props) => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
      {children}
    </ApplicationProvider>
  );
};

export default ThemeContext;

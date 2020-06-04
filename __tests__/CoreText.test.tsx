/**
 * @jest-environment jsdom
 */

import React from 'react';
import {shallow} from 'enzyme';
import {Text} from '../src/Components/Common';
import UIKitten from '../src/UIKitten';
import ThemeContextProvider from '../src/Theme/ThemeContext';

describe('Common Text', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <ThemeContextProvider>
          <UIKitten>
            <Text text="test label" />
          </UIKitten>
        </ThemeContextProvider>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});

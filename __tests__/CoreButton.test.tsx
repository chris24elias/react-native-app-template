/**
 * @jest-environment jsdom
 */

import React from 'react';
import {shallow} from 'enzyme';
import {Button} from '../src/Components/Common';
import ThemeContextProvider from '../src/Theme/ThemeContext';
import UIKitten from '../src/UIKitten';

describe('Common Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <ThemeContextProvider>
          <UIKitten>
            <Button text="test label" />
          </UIKitten>
        </ThemeContextProvider>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});

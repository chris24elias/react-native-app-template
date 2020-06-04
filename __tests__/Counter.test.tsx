/**
 * @jest-environment jsdom
 */

import React from 'react';
import {shallow} from 'enzyme';
import {act} from 'react-dom/test-utils';
import {mount} from 'enzyme';
import UIKitten from '../src/UIKitten';
import ThemeContextProvider from '../src/Theme/ThemeContext';
import CounterComponent from '../src/Screens/Home/CounterComponent';
import {createStore, StoreProvider} from 'easy-peasy';
import model from '../src/Store/model';
import {themes} from '../src/Theme/themes';

describe('Counter Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <ThemeContextProvider>
          <UIKitten>
            <CounterComponent />
          </UIKitten>
        </ThemeContextProvider>,
      );
      expect(component).toMatchSnapshot();
    });
  });

  describe('add a todo', () => {
    let wrapper;
    const origConsole = console.error;
    beforeEach(() => {
      const store = createStore(model);
      console.error = () => {};
      wrapper = mount(
        <StoreProvider store={store}>
          <ThemeContextProvider defaultTheme={themes[0].key}>
            <UIKitten>
              <CounterComponent />
            </UIKitten>
          </ThemeContextProvider>
        </StoreProvider>,
      );
    }, 2000);

    afterEach(() => {
      console.error = origConsole;
    });

    it('can add a Todo with Enzyme', () => {
      // console.log(wrapper.debug());

      const newTodoText = 'I need to do something...';
      const newTodoTextInput = wrapper.find('InputComponent').first();
      const addTodoButton = wrapper
        .find('Button')
        .findWhere((w) => w.prop('text') === 'Add Todo')
        .first();

      act(() => {
        newTodoTextInput.props().onChangeText(newTodoText);
      });
      act(() => {
        addTodoButton.props().onPress();
      });
      act(() => {
        wrapper.update();
      });
      // // You can either check for a testID prop, similar to className in React:
      expect(
        wrapper.findWhere((node) => node.prop('testID') === 'todo-item'),
      ).toBeTruthy();

      // Or even just find a component itself, if you broke the JSX out into its own component:
      // expect(wrapper.find(TodoItem)).toExist();

      // You can even do snapshot testing,
      // if you pull in enzyme-to-json and configure
      // it in snapshotSerializers in package.json
      // expect(wrapper.find(TodoList)).toMatchSnapshot();
    });
  });
});

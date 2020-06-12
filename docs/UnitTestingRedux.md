## Unit Testing with Base Redux

**Very Basic Example**

```js
import * as types from '../reduxExample/VanillaRedux/actionTypes';
import * as actions from '../reduxExample/VanillaRedux/actions';
import reducer from '../reduxExample/VanillaRedux/reducers';

describe('Todos Model', () => {
  describe('actions', () => {
    it('should create an action to add a todo', () => {
      const todo = 'Finish docs';
      const expectedAction = {
        type: types.ADD_TODO,
        payload: todo,
      };
      expect(actions.addTodo(todo)).toEqual(expectedAction);
    });
  });

  describe('todos reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({
        todos: [],
      });
    });

    it('should handle ADD_TODO', () => {
      expect(
        reducer(undefined, {
          type: types.ADD_TODO,
          payload: 'Run the tests',
        }),
      ).toEqual({
        todos: ['Run the tests'],
      });

      expect(
        reducer(
          {
            todos: ['Use Redux'],
          },
          {
            type: types.ADD_TODO,
            payload: 'Run the tests',
          },
        ),
      ).toEqual({
        todos: ['Run the tests', 'Use Redux'],
      });
    });
  });
});
```

## Unit Testing with Easy Peasy

**Very Basic Example**

```Javascript
import 'react-native';
import React from 'react';
import todosModel from '../src/Store/model/todosModel';
import {createStore, StoreProvider} from 'easy-peasy';

test('add todo action', async () => {
  // arrange
  const todo = 'hello world';
  const store = createStore(todosModel);

  // act
  store.getActions().addTodo(todo);

  // assert
  expect(store.getState().todos).toEqual([todo]);
});

```

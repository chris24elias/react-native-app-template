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

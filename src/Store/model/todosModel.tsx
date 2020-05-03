import {Action, action} from 'easy-peasy';

export interface TodosModel {
  todos: string[];
  addTodo: Action<TodosModel, string>;
}

const todosModel: TodosModel = {
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
};

export default todosModel;

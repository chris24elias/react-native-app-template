## Creating a store with Easy Peasy

### Step 1 create your base model

**model.js**

```Javascript
import todos from './todos';

const model = {
  todos,
};

export default model;
```

### Step 2 create your todos Model

**todos.js**

```Javascript
import {action} from 'easy-peasy';

const todos = {
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
  clearTodos: action((state, payload) => {
    state.todos = [];
  }),
};

export default todos;
```

### Step 3 Create the Store

**store.js**

```javascript
import {createStore} from 'easy-peasy';
import model from './model';
const store = createStore(model);
export default store;
```

### Step 4 Wrap your app in Store Provider

```javascript
import {StoreProvider} from 'easy-peasy';
import store from './store';
import TodoApp from './TodoApp';

const App = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);
```

## Consuming State With Easy Peasy

```javascript
import {useStoreActions, useStoreState} from 'easy-peasy';

const TodoApp = ({todos}) => {
  const todos = useStoreState((state) => state.todos.todos);
  const addTodo = useStoreActions((actions) => actions.todos.addTodo);

  return (
    <div>
      {todos.map((todo) => (
        <div>{todo}</div>
      ))}
    </div>
  );
};

export default TodosApp;
```

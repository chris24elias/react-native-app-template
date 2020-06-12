## Creating Store with Vanilla Redux

### Step 1 Create Action Types

**actionTypes.js**

```javascript
export const ADD_TODO = 'ADD_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';
```

### Step 2 Create Actions

**actions.js**

```javascript
import {ADD_TODO, CLEAR_TODOS} from './actionTypes';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const clearTodos = (id) => ({
  type: CLEAR_TODOS,
});
```

### Step 3 Create Reducer

**todos.js**

```javascript
import {ADD_TODO, CLEAR_TODOS} from '../actionTypes';

const initialState = {
  todos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const todo = action.payload;
      return {
        ...state,
        todos: [...state.todos, todo],
      };
    }
    case CLEAR_TODOS: {
      return {
        ...state,
        todos: [],
      };
    }
    default:
      return state;
  }
}
```

### Step 4 Create the Store

**store.js**

```javascript
const store = createStore(todos);
```

### Step 5 Wrap your app in Store Provider

```javascript
import {Provider} from 'react-redux';
import store from './store';
import TodoApp from './TodoApp';

const App = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);
```

## Consuming State with Vanilla Redux

```javascript
import {connect} from 'react-redux';
import {addTodo, clearTodos} from './actions';

const TodoApp = ({todos}) => {
  return (
    <div>
      {todos.map((todo) => (
        <div>{todo}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {addTodo, clearTodos};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

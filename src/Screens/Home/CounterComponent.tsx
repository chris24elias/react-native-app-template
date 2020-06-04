import React, {useState} from 'react';
import {Layout, Text, Input} from '@ui-kitten/components';
import {useStoreState, useStoreActions} from '../../Store';
import {View, ScrollView, Keyboard} from 'react-native';
import {Button} from '../../Components/Common';

interface Props {}

const CounterComponent = ({}: Props) => {
  const todos = useStoreState((state) => state.todosModel.todos);
  const addTodo = useStoreActions((actions) => actions.todosModel.addTodo);
  const todoRef = React.useRef(null);
  const [inputText, setInputText] = useState('');

  const onAddTodo = () => {
    if (inputText) {
      addTodo(inputText);
      setInputText('');
      todoRef.current.clear();
      Keyboard.dismiss();
    }
  };

  return (
    <View style={{flex: 1, padding: 10}}>
      <Text style={{marginBottom: 5}} category="h2">
        TODOS
      </Text>

      <Input
        placeholder="Add Todo"
        style={{marginTop: 5}}
        onChangeText={setInputText}
        ref={todoRef}
      />
      <Button text="Add Todo" style={{marginTop: 5}} onPress={onAddTodo} />
      <Text>
        COUNT: <Text>{todos.length}</Text>
      </Text>
      <ScrollView style={{flex: 1, marginTop: 15}}>
        {todos.map((todo, i) => {
          return (
            <Text testID="todo-item" key={i} category="c2">
              {todo}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CounterComponent;

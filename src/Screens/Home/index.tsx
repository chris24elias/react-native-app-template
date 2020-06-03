import React, {useState} from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Layout} from '@ui-kitten/components';
import AppHeader from '../../Components/AppHeader';
import {useStoreState, useStoreActions} from '../../Store';
import {Button, Text} from '../../Components/Common';
import useTheme from '../../Theme';
import useAuth from '../../Auth';
import TextInput from '../../Components/Form/TextInput';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const HomeScreen = ({navigation, route}: Props) => {
  const todos = useStoreState((state) => state.todosModel.todos);
  const addTodo = useStoreActions((actions) => actions.todosModel.addTodo);

  const todoRef = React.useRef(null);
  const [inputText, setInputText] = useState('');
  const {theme, themes, setTheme} = useTheme();
  const {logout} = useAuth();

  return (
    <Layout style={{flex: 1}}>
      <AppHeader title="Home" />
      <ScrollView style={{padding: 15}} keyboardShouldPersistTaps="handled">
        <Text style={{marginBottom: 5}} category="h2">
          TODOS
        </Text>
        {todos.map((todo, i) => {
          return (
            <Text key={i} category="c2">
              {todo}
            </Text>
          );
        })}
        <View style={{marginTop: 10}}>
          <TextInput onChangeText={setInputText} ref={todoRef} />
          <Button
            text="Add Todo"
            style={{marginTop: 5}}
            onPress={() => {
              if (inputText) {
                addTodo(inputText);
                setInputText('');
                todoRef.current.clear();
              }
            }}
          />
        </View>

        <Text style={{marginBottom: 5, marginTop: 5}} category="h2">
          Themes
        </Text>

        <View
          style={{
            height: 40,
            width: '100%',
            backgroundColor: theme.Primary.main,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text category="h5">Current Theme</Text>
        </View>

        {themes.map((thm) => {
          return (
            <TouchableOpacity key={thm.key} onPress={() => setTheme(thm.key)}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  margin: 5,
                  backgroundColor: thm.Primary.main,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <Button
        text="LOGOUT"
        style={{marginBottom: 25}}
        onPress={() => logout()}
      />
    </Layout>
  );
};

export default HomeScreen;

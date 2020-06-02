import React, {useState} from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Layout, Input} from '@ui-kitten/components';
import AppHeader from '../../Components/AppHeader';
import {useStoreState, useStoreActions} from '../../Store';
import {Button, Text} from '../../Components/Common';
import useTheme from '../../Theme';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const HomeScreen = ({navigation, route}: Props) => {
  const todos = useStoreState((state) => state.todosModel.todos);
  const addTodo = useStoreActions((actions) => actions.todosModel.addTodo);

  const [inputText, setInputText] = useState('');

  const {theme, themes, setTheme} = useTheme();
  console.log('THEME', theme);
  return (
    <Layout style={{flex: 1}}>
      <AppHeader title="Home" />
      <ScrollView style={{padding: 15}}>
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
          <Input value={inputText} onChangeText={setInputText} />
          <Button
            text="Add Todo"
            style={{marginTop: 5}}
            onPress={() => {
              if (inputText) {
                addTodo(inputText);
                setInputText('');
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
            <TouchableOpacity onPress={() => setTheme(thm.key)}>
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
    </Layout>
  );
};

export default HomeScreen;

import React, {useState} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {Button} from '../../Components/Common';
import useAuth from '../../Auth';
import useTheme from '../../Theme';
import {Keyboard} from 'react-native';
import {displayToast} from '../../Utils/Functions';
import {STATUS} from '../../Constants';
import {useStoreState} from '../../Store';

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const Login = ({navigation, route}: Props) => {
  const {login} = useAuth();
  const {theme} = useTheme();

  const [username, setUsername] = useState('fake');
  const [password, setPassword] = useState('pass');

  const {status} = useStoreState((state) => ({
    status: state.auth.status,
  }));

  const loginUser = () => {
    Keyboard.dismiss();

    if (!username || !password) {
      displayToast({
        text: 'Username and password are mandatory, try again !',
        type: 'warning',
      });
    }

    login({
      username,
      password,
    });
  };

  const loading = status === STATUS.FETCHING;

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Some Login Screen</Text>
      <Button text="Fake Login" onPress={() => loginUser()} />
    </Layout>
  );
};

export default Login;

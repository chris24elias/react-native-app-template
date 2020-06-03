import React, {useState} from 'react';
import {Layout} from '@ui-kitten/components';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {Button, Text} from '../../Components/Common';
import useAuth from '../../Auth';
import useTheme from '../../Theme';
import {Keyboard, View, TouchableOpacity} from 'react-native';
import {displayToast} from '../../Utils/Functions';
import {STATUS, SCREEN_HEIGHT} from '../../Constants';
import {useStoreState} from '../../Store';
import viewStyles from '../../Styles/ViewStyles';
import LinearGradient from 'react-native-linear-gradient';
import Form from '../../Components/Form';
import TextInput from '../../Components/Form/TextInput';
import {useForm} from 'react-hook-form';
import * as yup from 'yup'; // for everything
interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

const defaultValues = {
  email: '',
  password: '',
};

const Login = ({navigation, route}: Props) => {
  const {login} = useAuth();
  const {theme} = useTheme();

  const {
    handleSubmit,
    register,
    setValue,
    errors,
    formState,
    getValues,
    clearError,
  } = useForm({
    defaultValues,
    validationSchema,
    reValidateMode: 'onChange',
  });

  const {status} = useStoreState((state) => ({
    status: state.auth.status,
  }));

  const onSubmit = (data: any) => {
    loginUser(data.email, data.password);
  };

  const loginUser = (username, password) => {
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

  console.log('values', getValues());

  return (
    <Layout style={viewStyles.container}>
      <LinearGradient
        colors={['#ff7e5f', '#feb47b']}
        style={{...viewStyles.container}}>
        <View style={{flex: 1, paddingTop: 50}}>
          <Form
            scrollview
            contentContainerStyle={{padding: 15}}
            {...{register, setValue, errors}}>
            <View style={{height: 400, ...viewStyles.center}}>
              <TouchableOpacity>
                <Text>LOGIN</Text>
              </TouchableOpacity>
            </View>
            <TextInput name="email" title="Email" returnKeyLabel="Next" />
            <TextInput name="password" title="Password" secure />
            <Button text="Submit" onPress={handleSubmit(onSubmit)} />
          </Form>
        </View>
      </LinearGradient>
    </Layout>
  );
};

export default Login;

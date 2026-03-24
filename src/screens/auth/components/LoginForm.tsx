import {
  Alert,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { loginBodyStyles } from '../style';
import InputView from './InputView';
import { loginApi } from '../../../api/services/auth.service';
import { useAppDispatch } from '../../../redux/hooks';
import { setUser } from '../../../redux/slices/authSlice';

interface LoginFormProps {
  email?: string;
  password?: string;
}
const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [loginCred, setLoginCred] = useState<LoginFormProps>({});

  const onLogin = async () => {
    if (!loginCred?.email || !loginCred?.password) {
      Alert.alert('Login', 'Please enter email and password');
      return;
    }
    dispatch(
      setUser({
        id: 1,
        name: 'Test User',
        email: loginCred.email,
      }),
    );
    return;

    // API ENDPOINT IS NOT WORKING, USING HARDCODED CREDENTIALS FOR DEMO PURPOSE
    try {
      const response = await loginApi({
        email: 'testpracticaluser001@mailinator.com',
        password: 'Test@123',
      });

      console.log('login success', response);
    } catch (error) {
      console.log('login error', error);
    }
  };

  const setText = (key: keyof LoginFormProps, value: string) => {
    setLoginCred(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <View style={loginBodyStyles.container}>
      <InputView
        title="Email"
        placeholder="email@gmail.com"
        value={loginCred?.email || ''}
        onChangeText={text => setText('email', text)}
      />
      <InputView
        title="Password"
        placeholder="Password"
        value={loginCred?.password || ''}
        onChangeText={text => setText('password', text)}
      />
      <View style={loginBodyStyles.signIn}>
        <TouchableOpacity
          style={loginBodyStyles.signInButton}
          onPress={onLogin}
        >
          <Text style={loginBodyStyles.singInText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={loginBodyStyles.notaMember}>
            Not a member?{' '}
            <Text style={loginBodyStyles.notaMember}>Sign up here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});

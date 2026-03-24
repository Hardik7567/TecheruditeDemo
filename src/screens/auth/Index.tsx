import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { loginCommonStyles } from './style';
import LoginHeader from './components/LoginHeader';
import LoginForm from './components/LoginForm';
const Login = () => {
  return (
    <>
      <LoginHeader />
      <View style={loginCommonStyles.container}>
        <LoginForm />
      </View>
    </>
  );
};

export default Login;

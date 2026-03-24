import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { loginFooterStyles } from '../style';

const LoginFooter = () => {
  return (
    <View style={loginFooterStyles.container}>
      <View style={loginFooterStyles.line} />
    </View>
  );
};

export default LoginFooter;

const styles = StyleSheet.create({});

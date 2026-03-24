import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { loginHeaderStyles } from '../style';

const LoginHeader = () => {
  return (
    <View style={loginHeaderStyles.container}>
      <Image
        style={loginHeaderStyles.imageView}
        source={{
          uri: 'https://nosmsje.gov.in/public/images/login_temp.jpg',
        }}
      />
    </View>
  );
};

export default LoginHeader;

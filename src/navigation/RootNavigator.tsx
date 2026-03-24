import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainTabNavigator from './MainTabNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '../redux/hooks';

const RootNavigator = () => {
  const { isLoggedIn } = useAppSelector(state => state.auth);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {isLoggedIn ? <MainTabNavigator /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;

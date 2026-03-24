import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SearchScreen from '../screens/Search/SearchScreen';
import EventsStack from '../screens/event/index';
import FavoriteScreen from '../screens/favourite/index';
import ProfileScreen from '../screens/profile/index';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Events') {
            return (
              <Image
                style={{ height: 20, width: 20 }}
                source={require('../images/evnt.jpg')}
              />
            );
          } else if (route.name === 'Favourites') {
            return (
              <Image
                style={{ height: 20, width: 20 }}
                source={require('../images/unfavourite.jpg')}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <Image
                style={{ height: 20, width: 20 }}
                source={require('../images/profile.jpg')}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Events" component={EventsStack} />
      <Tab.Screen name="Favourites" component={FavoriteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

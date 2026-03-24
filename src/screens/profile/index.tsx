import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/slices/authSlice';
import { profileCommonStyles } from './style';

const Profile = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            dispatch(logout());
          },
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <View style={profileCommonStyles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

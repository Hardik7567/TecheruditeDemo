import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAppSelector } from '../../../redux/hooks';

const EventHeader = () => {
  const { user } = useAppSelector(state => state.auth);
  return (
    <View style={{ gap: 10, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: '600' }}>
        {' '}
        Hello {user?.name}
      </Text>
      <Text> Are you ready to Dance</Text>
    </View>
  );
};

export default EventHeader;

const styles = StyleSheet.create({});

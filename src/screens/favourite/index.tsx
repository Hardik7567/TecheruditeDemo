import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { eventCommonStyles } from '../event/style';
import EventHeader from '../event/components/EventHeader';
import EventListView from '../event/components/EventList';
import useFavourite from '../../hooks/useFavourite';
import { useRoute } from '@react-navigation/native';

const Favorites = () => {
  const { eventData, error, loading, type } = useFavourite();
  return error ? (
    <View style={eventCommonStyles.centerView}>
      <Text>{error}</Text>
    </View>
  ) : (
    <View style={eventCommonStyles.container}>
      <EventHeader />
      <EventListView eventData={eventData} type={type} />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});

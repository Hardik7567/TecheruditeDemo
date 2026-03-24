import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { eventCommonStyles } from './style';
import EventHeader from './components/EventHeader';
import EventListView from './components/EventList';
import useGetEventList from '../../hooks/useGetEventList';

const EventList = () => {
  const { eventData, error, loading, type } = useGetEventList();

  return loading ? (
    <View style={eventCommonStyles.centerView}>
      <ActivityIndicator />
    </View>
  ) : error ? (
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

export default EventList;

const styles = StyleSheet.create({});

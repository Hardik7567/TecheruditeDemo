import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getEventsApi } from '../api/services/event.service';
import { useRoute } from '@react-navigation/native';

const useGetEventList = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>('');

  const getProducyList = async () => {
    setLoading(true);
    try {
      const response = await getEventsApi();
      setEventData(response.data?.products);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch event data');
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducyList();
  }, []);

  return {
    eventData,
    loading,
    error,
    type: 'Event',
  };
};

export default useGetEventList;

const styles = StyleSheet.create({});

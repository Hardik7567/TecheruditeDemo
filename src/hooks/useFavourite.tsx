import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import { ProductItem } from '../api/types/event.type';

const useFavourite = () => {
  const [eventData, setEventData] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>('');
  const { favoriteItems } = useAppSelector(state => state.favorites);
  useEffect(() => {
    if (favoriteItems.length > 0) {
      setError('');
      setEventData(favoriteItems);
    } else {
      setError('No favorite items found');
      setEventData([]);
    }
  }, [favoriteItems]);

  return {
    eventData,
    loading,
    error,
    type: 'Favourite',
  };
};

export default useFavourite;

const styles = StyleSheet.create({});

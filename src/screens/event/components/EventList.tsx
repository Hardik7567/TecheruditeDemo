import { FlatList, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import EventRenderItem from './EventRenderItem';
import { ProductItem } from '../../../api/types/event.type';
import { useAppSelector } from '../../../redux/hooks';

interface EventListViewProps {
  eventData: ProductItem[];
  type: string;
}
const EventListView = (props: EventListViewProps) => {
  const renderItem = useCallback(
    ({ item }: { item: ProductItem }) => (
      <EventRenderItem item={item} type={props.type} />
    ),
    [],
  );

  const keyExtractor = useCallback(
    (item: ProductItem) => item.id.toString(),
    [],
  );
  return (
    <View>
      <FlatList
        data={props?.eventData || []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={() => {
          return (
            <Text
              style={{
                color: 'gray',
                fontSize: 25,
              }}
            >
              No Data Found
            </Text>
          );
        }}
      />
    </View>
  );
};

export default EventListView;

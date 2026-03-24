import { FlatList, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import EventRenderItem from './EventRenderItem';
import { ProductItem } from '../../../api/types/event.type';

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

  const EmptyList = () => (
    <Text style={{ color: 'gray', fontSize: 25 }}>No Data Found</Text>
  );
  return (
    <View>
      <FlatList
        data={props?.eventData || []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={5}
        contentContainerStyle={{ paddingBottom: 70 }}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
};

export default EventListView;

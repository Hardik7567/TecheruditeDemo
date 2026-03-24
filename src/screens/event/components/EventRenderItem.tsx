import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback } from 'react';
import { renderItemStyles } from '../style';
import RenderTag from './RenderTag';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { addFavorite } from '../../../redux/slices/favoriteSlice';
import { ProductItem } from '../../../api/types/event.type';
import { useRoute } from '@react-navigation/native';

type EventType = 'Event' | 'Favourite';
interface EventRenderItemProps {
  item: ProductItem;
  type: EventType | string;
}
const EventRenderItem = (props: EventRenderItemProps) => {
  const { item } = props;
  const dispatch = useAppDispatch();
  const { favoriteItems } = useAppSelector(state => state.favorites);

  const renderItem = useCallback(
    ({ item }: { item: string }) => <RenderTag item={item} />,
    [],
  );

  const keyExtractor = useCallback((item: string) => item.toString(), []);

  const addToFavourite = useCallback(() => {
    dispatch(addFavorite(item));
  }, []);

  const isAvailableInFavourite = useCallback(() => {
    if (props?.type === 'Event') {
      const isAvailable = favoriteItems.some(favItem => favItem.id === item.id);
      return isAvailable;
    }
  }, [props?.type, favoriteItems]);

  const checkIsFavourite = useCallback(() => {
    return props?.type === 'Favourite' || isAvailableInFavourite();
  }, [props?.type, favoriteItems]);
  return (
    <View style={renderItemStyles.container}>
      <Image
        style={renderItemStyles.imageView}
        source={{
          uri: item.images?.[0] ?? '',
        }}
      />
      <View style={renderItemStyles.detailsView}>
        <View style={renderItemStyles.topView}>
          <Text style={renderItemStyles.title}>{item?.brand ?? 'N/A'}</Text>
          <View style={renderItemStyles.dateView}>
            <Text style={renderItemStyles.date}>10/2/2026 - 10/2/2026</Text>
            <Text style={renderItemStyles.city}>{item?.category ?? 'N/A'}</Text>
          </View>
          <Text style={renderItemStyles.city}>$10 - $20</Text>
        </View>
        <View style={renderItemStyles.bottomView}>
          <View style={renderItemStyles.tagList}>
            <FlatList
              style={{ flexGrow: 0 }}
              data={item?.tags || []}
              horizontal
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              contentContainerStyle={{ gap: 3 }}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={renderItemStyles.actionView}>
            <TouchableOpacity
              onPress={addToFavourite}
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: checkIsFavourite() ? 'red' : 'black',
                }}
              >
                <Image
                  style={{ height: 20, width: 20 }}
                  source={
                    checkIsFavourite()
                      ? require('../../../images/fav.png')
                      : require('../../../images/unfavourite.jpg')
                  }
                />
                {/* {checkIsFavourite() ? 'Remove' : 'Add'} */}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EventRenderItem;

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { renderItemStyles } from '../style';

interface RenderTagProps {
  item: string;
}
const RenderTag = (props: RenderTagProps) => {
  return (
    <View style={renderItemStyles.renderTag}>
      <Text style={renderItemStyles.tagtitle}>{props?.item || ''}</Text>
    </View>
  );
};

export default RenderTag;

const styles = StyleSheet.create({});

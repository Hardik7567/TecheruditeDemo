import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { inputStyles } from '../style';

export type InputViewProps = {
  placeholder?: string;
  title: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

const InputView = (props: InputViewProps) => {
  const { placeholder, title } = props;
  return (
    <View style={inputStyles.container}>
      <Text style={inputStyles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={inputStyles.input}
        value={props?.value || ''}
        onChangeText={props.onChangeText}
        // secureTextEntry={title === 'Password' ? true : false}
      />
    </View>
  );
};

export default InputView;

const styles = StyleSheet.create({});

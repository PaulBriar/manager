import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
  const { btnStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: 'dodgerblue',
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'dodgerblue',
    marginLeft: 5,
    marginRight: 5,
  },
});

export default Button;

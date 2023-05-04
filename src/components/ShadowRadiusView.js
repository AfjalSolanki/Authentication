import * as React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';

const ShadowRadiusView = ({style, children}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default ShadowRadiusView;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    // overflow: 'hidden',
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: 'rgba(232,232,232',
    shadowOpacity: 1,
    elevation: 3,
  },
});

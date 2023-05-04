import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageStyle,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fonts from '../theme/Font';

const FormBackHeader = ({
  title,
  rightIcon,
  rightImage,
  onPressLeft,
  onPresright,
  rightIconStyle,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 0.2}}>
        <TouchableOpacity onPress={onPressLeft}>
          <Ionicons name="arrow-back" size={20} color={'#6C6C70'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titles}>{title}</Text>
      <View style={{flex: 0.2}}>
        {rightImage && (
          <TouchableOpacity
            onPress={onPresright}
            style={{alignSelf: 'flex-end'}}>
            <Image source={rightIcon} style={rightIconStyle} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormBackHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  titles: {
    color: '#2C2C2E',
    fontSize: 18,
    fontFamily: Fonts.POPPINS_BOLD,
    textAlign: 'center',
    flex: 1,
  },
});

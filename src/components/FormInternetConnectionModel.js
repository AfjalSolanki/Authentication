import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Colors from '../theme/Color';
import Font from '../theme/Font';
const FormInternetConnectionModel = ({isVisible}) => {
  return (
    <Modal
      style={{flex:1}}
      backdropColor="rgba(0,0,0,0.4)"
      backdropOpacity={1}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={1500}
      animationOutTiming={1500}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      isVisible={isVisible}>
      <View style={styles.container}>
        <Text style={styles.heading}>{'No Internet'}</Text>
        <Text style={styles.txt}>{'Please check your conection'}</Text>
      </View>
    </Modal>
  );
};

export default FormInternetConnectionModel;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingVertical: 50,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  heading: {fontSize: 17, color: Colors.black, fontFamily: Font.POPPINS_BOLD},
  txt: {
    fontSize: 16,
    color:  Colors.black,
    fontFamily: Font.POPPINS_BOLD,
    marginTop: 15,
    marginHorizontal: 5,
    textAlign: 'center',
  },
});

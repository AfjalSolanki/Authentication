import Toast from 'react-native-toast-message';
import {titleCase} from 'title-case';

export const ToastMessage = (text1, type) => {
  Toast.show({
    type: type || 'success',
    position: 'bottom',
    text1,
    visibilityTime: 3000,
    autoHide: true,
    bottomOffset: 40,
  });
};

export const snakeCaseToSentenceCase = str => {
  return titleCase(str.replace('_', ' '));
};

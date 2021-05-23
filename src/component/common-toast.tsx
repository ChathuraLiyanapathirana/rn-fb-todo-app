import {ToastAndroid} from 'react-native';

const CustomToast = (message: string) => {
  return ToastAndroid.showWithGravity(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
  );
};

export default CustomToast;

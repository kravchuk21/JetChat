import Toast from 'react-native-toast-message';

type ShowToastType = {
  type?: string;
  text1: string;
  text2: string;
};

export const ShowToast = ({type = 'error', text1, text2}: ShowToastType) => {
  return Toast.show({
    type,
    text1,
    text2,
    position: 'bottom',
    visibilityTime: 3000,
  });
};

import React, {FC} from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Theme from '../theme/theme';

type CustomButtonProps = TouchableOpacityProps & {
  shape: string;
  title: string;
};

const CustomButton: FC<CustomButtonProps> = ({shape, title, ...props}) => {
  return (
    <TouchableOpacity
      style={shape === 'round' ? Theme.floatButton : Theme.flatButton}
      {...props}>
      <Text
        style={
          shape === 'round' ? Theme.floatButtonIcon : Theme.flatButtonIcon
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

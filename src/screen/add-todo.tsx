import React, {FC, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import CustomButton from '../component/custom-button';
import Theme from '../theme/theme';
import {writeData} from '../service/firebase-rtdb';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import {getCurrentDateTime} from '../util/date-time';
import CustomToast from '../component/common-toast';

const AddTodo: FC = () => {
  const navigation = useNavigation();
  const [todo, setTodo] = useState<string>('');
  const [isDone, setIsDone] = useState<boolean>(false);

  const dataSubmit = () => {
    todo !== ''
      ? writeData({
          todo: todo,
          done: isDone,
          dateTime: getCurrentDateTime(),
        }).then(() => {
          CustomToast('Successfully Added!');
          navigation.navigate('Home');
        })
      : CustomToast('Todo is required!');
  };
  return (
    <View style={Theme.screen}>
      <TextInput
        onChangeText={text => setTodo(text)}
        placeholder="Todo"
        style={Theme.inputField}
      />
      <View style={Theme.checkboxWrapper}>
        <Text style={Theme.checkBoxLabel}>Is Done: </Text>
        <CheckBox
          disabled={false}
          value={isDone}
          onChange={() => setIsDone(!isDone)}
        />
      </View>
      <View style={Theme.formButton}>
        <CustomButton
          shape="squire"
          title="Submit"
          onPress={() => {
            dataSubmit();
          }}
        />
      </View>
    </View>
  );
};

export default AddTodo;

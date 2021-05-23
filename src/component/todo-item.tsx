import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Theme from '../theme/theme';
import {removeData, writeData as updateData} from '../service/firebase-rtdb';
import CustomToast from './common-toast';
import {Swipeable} from 'react-native-gesture-handler';

export type TodoItemPropType = {
  todo: string;
  done: boolean;
  dateTime: string;
};

const TodoItem: FC<TodoItemPropType> = todoItem => {
  const [isDone, setIsDone] = useState<boolean>(todoItem.done);

  const updateTodo = () => {
    setIsDone(!isDone);
    updateData({
      dateTime: todoItem.dateTime,
      done: !isDone,
      todo: todoItem.todo,
    }).then(() => {
      CustomToast('Successfully Updated!');
    });
  };

  const swipeRightView = () => {
    return (
      <View style={Theme.todoItemSwipe}>
        <Text style={Theme.flatButtonIcon}>X</Text>
      </View>
    );
  };

  const swipeRightOpen = () => {
    removeData(todoItem).then(() => {
      CustomToast('Successfully Deleted!');
    });
  };

  return (
    <Swipeable
      renderRightActions={swipeRightView}
      onSwipeableRightOpen={swipeRightOpen}>
      <View style={Theme.todoItem}>
        <View>
          <Text style={Theme.todoItemText}>{todoItem.todo}</Text>
          <Text style={Theme.todoItemSmallText}>{todoItem.dateTime}</Text>
        </View>
        <CheckBox disabled={false} value={isDone} onChange={updateTodo} />
      </View>
    </Swipeable>
  );
};

export default TodoItem;

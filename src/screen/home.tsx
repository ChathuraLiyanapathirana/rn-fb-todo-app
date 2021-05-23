import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import CustomButton from '../component/custom-button';
import TodoItem, {TodoItemPropType} from '../component/todo-item';
import {readRealTimeData} from '../service/firebase-rtdb';
import {EventRegister} from 'react-native-event-listeners';
import Theme from '../theme/theme';
import {toArray} from 'lodash';

const Home: FC = () => {
  const navigation = useNavigation(); //used for navigation on floating button
  const [todoData, setTodoData] = useState<TodoItemPropType[]>([]); //type is todo type object array
  const [firstTimeCapture, setFirstTimeCapture] = useState<boolean>(true); //for detect first time render
  useEffect(() => {
    //only call first time and add the event listener for real time changes tracking
    if (firstTimeCapture) {
      readRealTimeData();
      EventRegister.addEventListener('myCustomEvent', (values: any) => {
        setTodoData(toArray(values?._data));
      });
      setFirstTimeCapture(false);
    }
    return;
  }, [firstTimeCapture]);

  const renderTodo = (item: TodoItemPropType) => {
    return (
      <TodoItem todo={item.todo} done={item.done} dateTime={item.dateTime} />
    );
  };

  return (
    <View style={Theme.screen}>
      {todoData && (
        <FlatList
          data={todoData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return renderTodo(item);
          }}
          keyExtractor={item => item.todo}
        />
      )}
      <CustomButton
        shape="round"
        title="+"
        onPress={() => {
          navigation.navigate('AddTodo');
        }}
      />
    </View>
  );
};

export default Home;

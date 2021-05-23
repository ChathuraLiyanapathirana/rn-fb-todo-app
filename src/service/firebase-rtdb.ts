import firestore from '@react-native-firebase/firestore';
import {EventRegister} from 'react-native-event-listeners';
import CustomToast from '../component/common-toast';
import {NativeModules} from 'react-native';
import {TodoItemPropType} from '../component/todo-item';

const {DeviceInfoModule} = NativeModules; //get the custom native module

export const readRealTimeData = async () => {
  const deviceId = await DeviceInfoModule.getDeviceId(); //call custom module event
  firestore()
    .collection('todos') //your collection name
    .doc(deviceId) //here goes your device id
    .onSnapshot({
      next: data => EventRegister.emit('myCustomEvent', data), //when data retrieved // emit my custom event
      error: error => CustomToast(error.message),
    });
};

export const writeData = async (todo: TodoItemPropType) => {
  const deviceId = await DeviceInfoModule.getDeviceId();
  firestore()
    .collection('todos')
    .doc(deviceId)
    .update({
      [todo.dateTime]: todo,
    });
};

export const removeData = async (todo: TodoItemPropType) => {
  const deviceId = await DeviceInfoModule.getDeviceId();
  let todosForDevice = firestore().collection('todos').doc(deviceId);
  todosForDevice.update({
    [todo.dateTime]: firestore.FieldValue.delete(),
  });
};

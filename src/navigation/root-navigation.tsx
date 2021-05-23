import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/home';
import AddTodo from '../screen/add-todo';
import {color} from '../theme/color';

const RootNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: color.primary},
          headerTitleStyle: {color: color.Secondary},
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Todo List'}}
        />
        <Stack.Screen
          name="AddTodo"
          component={AddTodo}
          options={{title: 'New Todo', headerLeft: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

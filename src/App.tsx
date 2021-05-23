/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import RootNavigation from './navigation/root-navigation';
import {color} from './theme/color';
import Theme from './theme/theme';

const App: FC = () => {
  //navigation code has split take a look @ navigation folder
  return (
    <SafeAreaView style={Theme.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor={color.primary_dark} />
      <RootNavigation />
    </SafeAreaView>
  );
};

export default App;

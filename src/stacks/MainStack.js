import React from 'react';
import {createStackNavigation} from '@react-navigation/stack';

import Preload from '.../screens/Preload';
import SignIn from '.../screens/SignIn';
import SignUp from '.../screens/SignUp';

const Stack = createStackNavigation();

export default () => (
  <Stack.Navigation>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigation>
);

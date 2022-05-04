import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import Login from '../screens/Login';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>      
      <AuthStack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
      <AuthStack.Screen name="Register" component={Register} options={{headerShown: false}}/>
      <AuthStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
    </AuthStack.Navigator>
  );
}
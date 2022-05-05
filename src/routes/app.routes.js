import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import Login from '../screens/Login';

const AppStack = createStackNavigator();

export default function AppRoutes() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
            <AppStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <AppStack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <AppStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        </AppStack.Navigator>
    );
}
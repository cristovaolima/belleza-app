import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

const AppStack = createStackNavigator();

export default function AppRoutes() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home}/>
        </AppStack.Navigator>
    );
}
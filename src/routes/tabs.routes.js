import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import Home1 from '../screens/Home';
import Home2 from '../screens/Home';
import Home3 from '../screens/Home';

const Tab = createBottomTabNavigator();

export default function TabsRoutes() {
    return (
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#95b8c4',
                tabBarStyle: {
                    height: 80,
                }
            }}>
            <Tab.Screen 
                name="Principal" 
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="home" color={color} size={size} />
                    }}
                }
            />
            <Tab.Screen 
                name="Pesquisa" 
                component={Home1} 
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="search" color={color} size={size} />
                    }}
                }
            />
            <Tab.Screen 
                name="Agenda" 
                component={Home2} 
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="bars" color={color} size={size} />
                    }}
                }
            />
            <Tab.Screen 
                name="Ajustes" 
                component={Home3} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="gear" color={color} size={size} />
                    }}
                }
            />
        </Tab.Navigator>
    );
}
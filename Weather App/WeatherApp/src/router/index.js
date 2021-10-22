import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from 'src/screens/Splash';
import UnAuthenticated from './UnAuthenticated';
import Authenticated from './Authenticated';

import Routes from './Routes';

const Stack = createStackNavigator();

const navigator = () => {
    return (
        <Stack.Navigator initialRouteName={Routes.Splash} headerMode="none">
            <Stack.Screen name={Routes.Splash} component={SplashScreen} />

            <Stack.Screen
                name={Routes.UnAuthenticated}
                component={UnAuthenticated}
            />

            <Stack.Screen
                name={Routes.Authenticated}
                component={Authenticated}
            />
        </Stack.Navigator>
    );
};

export default navigator;

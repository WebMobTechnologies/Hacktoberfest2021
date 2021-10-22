/**
 * Created using React-Native Base
 * https://webmobtech.com
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Toast} from 'src/component';
import {Color} from 'src/utils';
import RootNavigator from 'src/router';

const MyAppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Color.PRIMARY,
        background: Color.PRIMARY_BACKGROUND,
        card: Color.PRIMARY,
        text: Color.WHITE,
    },
};

const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaProvider>
                    <StatusBar
                        barStyle="default"
                        backgroundColor={Color.PRIMARY_DARK}
                    />
                    <NavigationContainer theme={MyAppTheme}>
                        <RootNavigator />
                    </NavigationContainer>
                </SafeAreaProvider>
                <Toast ref={(ref) => Toast.setRef(ref)} />
            </PersistGate>
        </Provider>
    );
};

export default App;

import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import reducer from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export let store = createStore(persistedReducer);
export let persistor = persistStore(store, null, () => {
    console.log('rehydrated');
});

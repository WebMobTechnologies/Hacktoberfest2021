import {Platform} from 'react-native';

import {Color} from './Color';
import Messages from './MessageUtils';
import Constants from './Constants';

import {Toast} from 'src/component';

import CommonStyle from './CommonStyles';
import ThemeUtils from './ThemeUtils';
import Strings from './Strings';
import PermissionUtils from "./PermissionUtils";

// import {createIconSetFromFontello} from 'react-native-vector-icons';
// import fontelloConfig from '../../../config.json'
import NetInfo from '@react-native-community/netinfo';

const IS_ANDROID = Platform.OS === 'android';
const IS_IOS = Platform.OS === 'ios';
const IS_LT_LOLLIPOP = Platform.Version < 21;

// use for check internet connection
const isNetworkConnected = async () => {
    let state = await NetInfo.fetch();
    return state.isConnected;
};

// const Icon = createIconSetFromFontello(fontelloConfig);

const ToastType = {
    SUCCESS: 'success',
    ERROR: 'error',
    FAIL: 'fail',
};

const showToast = (
    title,
    message,
    type = ToastType.SUCCESS,
    onHide = undefined,
    onShow = undefined,
) => {
    //  type: 'success | error | info',

    Toast.show({
        type: type,
        position: 'bottom',
        text1: title === '' ? undefined : title,
        text2: message,
        visibilityTime: 1000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 20,
        onShow: onShow,
        onHide: onHide,
    });
};

const showMessage = (message, messageType = Constants.MessageType.SUCCESS, options = {}) => {
    return Toast.show( {
        text1: message,
        type: messageType,
        ...options,
    });
};

export {
    IS_IOS,
    IS_ANDROID,
    Color,
    Messages,
    Constants,
    CommonStyle,
    ThemeUtils,
    Strings,
    showMessage,
    ToastType,
    isNetworkConnected,
    showToast,
    PermissionUtils
};

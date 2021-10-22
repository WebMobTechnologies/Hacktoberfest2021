import {
    check,
    openSettings,
    PERMISSIONS,
    request,
    RESULTS,
} from 'react-native-permissions';
import {Alert} from 'react-native';
import {IS_ANDROID} from './index';
import MessageUtils from './MessageUtils';

const startPermissionRequest = async (
    permission,
    permissionTitle,
    permissionMessage,
) => {
    let status = await check(permission);
    switch (status) {
        case RESULTS.DENIED:
            status = await request(permission);
            break;
        case RESULTS.BLOCKED:
            Alert.alert(
                permissionTitle,
                permissionMessage,
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'Okay',
                        onPress: () =>
                            openSettings().catch(() =>
                                console.warn('cannot open settings'),
                            ),
                    },
                ],
                {cancelable: false},
            );
            break;
    }
    return status === RESULTS.GRANTED;
};

const requestCameraPermission = async () => {
    return await startPermissionRequest(
        IS_ANDROID ? PERMISSIONS.ANDROID.CAMERA : PERMISSIONS.IOS.CAMERA,
        MessageUtils.PermissionMessage.cameraPermissionTitle,
        MessageUtils.PermissionMessage.cameraPermissionMessage,
    );
};

const requestStoragePermission = async () => {
    return await startPermissionRequest(
        IS_ANDROID
            ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
            : PERMISSIONS.IOS.PHOTO_LIBRARY,
        MessageUtils.PermissionMessage.storagePermissionTitle,
        MessageUtils.PermissionMessage.storagePermissionMessage,
    );
};

const requestLocationPermission = async () => {
    return await startPermissionRequest(
        IS_ANDROID
            ? PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION
            : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        MessageUtils.PermissionMessage.locationPermissionTitle,
        MessageUtils.PermissionMessage.locationPermissionMessage,
    );
};

export default {
    requestCameraPermission,
    requestStoragePermission,
    requestLocationPermission,
    startPermissionRequest,
};

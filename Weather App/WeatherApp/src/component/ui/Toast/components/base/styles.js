import {StyleSheet} from 'react-native';
import colors from '../../colors';

import {ThemeUtils, Color} from 'src/utils';

export const HEIGHT = 60;

export default StyleSheet.create({
    base: {
        flexDirection: 'row',
        // height: HEIGHT,
        width: '90%',
        borderRadius: 6,
        backgroundColor: colors.white,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 2,
        paddingVertical: 20,
    },
    borderLeft: {
        borderLeftWidth: 5,
        borderLeftColor: colors.alto,
    },
    iconContainer: {
        paddingHorizontal: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    closeButtonContainer: {
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeIcon: {
        width: 9,
        height: 9,
    },
   text1: {
        fontSize: ThemeUtils.FontSize.fontNormal,
        fontFamily: ThemeUtils.FontStyle.medium,
    },
    text2: {
        fontSize: ThemeUtils.FontSize.fontSmall,
        fontFamily: ThemeUtils.FontStyle.medium,
        color: colors.dustyGray,
    },
});

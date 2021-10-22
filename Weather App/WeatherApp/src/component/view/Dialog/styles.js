import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from 'src/utils';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.DARK_LIGHT_BLACK,
        justifyContent: 'center',
    },
    dialogCont: {
        marginHorizontal: ThemeUtils.relativeRealWidth(6),
        borderRadius: 4,
        backgroundColor: Color.WHITE,
        shadowColor: Color.BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    btnCont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: ThemeUtils.relativeRealWidth(4),
    },
    btn: {
        backgroundColor: Color.BLACK,
        minWidth: ThemeUtils.relativeRealWidth(20),
        marginStart: ThemeUtils.relativeRealWidth(4),
        paddingHorizontal: ThemeUtils.relativeRealWidth(4),
        paddingVertical: ThemeUtils.relativeRealHeight(1),
        borderRadius: 4,
    },
    headerTitle: {
        paddingHorizontal: ThemeUtils.relativeRealWidth(4),
        paddingVertical: ThemeUtils.relativeRealWidth(4),
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
    },
});

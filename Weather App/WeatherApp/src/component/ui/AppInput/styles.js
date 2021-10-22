import {StyleSheet} from 'react-native';
import {Color} from 'src/utils';

export default StyleSheet.create({
    icEye: {
        paddingHorizontal: 10,
    },
    filledStyle: {
        borderRadius: 4,
        backgroundColor: Color.PRIMARY,
    },
    outlinedLabelStyle: {
        borderRadius: 4,

        backgroundColor: Color.WHITE,
        borderWidth: 1,
        borderColor: Color.PRIMARY,
    },
});

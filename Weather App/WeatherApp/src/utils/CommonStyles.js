import {StyleSheet} from 'react-native';
import {Color} from './Color';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WHITE,
    },
    content_center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    full_flex: {
        flex: 1,
    },
    master_full_flex: {
        flex: 1,
        backgroundColor: Color.WHITE,
    },
    full_center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Style;

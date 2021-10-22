import {StyleSheet} from 'react-native';
import {ThemeUtils} from 'src/utils';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: ThemeUtils.relativeRealHeight(8),
        paddingHorizontal: ThemeUtils.relativeRealWidth(4),
        paddingVertical: ThemeUtils.relativeRealHeight(2),
    },
});

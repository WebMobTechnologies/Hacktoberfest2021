import {StyleSheet} from 'react-native';
import {Color} from 'src/utils';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.PRIMARY_BG,
    },
    logo: {
        width: '40%',
        height: '30%',
    },
});

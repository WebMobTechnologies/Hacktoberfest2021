import React from 'react';

import {View} from 'react-native';

import {styles} from './styles';

import {Label} from 'src/component';
import {CommonStyle} from 'src/utils';

const Home = (props) => {
    /*  Life-cycles Methods */

    /*  Public Interface Methods */

    /*  Validation Methods  */

    /*  UI Events Methods   */

    const onPressIcon = () => {
    };

    /*  Custom-Component sub-render Methods */

    return (
        <View style={CommonStyle.master_full_flex}>
            <View style={styles.container}>
                <Label onPress={onPressIcon}>{'Home Screen'}</Label>
            </View>
        </View>
    );
};

export default Home;

import React, { useEffect } from 'react';

import { View } from 'react-native';

import { styles } from './styles';

import { IS_IOS } from 'src/utils';
import Routes from 'src/router/Routes';

import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';

const Splash = (props) => {
    //navigate to authenticated route
    const resetToAuth = CommonActions.reset({
        index: 0,
        routes: [{ name: Routes.Authenticated }],
    });

    //navigate to authenticated route
    const resetToNotAuth = CommonActions.reset({
        index: 0,
        routes: [{ name: Routes.UnAuthenticated }],
    });

    /*  Life-cycles Methods */

    useEffect(() => {
        let splashDelay = IS_IOS ? 100 : 1000;
        setTimeout(() => {
            props.navigation.dispatch(resetToAuth);
        }, splashDelay);

    }, []);

    /*  Public Interface Methods */

    /*  Validation Methods  */

    /*  UI Events Methods   */

    /*  Custom-Component sub-render Methods */

    return <View style={styles.container} />;
};

//set store values as props
const mapStateToProps = (state) => {
    return {
        user: state.user,
        token: state.token,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

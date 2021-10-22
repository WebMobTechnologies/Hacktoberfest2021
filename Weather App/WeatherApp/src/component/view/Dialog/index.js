import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {Label, Ripple} from 'src/component';
import styles from './styles.js';
import PropTypes from 'prop-types';
import {Color, ThemeUtils} from 'src/utils';

export default function Dialog(props) {
    const {
        visible,
        onNegativePress,
        onPositivePress,
        title,
        desc,
        positiveBtnText,
        negativeBtnText,
        positiveBtnBgColor,
        negativeBtnBgColor,
        positiveBtnTextColor,
        negativeBtnTextColor,
        rippleColor,
        headerBgColor,
        headerTextColor,
        cancelable,
    } = props;

    return (
        <Modal
            transparent
            animated
            animationType={'fade'}
            visible={visible}
            hardwareAccelerated>
            <TouchableOpacity
                activeOpacity={1}
                disabled={!cancelable}
                onPress={onNegativePress}
                style={styles.container}>
                <TouchableOpacity activeOpacity={1} style={styles.dialogCont}>
                    <Label
                        singleLine
                        style={[
                            styles.headerTitle,
                            {backgroundColor: headerBgColor},
                        ]}
                        color={headerTextColor}
                        bolder>
                        {title}
                    </Label>
                    <Label
                        small
                        ms={ThemeUtils.relativeRealWidth(4)}
                        me={ThemeUtils.relativeRealWidth(4)}
                        mt={ThemeUtils.relativeRealWidth(4)}>
                        {desc}
                    </Label>
                    <View style={styles.btnCont}>
                        <Ripple
                            style={[
                                styles.btn,
                                {backgroundColor: negativeBtnBgColor},
                            ]}
                            rippleColor={rippleColor}
                            onPress={onNegativePress}>
                            <Label
                                small
                                align={'center'}
                                color={negativeBtnTextColor}>
                                {negativeBtnText}
                            </Label>
                        </Ripple>
                        <Ripple
                            style={[
                                styles.btn,
                                {backgroundColor: positiveBtnBgColor},
                            ]}
                            rippleColor={rippleColor}
                            onPress={onPositivePress}>
                            <Label
                                small
                                align={'center'}
                                color={positiveBtnTextColor}>
                                {positiveBtnText}
                            </Label>
                        </Ripple>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
}
Dialog.defaultProps = {
    positiveBtnText: 'Okay',
    negativeBtnText: 'Cancel',
    cancelable: true,
    positiveBtnBgColor: Color.BLACK,
    negativeBtnBgColor: Color.BLACK,
    positiveBtnTextColor: Color.WHITE,
    negativeBtnTextColor: Color.WHITE,
    rippleColor: Color.WHITE,
    headerTextColor: Color.WHITE,
    headerBgColor: Color.BLACK,
};
Dialog.propTypes = {
    visible: PropTypes.bool,
    cancelable: PropTypes.bool,
    title: PropTypes.string,
    desc: PropTypes.string,
    positiveBtnText: PropTypes.string,
    negativeBtnText: PropTypes.string,
    positiveBtnBgColor: PropTypes.string,
    negativeBtnBgColor: PropTypes.string,
    positiveBtnTextColor: PropTypes.string,
    negativeBtnTextColor: PropTypes.string,
    headerBgColor: PropTypes.string,
    headerTextColor: PropTypes.string,
    onPositivePress: PropTypes.func,
    onNegativePress: PropTypes.func,
};

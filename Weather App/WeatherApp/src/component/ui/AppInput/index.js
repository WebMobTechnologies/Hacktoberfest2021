import React, {useState} from 'react';
import {View} from 'react-native';
import {FilledTextField, OutlinedTextField, TextField} from 'rn-material-ui-textfield';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {ThemeUtils} from 'src/utils';
import PropTypes from 'prop-types';
import styles from './styles';

import {Label} from 'src/component';

export default function AppInput(props) {
    let {icEyeColor, filled, label, outlinedLabel, outlined, secureTextEntry} = props;
    const [passwordVisible, setPasswordVisible] = useState(secureTextEntry);
    let InputComponent = TextField;
    if (filled || outlinedLabel) {
        InputComponent = FilledTextField;
    } else if (outlined) {
        InputComponent = OutlinedTextField;
    }

    return (
        <View>
            {outlinedLabel && label ? (
                <Label font_medium
                       small
                       mb={8}>
                    {label}
                </Label>
            ) : null}
            <InputComponent
                labelOffset={outlined ? {
                    y0: 1,
                } : null}
                inputContainerStyle={filled ? styles.filledStyle : (outlinedLabel ? styles.outlinedLabelStyle : null)}
                contentInset={filled || outlinedLabel ? {
                    label: 0,
                    top: 4,
                    input: 14,
                } : null}
                renderRightAccessory={() => {
                    if (!secureTextEntry) {
                        return;
                    }
                    return (
                        <View style={styles.icEye}>
                            <Icon
                                color={icEyeColor}
                                name={
                                    passwordVisible
                                        ? 'visibility-off'
                                        : 'visibility'
                                }
                                size={ThemeUtils.fontLarge}
                                onPress={() =>
                                    setPasswordVisible((prevVal) => !prevVal)
                                }
                            />
                        </View>
                    );
                }}

                {...props}
                baseColor={filled || outlinedLabel ? 'transparent' : props.baseColor}
                tintColor={filled || outlinedLabel ? 'transparent' : props.tintColor}
                // errorColor={filled || outlinedLabel ? 'transparent' : props.errorColor}
                activeLineWidth={filled || outlined ? 0 : 2}

                secureTextEntry={passwordVisible}
            />
        </View>
    );
}

AppInput.propTypes = {
    icEyeColor: PropTypes.string,
    filled: PropTypes.bool,
    outlined: PropTypes.bool,
    outlinedLabel: PropTypes.bool,
    ...TextField.propTypes,
};

AppInput.defaultProps = {
    filled: false,
    outlined: false,
    outlinedLabel: false,
    ...TextField.defaultProps,
};




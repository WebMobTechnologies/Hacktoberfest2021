import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Label} from 'src/component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color, CommonStyle, ThemeUtils} from 'src/utils';
import PropTypes from 'prop-types';
import styles from './styles';


const RadioGroup = (props) => {
    const {onSelectOption, selectedOption, options} = props;

    const renderOptions = (item) => {
        return (
            <TouchableOpacity style={styles.optionCont}
                              activeOpacity={0.7}
                              onPress={() => onSelectOption && onSelectOption(item.value)}
                              key={`${item.value}`}>
                <Icon name={selectedOption === item.value ? 'radiobox-marked' : 'radiobox-blank'}
                      color={selectedOption === item.value ? Color.PRIMARY : Color.BLACK}
                      size={ThemeUtils.fontNormal}
                      style={styles.icRadio}/>
                <Label small
                       style={CommonStyle.full_flex}
                       ms={8}
                       mb={8}>
                    {item.name}
                </Label>
            </TouchableOpacity>
        );
    };
    return (
        <View>
            {options.map(renderOptions)}
        </View>
    );
};
RadioGroup.propTypes = {
    onSelectOption: PropTypes.func.isRequired,
    selectedOption: PropTypes.object,
    options: PropTypes.object,
};
export default RadioGroup;

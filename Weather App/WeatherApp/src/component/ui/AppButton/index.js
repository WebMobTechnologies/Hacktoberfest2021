import React from 'react';
import {ActivityIndicator, TouchableHighlight, View} from 'react-native';
import {Ripple,Label} from 'src/component';
import {Color, CommonStyle, ThemeUtils} from 'src/utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

class AppButton extends React.Component {
    onClick = () => {
        if (this.props.click && !this.props.loading) {
            this.props.click();
        }
    };


    render() {
        const {
            width,
            outlined,
            solid,
            btn_xs,
            btn_sm,
            btn_lg,
            btn_xl,
            btnPrimary,
            mt,
            mb,
            ms,
            me,
            btnShadow,
            borderRadius,
            btn_block,
            backgroundColor,
            borderColor,
            icon,
            loading,
        } = this.props;

        let btnContainerStylesArray = [];
        let btnTextStylesArray = [];
        if (btn_xs) {
            btnContainerStylesArray.push({
                paddingHorizontal: 20,
                paddingVertical: 12,
            });
            btnTextStylesArray.push({fontSize: ThemeUtils.fontXSmall});
        } else if (btn_sm) {
            btnContainerStylesArray.push({
                paddingHorizontal: 20,
                paddingVertical: 12,
            });
            btnTextStylesArray.push({fontSize: ThemeUtils.fontSmall});
        } else if (btn_lg) {
            btnContainerStylesArray.push({
                paddingHorizontal: 20,
                paddingVertical: 14,
            });
            btnTextStylesArray.push({fontSize: ThemeUtils.fontLarge - 2});
        } else if (btn_xl) {
            btnContainerStylesArray.push({
                paddingHorizontal: 20,
                paddingVertical: 14,
            });
            btnTextStylesArray.push({fontSize: ThemeUtils.fontXLarge - 2});
        } else if (btnPrimary) {
            btnContainerStylesArray.push({
                paddingHorizontal: 20,
                paddingVertical: 12,
            });
            btnTextStylesArray.push({
                fontSize: ThemeUtils.fontLarge,
                fontFamily: ThemeUtils.FontStyle.medium,
            });
        } else {
            btnContainerStylesArray.push({
                paddingHorizontal: 20,
                paddingVertical: 12,
            });
            btnTextStylesArray.push({fontSize: ThemeUtils.fontNormal});
        }
        let btnWholeStyles = [];

        btnWholeStyles.push({
            marginTop: mt,
            marginBottom: mb,
            marginStart: ms,
            marginEnd: me,
        });

        if (btnShadow) {
            btnWholeStyles.push({
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            });
        }

        if (btn_block) {
            btnWholeStyles.push({
                alignSelf: 'stretch',
            });
        }

        btnContainerStylesArray.push({
            ...CommonStyle.content_center,
            backgroundColor: outlined ? Color.TRANSPARENT : backgroundColor,
            borderColor: outlined ? borderColor : backgroundColor,
            borderWidth: outlined ? 1.5 : 0,
            borderRadius: solid ? 0 : borderRadius,
            width: width,
            height: 48,
            flexDirection: 'row',
            opacity: loading ? 0.7 : 1,
        });
        btnTextStylesArray.push({
            color: this.props.textColor,
            fontFamily: ThemeUtils.FontStyle.medium,
        });

        return (
            <TouchableHighlight style={btnWholeStyles}>
                <View>
                    <Ripple
                        disabled={loading}
                        style={btnContainerStylesArray}
                        rippleContainerBorderRadius={borderRadius}
                        onPress={this.onClick}>
                        {loading ? (
                            <ActivityIndicator color={outlined ? Color.PRIMARY : Color.WHITE}
                                               size={ThemeUtils.fontLarge}/>
                        ) : icon ? <Icon name={icon}
                                         size={ThemeUtils.fontNormal}/> : null}
                        <Label style={btnTextStylesArray}
                               ms={loading || icon ? 8 : 0}>
                            {this.props.children}
                        </Label>
                    </Ripple>
                </View>
            </TouchableHighlight>
        );
    }
}

AppButton.defaultProps = {
    ...TouchableHighlight.defaultProps,
    textColor: Color.TEXT_PRIMARY,
    backgroundColor: Color.ACCENT_COLOR,
    loading: false,
    outlined: false,
    solid: false,
    rounded: true,
    btn_xs: false,
    btn_sm: false,
    btn_lg: false,
    btn_xl: false,
    btn_block: false,
    btnShadow: false,
    btnPrimary: false,
    borderRadius: 15,
    borderWidth: 0,
    mt: 0,
    mb: 0,
    ms: 0,
    me: 0,
    width: ThemeUtils.relativeWidth(30),
};
AppButton.propTypes = {
    ...TouchableHighlight.propTypes,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    btn_xs: PropTypes.bool,
    btn_sm: PropTypes.bool,
    btn_lg: PropTypes.bool,
    btn_xl: PropTypes.bool,
    btn_block: PropTypes.bool,
    btnShadow: PropTypes.bool,
    btnPrimary: PropTypes.bool,
    outlined: PropTypes.bool,
    solid: PropTypes.bool,
    rounded: PropTypes.bool,
    borderRadius: PropTypes.number,
    borderWidth: PropTypes.number,
    mt: PropTypes.number,
    mb: PropTypes.number,
    ms: PropTypes.number,
    me: PropTypes.number,
    width: PropTypes.number,
    icon: PropTypes.string,
    loading: PropTypes.bool,
};
export default AppButton;

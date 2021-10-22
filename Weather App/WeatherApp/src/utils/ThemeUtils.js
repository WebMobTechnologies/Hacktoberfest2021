import {PixelRatio, Platform, Dimensions} from 'react-native';

const {OS} = Platform;
const IS_IOS = OS === 'ios';

const {width, height} = Dimensions.get('window');
const realWidth = height > width ? width : height;

const isIphoneX = () => {
    return (
        // This has to be iOS duh
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        // Accounting for the height in either orientation
        (height === 812 || width === 812)
    );
};

const getStatusBarHeight = () => {
    return Platform.select({
        ios: isIphoneX() ? 44 : 20,
        android: 0,
    });
};

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = getStatusBarHeight();
const NAV_HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT;
const TAB_HEIGHT = 56;

const myWidth = Dimensions.get('window').width;
const myHeight = Dimensions.get('window').height;

const relativeWidth = (num) => (myWidth * num) / 100;
const relativeHeight = (num) => (myHeight * num) / 100;

const realHeight = height > width ? height : width;
const relativeRealWidth = (num) => {
    return (realWidth * num) / 100;
};
const relativeRealHeight = (num) => (realHeight * num) / 100;

const fontBaseXSmall = 12;
const fontBaseSmall = 15;
const fontBaseNormal = 17;
const fontBaseLarge = 20;
const fontBaseXLarge = 24;
const fontBaseXXLarge = 28;

const isTablet = () => {
    let pixelDensity = PixelRatio.get();
    let adjustedWidth = width * pixelDensity;
    let adjustedHeight = height * pixelDensity;
    if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
        return true;
    } else {
        return (
            pixelDensity === 2 &&
            (adjustedWidth >= 1920 || adjustedHeight >= 1920)
        );
    }
};

const responsiveFontSize = (fontSize) => {
    let divider = isTablet() ? 600 : 375;
    return Math.round((fontSize * realWidth) / divider);
};

const fontXSmall = responsiveFontSize(fontBaseXSmall);
const fontSmall = responsiveFontSize(fontBaseSmall);
const fontNormal = responsiveFontSize(fontBaseNormal);
const fontLarge = responsiveFontSize(fontBaseLarge);
const fontXLarge = responsiveFontSize(fontBaseXLarge);
const fontXXLarge = responsiveFontSize(fontBaseXXLarge);

const responsiveHeight = (basicHeight) => {
    if (!isTablet()) {
        return basicHeight;
    } else {
        return basicHeight + basicHeight * 0.25;
    }
};

export const circleStyle = {
    height: responsiveHeight(70),
    width: responsiveHeight(70),
    borderRadius: responsiveHeight(35),
};
/*Add the font-names here as per project requirement*/
export const FontStyle = {
    bold: IS_IOS ? 'SFProDisplay-Bold' : 'Roboto-Bold',
    medium: IS_IOS ? 'SFProDisplay-Medium' : 'Roboto-Medium',
    regular: IS_IOS ? 'SFProDisplay-Regular' : 'Roboto-Regular',
    thin: IS_IOS ? 'SFProDisplay-Thin' : 'Roboto-Thin',
    light: IS_IOS ? 'SFProDisplay-Light' : 'Roboto-Light',
};

const FontSize = {
    fontNormal,
    fontXSmall,
    fontSmall,
    fontLarge,
    fontXLarge,
    fontXXLarge,
};

export default {
    fontXSmall,
    fontSmall,
    fontNormal,
    fontLarge,
    fontXLarge,
    fontXXLarge,

    circleStyle,
    FontSize,

    NAV_HEIGHT,
    responsiveHeight,
    relativeWidth,
    relativeHeight,
    relativeRealWidth,
    relativeRealHeight,

    STATUSBAR_HEIGHT,

    isIphoneX,
    getStatusBarHeight,
    responsiveFontSize,

    FontStyle,
    TAB_HEIGHT,
    APPBAR_HEIGHT,
};

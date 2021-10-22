import React, {PureComponent} from 'react';
import {Animated, View} from 'react-native';

type Props = {
    imageURL: string,
    placeholder: string | number,
    imageStyle: Object,
    isAnimatedReveal: boolean,
    containerStyle?: Object,
    isBackground?: boolean,
    resizeMode?: string,
    placeholderStyle?: Object,
    revealDuration?: number,
    children?: any,
};

const DEFAULT_REVEAL_DURATION = 1000;
const MINIMUM_REVEAL_DURATION = 300;
const DEFAULT_RESIZE_MODE = 'cover';

class ImageWithPlaceholder extends PureComponent<Props> {
    props: Props;
    animationDuration: number;
    imageAnimatedOpacity: Object;
    placeholderAnimatedOpacity: Object;

    constructor(props: Props) {
        super();
        const {imageURL, imageStyle, revealDuration} = props;
        this.state = {
            isImageLoaded: false,
        };
        if (
            typeof imageURL === 'object' &&
            imageStyle.width &&
            imageStyle.height
        ) {
            console.warn(
                'You must provide a fixed height and width for network images',
            );
        }

        if (revealDuration && revealDuration >= MINIMUM_REVEAL_DURATION) {
            this.animationDuration = revealDuration;
        } else if (revealDuration) {
            this.animationDuration = DEFAULT_REVEAL_DURATION;
            console.warn(
                `revealDuration must be greater than ${MINIMUM_REVEAL_DURATION}`,
            );
        } else {
            this.animationDuration = DEFAULT_REVEAL_DURATION;
        }

        this.imageAnimatedOpacity = new Animated.Value(0);
        this.placeholderAnimatedOpacity = new Animated.Value(1);
    }

    onImageLoad = () => {
        this.setState(
            {
                isImageLoaded: true,
            },
            () => {
                if (this.props.isAnimatedReveal) {
                    Animated.timing(this.imageAnimatedOpacity, {
                        toValue: 1,
                        duration: this.animationDuration,
                        useNativeDrivers: true,
                    }).start();
                } else {
                    this.imageAnimatedOpacity.setValue(1);
                }
            },
        );
    };

    render() {
        const {
            imageStyle,
            imageURL,
            isBackground,
            children,
            placeholder,
            placeholderStyle,
            containerStyle,
            resizeMode,
        } = this.props;

        return (
            <View style={[containerStyle || {}, {flex: 1}]}>
                <Animated.Image
                    style={[
                        imageStyle,
                        {
                            opacity: this.imageAnimatedOpacity,
                            position: 'absolute',
                            flex: 1,
                        },
                    ]}
                    source={{uri: imageURL}}
                    onLoad={this.onImageLoad}
                    resizeMode={resizeMode || DEFAULT_RESIZE_MODE}>
                    {isBackground && children}
                </Animated.Image>
                {this.state.isImageLoaded ? null : (
                    <Animated.Image
                        style={[
                            placeholderStyle || imageStyle,
                            {
                                position: 'absolute',
                                flex: 1,
                            },
                        ]}
                        source={placeholder}
                        resizeMode={resizeMode || DEFAULT_RESIZE_MODE}
                    />
                )}
            </View>
        );
    }
}

export default ImageWithPlaceholder;

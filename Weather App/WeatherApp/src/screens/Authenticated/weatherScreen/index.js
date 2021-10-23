import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { styles } from './styles';

const Weather = ({ weather, temperature }) => {
    if (weather != null) {
        return (
            <View
                style={[
                    styles.weatherContainer,
                    { backgroundColor: weatherConditions[weather].color }
                ]}
            >
                <View style={styles.headerContainer}>
                    
                    <Text style={styles.tempText}>{temperature}˚</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>{weatherConditions[weather].title}</Text>
                    <Text style={styles.subtitle}>
                        {weatherConditions[weather].subtitle}
                    </Text>
                </View>
            </View>
        );
    } else {
        return (
            <View>
                <Text>Oh no, something went wrong</Text>
            </View>
        )
    };
};

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string
};
const weatherConditions = {
    Rain: {
        color: '#005BEA',
        title: 'Raining',
        subtitle: 'Get a cup of coffee',
        icon: 'weather-rainy'
    },
    Clear: {
        color: '#f7b733',
        title: 'So Sunny',
        subtitle: 'It is hurting my eyes',
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        color: '#616161',
        title: 'A Storm is coming',
        subtitle: 'Because Gods are angry',
        icon: 'weather-lightning'
    },
    Clouds: {
        color: '#1F1C2C',
        title: 'Clouds',
        subtitle: 'Everywhere',
        icon: 'weather-cloudy'
    },

    Snow: {
        color: '#00d2ff',
        title: 'Snow',
        subtitle: 'Get out and build a snowman for me',
        icon: 'weather-snowy'
    },
    Drizzle: {
        color: '#076585',
        title: 'Drizzle',
        subtitle: 'Partially raining...',
        icon: 'weather-hail'
    },
    Haze: {
        color: '#66A6FF',
        title: 'Haze',
        subtitle: 'Another name for Partial Raining',
        icon: 'weather-hail'
    },
    Mist: {
        color: '#3CD3AD',
        title: 'Mist',
        subtitle: "Don't roam in forests!",
        icon: 'weather-fog'
    }
};
export default Weather;
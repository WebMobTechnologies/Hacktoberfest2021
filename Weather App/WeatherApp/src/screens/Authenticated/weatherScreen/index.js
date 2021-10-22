import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { styles } from './styles';

const Weather = ({ weather, temperature }) => {
    return (
      <View style={styles.weatherContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.tempText}>{temperature}˚</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weather}</Text>
          <Text style={styles.subtitle}>It hurts my eyes!</Text>
        </View>
      </View>
    );
  };

export default Weather;
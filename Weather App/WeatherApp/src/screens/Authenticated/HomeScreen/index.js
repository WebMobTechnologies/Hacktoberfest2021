import Geolocation from '@react-native-community/geolocation';
import React from 'react';
import { Text, View } from 'react-native';
import Weather from '../weatherScreen';
import { styles } from './styles';

export default class Home extends React.Component {
    state = {
        isLoading: true,
        temperature: 0,
        weatherCondition: null,
        error: null
    };

    componentDidMount() {
        Geolocation.getCurrentPosition(
            position => {
                this.fetchWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                this.setState({
                    error: 'Error Getting Weather Condtions'
                });
            }
        );
    }

    fetchWeather(lat, lon) {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=849338767c0e95025b5559533d26b7c4&units=metric`
        )
            .then(res => res.json())
            .then(json => {
                // console.log(json);
                this.setState({
                    temperature: json.main.temp,
                    weatherCondition: json.weather[0].main,
                    isLoading: false
                });
            });
    }

    render() {
        const { isLoading, weatherCondition, temperature } = this.state;
        return (
            <View style={styles.container}>
                {isLoading ? (
                    <View style={styles.loadingContainer}>
                        <Text style={styles.loadingText}>Fetching The Weather</Text>
                    </View>
                ) : (
                    <Weather weather={weatherCondition} temperature={temperature} />
                )}
            </View>
        );
    }
}

import React from 'react';
import { Text, View } from 'react-native';
import Weather from '../weatherScreen';
import { styles } from './styles';

export default class Home extends React.Component {
    state = {
        isLoading: false,
        temperature: 0,
        weatherCondition: null,
        error: null
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.fetchWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                this.setState({
                    error: 'Error Gettig Weather Condtions'
                });
            }
        );
    }

    fetchWeather(lat = 25, lon = 25) {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=b28d246dd7cfc9221938d6034fff664e&units=metric`
        )
            .then(res => res.json())
            .then(json => {
                console.log(json);
            });
    }

    render() {
        const { isLoading } = this.state;
        return (
            <View style={styles.container}>
                {isLoading ? <Text>Fetching The Weather</Text> : <Weather />}
            </View>
        );
    }

}

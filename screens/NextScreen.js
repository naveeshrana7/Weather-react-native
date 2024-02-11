import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import LottieView from 'lottie-react-native';

const WeatherApp = () => {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Request location permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Location permission denied');
        setLoading(false);
        return;
      }

      // Get current location
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      // Fetch current weather data based on location
      const apiKey = '99e5d7b9be2926b409229a4b17747166';
      const { latitude, longitude } = location.coords;
      const weatherResponse = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
      );
      setWeatherData(weatherResponse.data);

      // Fetch forecast weather data based on location
      const forecastResponse = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
      );
      setForecastData(forecastResponse.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Run on mount

  // Function to get the current day
  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    return days[date.getDay()];
  };

  // Function to format date to 'DD/MM' format
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  
  const filteredForecastData = forecastData?.list?.reduce((acc, item) => {
    const date = formatDate(item.dt);
    if (!acc.find((el) => el.date === date) && acc.length < 5) {
      acc.push({ date, forecast: item });
    }
    return acc;
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../animations/animation2.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      {/* Big container for current weather information */}
      <TouchableOpacity style={[styles.weatherInfo, { marginTop: 300 }]} onPress={fetchData}>
          <Text style={styles.temperature}>
            {weatherData?.main.temp}°C (Min: {forecastData?.list[0]?.main.temp_min}°C, Max: {forecastData?.list[0]?.main.temp_max}°C)
          </Text>
          <Text style={styles.location}>{weatherData?.name}</Text>
          <Text style={styles.day}>{getCurrentDay()}</Text>
          <Text style={styles.date}>{formatDate(weatherData?.dt)}</Text>
        </TouchableOpacity>


      {/* Separate view for forecast containers */}
      <View style={styles.forecastView}>
        <ScrollView contentContainerStyle={styles.forecastScrollView}>
          {filteredForecastData?.map(({ date, forecast }, index) => (
            <View style={styles.forecastContainer} key={index}>
              <Text style={styles.forecastDay}>{date}</Text>
              <View style={styles.forecastTempContainer}>
                <Text style={styles.forecastTemp}>Max: {forecast.main.temp_max}°C</Text>
                <Text style={styles.forecastTemp}>Min: {forecast.main.temp_min}°C</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Optional: Display loading indicator */}
      {loading && <ActivityIndicator size="large" color="#fff" style={styles.loader} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  animation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 300, // Adjust height as needed
  },
  weatherInfo: {
    paddingTop: 350,
    paddingRight:150,
    padding: 10,
    color: '#000',
  },
  forecastView: {
    marginTop: 20,
    alignItems: 'flex-start',
    right: 50,
    marginVertical: 50,
  },
  forecastScrollView: {
    alignItems: 'flex-start',
  },
  forecastContainer: {
    marginTop: 20,
    marginLeft: 20,
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  temperature: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 20,
    color: '#000',
    marginVertical: 10,
  },
  location: {
    fontSize: 24,
    color: '#000',
    marginBottom: 10,
  },
  humidity: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
  },
  loader: {
    position: 'absolute',
    bottom: 20,
  },
  day: {
    fontSize: 18,
    color: '#000',
    marginTop: 10,
  },
  forecastDay: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  forecastTempContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forecastTemp: {
    fontSize: 14,
    color: '#000',
  },
});

export default WeatherApp;

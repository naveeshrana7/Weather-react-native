import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from '../screens/LoadingScreen';
import NextScreen from '../screens/NextScreen';
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="LoadingScreen" headerMode="none">
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
        </Stack.Navigator>
  );
};

export default RootNavigator;

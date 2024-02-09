import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from '../screens/LoadingScreen';
import NextScreen from '../screens/NextScreen';
import FeaturedRecipeDetails from '../screens/FeaturedRecipeDetails';
import Sandwichdetail from '../screens/Sandwichdetail1';
import Dosadetail from '../screens/Dosadetail1';
import Pizzadetail from '../screens/Pizzadetail1';
import Biryanidetail from '../screens/Biryanidetail1';
import addindetail from '../screens/Addindetail';
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="LoadingScreen" headerMode="none">
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
        <Stack.Screen name="FeaturedRecipeDetails" component={FeaturedRecipeDetails} />
        <Stack.Screen name="Sandwichdetail" component={Sandwichdetail} />
        <Stack.Screen name="Dosadetail" component={Dosadetail} />
        <Stack.Screen name="Biryanidetail" component={Biryanidetail} />
        <Stack.Screen name="Pizzadetail" component={Pizzadetail} />
        <Stack.Screen name="addindetail" component={addindetail} />
        </Stack.Navigator>
  );
};

export default RootNavigator;

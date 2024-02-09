import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { StarRatingDisplay } from 'react-native-star-rating-widget';

const Pizzadetail = () => {
  const navigation = useNavigation(); // Initialize navigation

  // Function to handle navigation when "Go Back" button is pressed
  const handleGoBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Featured Recipe Container */}
        <View style={styles.featuredRecipeContainer}>
          <Image source={require('../assets/pizza.png')} style={styles.featuredRecipeImage} />
        </View>

        {/* Ingredients */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <Text style={styles.sectionContent}>
            - Pizza dough{'\n'}
            - Pizza sauce{'\n'}
            - Shredded mozzarella cheese or cheese blend{'\n'}
            - Toppings of your choice (pepperoni, vegetables, cooked meats, herbs, etc.){'\n'}
          </Text>
        </View>

        {/* Instructions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          <Text style={styles.sectionContent}>
            1. Preheat your oven to the highest temperature setting, typically around 475°F to 500°F (245°C to 260°C), with a pizza stone or baking sheet inside.{'\n'}
            2. Roll out your pizza dough on a lightly floured surface to your desired thickness.{'\n'}
            3. Transfer the rolled-out dough to a pizza peel or lightly floured surface for topping.{'\n'}
            4. Spread your favorite pizza sauce evenly over the dough, leaving a small border around the edges.{'\n'}
            5. Add shredded mozzarella cheese or your favorite cheese blend on top of the sauce.{'\n'}
            6. Add your desired toppings such as pepperoni, sliced vegetables, cooked meats, or herbs.{'\n'}
            7. Carefully transfer the topped pizza onto the preheated pizza stone or baking sheet in the oven.{'\n'}
            8. Bake the pizza for 10-15 minutes or until the crust is golden brown and the cheese is bubbly and melted.{'\n'}
            9. Remove the pizza from the oven and let it cool for a few minutes before slicing and serving.
          </Text>
        </View>

        {/* Rating */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Rating</Text>
          <StarRatingDisplay rating={4.5} starStyle={styles.star} />
        </View>
      </ScrollView>

      {/* Button at the bottom */}
      <TouchableOpacity style={styles.buttonContainer} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  featuredRecipeContainer: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  featuredRecipeImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
  },
  star: {
    width: 20,
    height: 25,
    marginRight: 1,
  },
  buttonContainer: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Pizzadetail;

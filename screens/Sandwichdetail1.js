import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { StarRatingDisplay } from 'react-native-star-rating-widget';

const Sandwichdetail = () => {
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
          <Image source={require('../assets/sandwich.png')} style={styles.featuredRecipeImage} />
        </View>

        {/* Ingredients */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <Text style={styles.sectionContent}>
            - Bread slices{'\n'}
            - Your choice of protein (such as sliced turkey, ham, chicken, roast beef, or tofu for a vegetarian option){'\n'}
            - Cheese slices (such as cheddar, Swiss, provolone, or mozzarella){'\n'}
            - Lettuce leaves{'\n'}
            - Sliced tomatoes{'\n'}
            - Sliced onions{'\n'}
            - Condiments (such as mayonnaise, mustard, or pesto){'\n'}
            - Optional additions (such as pickles, avocado, bacon, or sprouts){'\n'}
          </Text>
        </View>

        {/* Instructions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          <Text style={styles.sectionContent}>
            1. Lay out the bread slices on a clean surface.{'\n'}
            2. Spread condiments (mayonnaise, mustard, pesto, etc.) on one or both slices of bread, as desired.{'\n'}
            3. Layer the lettuce leaves on one slice of bread, followed by slices of cheese, your choice of protein, sliced tomatoes, sliced onions, and any other optional additions.{'\n'}
            4. Top with the other slice of bread to form a sandwich.{'\n'}
            5. If desired, you can grill the sandwich on a panini press or in a skillet over medium heat until the bread is golden brown and the cheese is melted, about 2-3 minutes per side.{'\n'}
            6. Alternatively, you can enjoy the sandwich cold or at room temperature.{'\n'}
            7. Slice the sandwich in half and serve immediately.
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

export default Sandwichdetail;

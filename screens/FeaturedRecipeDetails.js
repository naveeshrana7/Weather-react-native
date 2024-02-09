import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { StarRatingDisplay } from 'react-native-star-rating-widget';

const FeaturedRecipeDetails = () => {
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
          <Image source={require('../assets/noodles.png')} style={styles.featuredRecipeImage} />
        </View>

        {/* Ingredients */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <Text style={styles.sectionContent}>
            - Noodles{'\n'}
            - Water{'\n'}
            - Salt{'\n'}
            - Vegetables (optional){'\n'}
            - Soy Sauce (optional){'\n'}
          </Text>
        </View>

        {/* Instructions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          <Text style={styles.sectionContent}>
            1. Boil water in a pot.{'\n'}
            2. Add noodles and salt to the boiling water.{'\n'}
            3. Cook noodles until they are soft.{'\n'}
            4. Drain the water and rinse noodles with cold water.{'\n'}
            5. Serve noodles with vegetables and soy sauce if desired.
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

export default FeaturedRecipeDetails;

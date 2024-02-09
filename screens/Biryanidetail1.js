import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { StarRatingDisplay } from 'react-native-star-rating-widget';

const Biryanidetail = () => {
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
          <Image source={require('../assets/biryani.png')} style={styles.featuredRecipeImage} />
        </View>

        {/* Ingredients */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <Text style={styles.sectionContent}>
            - Basmati rice{'\n'}
            - Water{'\n'}
            - Salt{'\n'}
            - Chicken or lamb (optional){'\n'}
            - Yogurt (optional){'\n'}
            - Onions{'\n'}
            - Tomatoes{'\n'}
            - Ginger-garlic paste{'\n'}
            - Spices (cumin, coriander, turmeric, garam masala, etc.){'\n'}
            - Mint leaves{'\n'}
            - Cilantro (coriander leaves){'\n'}
            - Saffron (optional){'\n'}
            - Ghee or oil{'\n'}
          </Text>
        </View>

        {/* Instructions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          <Text style={styles.sectionContent}>
            1. Rinse the basmati rice under cold water until the water runs clear.{'\n'}
            2. Soak the rice in water for 30 minutes, then drain and set aside.{'\n'}
            3. Heat ghee or oil in a large pot.{'\n'}
            4. Add sliced onions and cook until golden brown.{'\n'}
            5. Add ginger-garlic paste and cook until fragrant.{'\n'}
            6. Add chopped tomatoes and cook until they soften.{'\n'}
            7. Stir in yogurt and spices (cumin, coriander, turmeric, garam masala, etc.) and cook for a few minutes.{'\n'}
            8. Add the chicken or lamb (if using) and cook until it's browned on all sides.{'\n'}
            9. Layer the soaked and drained rice over the meat and spices mixture.{'\n'}
            10. Sprinkle chopped mint leaves and cilantro (coriander leaves) on top.{'\n'}
            11. Dissolve saffron in warm milk and drizzle it over the rice (if using).{'\n'}
            12. Cover the pot with a tight-fitting lid and cook on low heat for 20-25 minutes, until the rice is cooked through and fluffy.{'\n'}
            13. Once done, gently fluff the biryani with a fork and serve hot.
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

export default Biryanidetail;

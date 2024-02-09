import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { StarRatingDisplay } from 'react-native-star-rating-widget';

const Dosadetail = () => {
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
          <Image source={require('../assets/dosa.png')} style={styles.featuredRecipeImage} />
        </View>

        {/* Ingredients */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <Text style={styles.sectionContent}>
            - Dosa batter (made from fermented rice and lentils){'\n'}
            - Oil or ghee for cooking{'\n'}
            - Salt (to taste){'\n'}
            - Optional ingredients for filling:
              * Chopped onions{'\n'}
              * Chopped green chilies{'\n'}
              * Chopped cilantro (coriander leaves){'\n'}
              * Grated coconut{'\n'}
              * Potato masala (for masala dosa){'\n'}
              * Paneer (Indian cottage cheese){'\n'}
              * Any other desired fillings or toppings{'\n'}
          </Text>

        </View>

        {/* Instructions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          <Text style={styles.sectionContent}>
            1. Heat a non-stick dosa pan or griddle over medium heat.{'\n'}
            2. Once the pan is hot, pour a ladleful of dosa batter onto the center of the pan.{'\n'}
            3. Using the back of the ladle, spread the batter in a circular motion to form a thin, even layer.{'\n'}
            4. Drizzle some oil or ghee around the edges of the dosa and on the top surface.{'\n'}
            5. Allow the dosa to cook until the edges start to lift up and the bottom turns golden brown and crispy.{'\n'}
            6. If adding any optional fillings, sprinkle them over the dosa at this point.{'\n'}
            7. Carefully flip the dosa using a spatula and cook for another minute or until the other side is cooked through and crispy.{'\n'}
            8. Transfer the dosa to a serving plate and repeat the process with the remaining batter.{'\n'}
            9. Serve hot dosas with your favorite chutney, sambar, or potato masala for masala dosa.
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

export default Dosadetail;

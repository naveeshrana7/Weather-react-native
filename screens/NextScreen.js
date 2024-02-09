import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import Icon from 'react-native-vector-icons/FontAwesome';
const FeaturedRecipe = () => {
  const navigation = useNavigation();

  const handleFeaturedRecipePress = () => {
    // Navigate to another screen with the featured recipe details
    navigation.navigate('FeaturedRecipeDetails');
  };

  return (
    <TouchableOpacity style={styles.featuredRecipeContainer} onPress={handleFeaturedRecipePress}>
      <Image source={require('../assets/noodles.png')} style={styles.featuredRecipeImage} />
      <Text style={styles.featuredRecipeText}>Noodles</Text>
    </TouchableOpacity>
  );
};


const FoodRecipeScreen = () => {
  const navigation = useNavigation();
  const [recipes, setRecipes] = useState([
    { id: 'Sandwich', name: 'Sandwich', image: require('../assets/sandwich.png'), rating: 4, ingredients: ['Bread', 'Cheese', 'Tomato', 'Lettuce', 'Mayonnaise'] },
    { id: 'Pizza', name: 'Pizza', image: require('../assets/pizza.png'), rating: 5, ingredients: ['Dough', 'Tomato Sauce', 'Cheese', 'Pepperoni', 'Mushrooms'] },
    { id: 'Dosa', name: 'Dosa', image: require('../assets/dosa.png'), rating: 3.5, ingredients: ['Rice Flour', 'Black Lentils', 'Salt'] },
    { id: 'Biryani', name: 'Biryani', image: require('../assets/biryani.png'), rating: 4.5, ingredients: ['Basmati Rice', 'Chicken', 'Onion', 'Yogurt', 'Spices'] },
  ]);

  const handleRecipePress = (recipeId) => {
    if (recipeId === 'Sandwich') {
      navigation.navigate('Sandwichdetail'); // Navigate to SandwichDetails screen
    } else if (recipeId === 'Pizza') {
      navigation.navigate('Pizzadetail'); // Navigate to PizzaDetails screen
    } else if (recipeId === 'Dosa'){
      navigation.navigate('Dosadetail');
    } else if (recipeId === 'Biryani'){
      navigation.navigate('Biryanidetail')
    } else {
      navigation.navigate('addindetail');
    }
  };
  
  const addDish = () => {
    const newDish = { id: `NewDish${recipes.length + 1}`, name: 'New Dish', image: require('../assets/emptyimg.png'), rating: 0, ingredients: [] };
    setRecipes([...recipes, newDish]);
  };

  const removeDish=() =>{
    if(recipes.length>0){
      const updatedRecipe=[...recipes];
      updatedRecipe.pop();
      setRecipes(updatedRecipe);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Recipes</Text>

      {/* Display featured recipe container */}
      <FeaturedRecipe />

      {/* Display recipe containers */}
      <ScrollView contentContainerStyle={styles.recipeContainer}>
        {recipes.map((recipe) => (
          <TouchableOpacity
            key={recipe.id}
            style={styles.recipe}
            onPress={() => handleRecipePress(recipe.id)}
          >
            <Image source={recipe.image} style={styles.recipeImage} />
            <Text style={styles.recipeName}>{recipe.name}</Text>
            <StarRatingDisplay rating={recipe.rating} starStyle={styles.star} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* Button to add a new dish */}
      <TouchableOpacity style={styles.addButton} onPress={addDish}>
        <Icon name="plus" size={30} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.removeButton} onPress={removeDish}>
        <Icon name="minus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, // Ensure content starts below status bar
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  featuredRecipeContainer: {
    marginBottom: 20,
    padding: 80,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'left',
  },
  featuredRecipeText: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  recipeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  recipe: {
    width: '48%', // Each container occupies around 48% of the parent width with some spacing
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  recipeImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  star: {
    width: 20,
    height: 25,
    marginRight: 1,
  },
  featuredRecipeImage: {
    width: '100%',
    height: 200, // Adjust the height as needed
    borderRadius: 8,
},
featuredRecipeContainer: {
  position: 'relative', // Set position to relative
  marginBottom: 20,
  borderRadius: 8,
  overflow: 'hidden', // Ensure the image stays within the container bounds
},
featuredRecipeText: {
  position: 'absolute',
  bottom: 10,
  left: 10,
  fontSize: 16,
  fontWeight: 'bold',
  color: 'white', // Adjust text color for visibility
  zIndex: 1, // Ensure text is above the image
},
addButton: {
  position: 'absolute',
  bottom: 20,
  right: 20,
  backgroundColor: 'blue',
  borderRadius: 50,
  width: 60,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
},
removeButton: {
  position: 'absolute',
  bottom: 20,
  left: 20,
  backgroundColor: 'red',
  borderRadius: 50,
  width: 60,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
},
});

export default FoodRecipeScreen;

import React from "react";
import {View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import { useNavigation } from "@react-navigation/native";


const addindetail =()=>{
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('');
    const [text1, onChangeText1] =React.useState('');
    const [number, onChangeNumber] = React.useState('');

    const handleGoBack = () =>{
        navigation.goBack();
    };
    
    return(
     <View style={styles.container}>
     <ScrollView>   
     <View style={styles.sectioncontainer}>
        <View>
        <Text style={styles.ingsectioncontainer}>Dish Name</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            />
        </View>
        <View>
        <Text style={styles.ingsection1container}>Dish Img URL</Text>
            <TextInput
            style={styles.input1}
            onChangeText={onChangeText}
            value={text}
            />
        </View>
        <View>
        <Text style={styles.ingsection2container}>Ingredients</Text>
            <TextInput
            style={styles.input2}
            onChangeText={onChangeText1}
            value={text1}
            />
        </View>
        <View>
        <Text style={styles.intcontainer}>Instructions</Text>
            <TextInput
            style={styles.input2}
            onChangeText={onChangeText1}
            value={text1}
            />
        </View>
        <View>
        <Text style={styles.ingsection1container}>Rating</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text1}
            />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
     </View>
     </ScrollView>
     </View>
    );
};

const styles= StyleSheet.create({
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    input1:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    input2 :{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        height: 200, // Adjust the height of the text input box
    },
    buttonContainer: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 8,
    },
    ingsectioncontainer:{
        fontSize:18,
        fontWeight:'bold',
    },
    sectioncontainer:{
        paddingTop:40,
    },
});

export default addindetail;
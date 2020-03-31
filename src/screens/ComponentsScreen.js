import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const introduction ="navid"; 
    //const greeting = <Text>Hello to you!</Text>
    //{greeting} only wherever wants to use
    return (
    <View>
    <Text style={styles.headerStyle}>Well, react native is doable</Text>
    <Text style={styles.subHeaderStyle}>My name is {introduction}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize:20
    },
    headerStyle: {
        fontSize:30
    },
    subHeaderStyle: {
        fontSize:15 
    }

})

export default ComponentsScreen;
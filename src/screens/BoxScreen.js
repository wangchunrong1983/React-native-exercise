import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { purple } from 'color-name';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle}></View>
            <View style={styles.textTwoStyle}></View>
            <View style={styles.textThreeStyle}></View>
        </View>

    )
}

const styles= StyleSheet.create({
    viewStyle: {
      
        flexDirection: "row",
        justifyContent: 'space-between',
        
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height:100,
        width:100,
        
    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height:100,
        width: 100,
        marginTop: 100
        
   
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 100,
        width:100,
      
        
    }
})



export default BoxScreen; 
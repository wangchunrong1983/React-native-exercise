import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Listscreen = () => {
    const friends = [
        {name:"friend#1", age: "20"},
        {name:"friend#2", age: "45"},
        {name:"friend#3", age: "50"},
        {name:"friend#4", age: "67"},
        {name:"friend#5", age: "96"},      
    ]
    return(
        <FlatList 
        keyExtractor={friend=>friend.name}
        data={friends} renderItem={({item}) => {
            return <Text style={styles.textStyle}>{item.name} - Age{item.age}</Text>
        }}
        />
    )
}

    // return(
    // <FlatList 
    // horizontal={true}
    // showsHorizontalScrollIndicator={false}
    // keyExtractor={friend => friend.name}
    // data={friends} renderItem ={({item}) => {
    // return <Text style={styles.textStyle}>{item.name}</Text>
    // }} 
    // />
    // )};

const styles = StyleSheet.create({
 textStyle: {
     marginVertical: 50
 }
});

export default Listscreen;
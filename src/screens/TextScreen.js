import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';



const TextScreen = () => {
    const [password, setPassword] = useState('')
    const passwordLength = 0 ;
    return (
      <View>
          <Text>Enter Password</Text>
          <TextInput style={styles.input} 
                     value={password}
                     onChangeText={newValue=>setPassword(newValue)}                
          />
          {password.length <= 5 ? <Text>Password must be more than 5 characters</Text> : null }
      </View>

    )
}

/* update name from input
const TextScreen = () => {
  const [name, setName] = useState('')

    return (
    <View>
        <Text>Enter Name: </Text>
        <TextInput style={styles.input} 
                // autoCapitalize='none'
                // autoCorrect={false}
                // value="hi there" (would show inside input column)
                   value={name}
                   onChangeText={(newValue) => setName(newValue) }
        />
        <Text>My name is {name} </Text>
      
    </View>
    )
}
*/


const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen; 
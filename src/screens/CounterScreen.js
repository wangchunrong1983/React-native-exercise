import React, {useReducer} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


const reducer = (state, action) => {
  // state: {count: number}
  // action : {type: 'increment' || 'decrement' , payload: 1}

  switch (action.type){
      case 'increment' :
          return { ...state, count: state.count + action.payload }
      case 'decrement' :
          return { ...state, count: state.count - action.payload }
      default:
          return state;
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count:0})

  return (
      <View>
          <Button title="Increase" onPress={()=>{dispatch({type:'increment', payload:1})}} />
          <Button title="Decrease" onPress={()=>{dispatch({type:'decrement', payload:1})}} />
          <Text>Current Count: {state.count}</Text>
      </View>
  )
}



// const CounterScreen = () => {
//     const [counter, setCounter] = useState(0)
    
//     return (
//         <View>
//             <Button title="Increase" onPress={()=> {setCounter(counter + 1)}} />
//             <Button title="Decrese" onPress={()=> {setCounter(counter - 1)}} />
//             <Text>Current Count:{counter}</Text>
//         </View>
//     )}



const styles= StyleSheet.create({})

export default CounterScreen; 
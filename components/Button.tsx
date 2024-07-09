import { View, Text, TouchableOpacity , StyleSheet} from 'react-native'
import React from 'react'



interface Props{
    title: string,
    onPress?: any,
    customStyle?: any,
    customStyleText?:any
   
}
const Button = ({title,onPress, customStyle, customStyleText}:Props) => {
    
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, customStyle]}>
      <View>
        <Text style={[styles.buttonText, customStyleText]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius:10,
    // height: 50,
    borderWidth: 0,
    width: '100%',
    backgroundColor: '#FFC400',
    marginBottom: 15
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 
});
export default Button
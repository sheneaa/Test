import React, { useState,useRef } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialIcons  } from '@expo/vector-icons';
import PhoneInput from 'react-native-phone-number-input';
import { useTranslation } from 'react-i18next';
import '@/i18n';

interface props{
  onChangeText : any
}
const PhoneNumberInput = ({onChangeText}:props) => {

  const [phoneNumber, setPhoneNumber] = useState('');

  const { t, i18n } = useTranslation();

  
  
  return (
      <PhoneInput
       
       defaultValue={t('Phone Number')}
       defaultCode='CM'
       layout='first'
       onChangeFormattedText={text =>{setPhoneNumber(text);}}
       containerStyle={styles.PhoneInput}
       textContainerStyle={styles.text}
       onChangeText={onChangeText}
       
      />
       
      
    
  );
};

const styles = StyleSheet.create({
  PhoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
   // borderWidth: 1,
    borderColor: '#F6F5FD',
    borderRadius: 10,
    padding:2.5,
    margin : 10,
    width :"95%",
    backgroundColor :'#F6F5FD',  
  },
  text:{
    height:'100%',
    backgroundColor :'#F6F5FD',
    justifyContent:'center',
    
  },

});

export default PhoneNumberInput;
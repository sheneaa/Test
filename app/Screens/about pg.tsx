import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from "react-native";
import { Entypo, Ionicons, MaterialIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Button from '@/components/Button';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import { TranslationKeys } from '@/i18n/types';

const About = () => {
  const { t } = useTranslation();

  const greet = (key: TranslationKeys) => t(key);
  
  return(
    <View style={styles.container}>

      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 16}}> {greet('Privacy policy')}</Text>
        <FontAwesome name="angle-right" size={20} color="black" style={{marginLeft: 170}}></FontAwesome>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 16}}>{greet('License agreement')}  </Text>
        <FontAwesome name="angle-right" size={20} color="black" style={{}}></FontAwesome>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  button: {
    width: '90%',
    height: '10%',
    padding: '5%',
    marginTop: '4%',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between'
  },
});

export default About;
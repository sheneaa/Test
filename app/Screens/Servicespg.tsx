import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import { TranslationKeys } from '@/i18n/types';

const CustomerServiceScreen = () => {
  const navigation = useNavigation();
  const [ownerNumber] = useState('+237 698523831');

  const handleServiceClient = () => {
    Alert.alert(
      "Customer service",
      `Calling line: ${ownerNumber}`,
      [
        { text: "Cancle", style: "cancel" },
        { text: "Call", onPress: () => Linking.openURL(`tel:${ownerNumber}`) }
      ]
    );
  };

  const handleUrgence = () => {
    navigation.navigate('UrgenceMessaging'); // Replace 'Messenger' with your actual messenger screen name
  };
  const { t } = useTranslation();

  const greet = (key: TranslationKeys) => t(key);


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/croopt.png')} 
          style={styles.image}
        />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleServiceClient}>
        <Text style={styles.buttonText}>{greet('customer service')}</Text>
        <Text style={styles.iconText}>📞</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={handleUrgence}>
        <Text style={styles.buttonText}> {greet('Emergency situation')}</Text>
        <Text style={styles.iconText}>💬</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.quitButton}>
        <Text style={styles.quitButtonText}> {greet('Leave')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
  iconText: {
    fontSize: 20,
  },
  quitButton: {
    backgroundColor: '#FFC400',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  quitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomerServiceScreen;
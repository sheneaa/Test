import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from "react-native";
import { Entypo, Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import { TranslationKeys } from '@/i18n/types';

const Settings = ({ navigation }: any) => {

  
  const { t } = useTranslation();

  const greet = (key: TranslationKeys) => t(key);
  const handlelogout = async () => {
   
   
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("profile")}>
          <MaterialIcons name="account-circle" size={30} color="#FFC400" />
          <Text style={styles.textsettings}>{greet('My Account')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("info")}>
          <Ionicons name="information-circle" size={30} color="#FFC400" />
          <Text style={styles.textsettings}>{greet('Informations')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Language")}>
          <MaterialIcons name="translate" size={30} color="#FFC400" />
          <Text style={styles.textsettings}>{greet('App language')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("notif")}>
          <Ionicons name="notifications" size={30} color="#FFC400" />
          <Text style={styles.textsettings}>{greet('Notification')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Service")}>
          <Entypo name="help-with-circle" size={30} color="#FFC400" />
          <Text style={styles.textsettings}>{greet('Help')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("About")}>
          <MaterialIcons name="security" size={30} color="#FFC400" />
          <Text style={styles.textsettings}>{greet('About us')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footer} onPress={handlelogout}>
          <MaterialIcons name="logout" size={30} color="red"></MaterialIcons>
          <Text style={{ fontSize: 15, padding: 10, color: "black", }}>{greet('Disconnect')} </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    gap: 15,
    //backgroundColor: "white",
    // padding: 1%,
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 5,
    height: '12%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    gap: 10,
    top: 10,

  },
  textsettings: {
    fontSize: 18,
    color: "black",
    width: '80%',

  },
  footer: {
    flexDirection: 'row',
    padding: 15,
    width: '50%',
    gap: 15,
    alignItems: 'center',

  },
});

export default Settings; 
import React, { useRef, useState, useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, TextInput, StyleSheet, TouchableOpacity, ScrollView, Keyboard, TouchableWithoutFeedback, Modal, Dimensions, Text, Pressable, ImageSourcePropType } from 'react-native';
import Button from '@/components/Button';
import ResetPassword from '@/components/ResetPassword';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import PhoneInput from 'react-native-phone-number-input';
import ImageViewer from '@/components/ImageViewer';
import format from 'date-fns/format';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import app from './index';
import { AntDesign } from '@expo/vector-icons';
//import {RootStackParamList} from "./navigation/settingnavi";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { Image } from 'expo-image';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import { TranslationKeys } from '@/i18n/types'; const { t } = useTranslation();
import newpwd from './Screens/newpwd';
import Password from './Screens/current pwd';
import profilClient from './profilClient';
import setting from "@/app/Screens/setting pg";
import notif from '@/app/Screens/notif pg';
import About from '@/app/Screens/about pg';
import info from '@/app/Screens/App info';
import Service from '@/app/Screens/Servicespg';
import Language from '@/app/Screens/Language';


export type RootStackParamList = {
  profile: undefined;
  password: undefined;
  newpwd: undefined;
  setting: undefined;
  notif: undefined;
  help: undefined;
  info: undefined;
  Service: undefined
  Language: undefined
  About: undefined

  // Ajoutez d'autres routes ici
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  type propsNavigation = StackNavigationProp<RootStackParamList, 'password'>
  const navigation = useNavigation<propsNavigation>



  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const insets = useSafeAreaInsets();

  const { t } = useTranslation();


  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator >
        <Stack.Screen name='setting' component={setting} />
        <Stack.Screen name='password' component={Password} />
        <Stack.Screen name="profile" component={profilClient} />
        <Stack.Screen name='newpwd' component={newpwd} />
        <Stack.Screen name='notif' component={notif} />
        <Stack.Screen name='About' component={About} />
        <Stack.Screen name='info' component={info} />
        <Stack.Screen name='Service' component={Service} />
        <Stack.Screen name='Language' component={Language} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


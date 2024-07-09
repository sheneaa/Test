import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';
import '@/i18n';
import { TranslationKeys } from '@/i18n/types'; const { t } = useTranslation();
import profilClient from "@/app/profilClient";
import Password from "@/app/Screens/current pwd";
import newpwd from "@/app/Screens/newpwd";
import setting from "@/app/Screens/setting pg";
import notif from '@/app/Screens/notif pg';
import help from '@/app/Screens/about pg';
import info from '@/app/Screens/App info';
import Service from '@/app/Screens/Servicespg';
import Language from '@/app/Screens/Language';

export type RootStackParamList = {
  profile: undefined;
  password: undefined;
  newpwd: undefined;
  setting: undefined
  notif: undefined;
  help: undefined;
  info: undefined;
  Service: undefined;
  Language: undefined
  // Ajoutez d'autres routes ici
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const navigation = () => {


  const { t, i18n } = useTranslation();

  // };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='setting' component={setting} options={{ title: t('setting') }} />
        <Stack.Screen name='password' component={Password} />
        <Stack.Screen name="profile" component={profilClient} />
        <Stack.Screen name='newpwd' component={newpwd} />
        <Stack.Screen name='notif' component={notif} />
        <Stack.Screen name='help' component={help} />
        <Stack.Screen name='info' component={info} />
        <Stack.Screen name='Service' component={Service} />
        <Stack.Screen name='Language' component={Language} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default navigation
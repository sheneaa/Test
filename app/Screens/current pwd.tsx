import React, { useRef, useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity, TextInput } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import { TranslationKeys } from '@/i18n/types';const { t } = useTranslation();


type RootStackParamList = {
  password: undefined;
  create: undefined;
  Mdp: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'password'>;

const validationSchema = z.object({
  password: z.string().min(6, 'Require at least 6 characters'),
});
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

type FormData = z.infer<typeof validationSchema>;

function Password({ navigation }: any) {
  const { handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigation.navigate('newpwd');
  };
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const greet = (key: TranslationKeys) => t(key);

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/verification.png")}
            style={styles.imageContainer}
          />
          {/* <ImageBackground src={require('../assets/images/splash.png')} width={100} height={100}/> */}
        </View>

        <View style={styles.enterPassword}>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder= {greet('Enter current password')}
                value={value}
                onChangeText={onChange}
                secureTextEntry={!showPassword}
                style={{ height: '100%', width: '100%' }}
              />
            )}
          />
          <Icon
            name={showPassword ? 'eye-slash' : 'eye'}
            size={20}
            color="gray"
            style={styles.eyeIcon}
            onPress={handleTogglePasswordVisibility}
          />
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

        <TouchableOpacity style={styles.forgotPassword} >
          <Text style={{ color: '#FFC400', fontSize: 15, }}> {greet('forgot password ?')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.next} onPress={handleSubmit(onSubmit)} >
          <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}> {greet('Next')}</Text>
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
  },
  imageContainer: {
    height: '50%',
    width: '100%',
    //backgroundColor: 'red',
  },
  enterPassword: {
    width: '95%',
    height: '10%',
    padding: '3%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#FFC400',
    borderRadius: 10
  },
  forgotPassword: {
    height: '6%',
    width: '40%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red'
  },
  next: {
    height: '10%',
    width: '90%',
    borderWidth: 0,
    alignItems: 'center',
    backgroundColor: '#FFC400',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '15%',
    borderRadius: 10,
  },
  errorText: {
    color: "red",
    marginLeft: '4%'
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
});

export default Password;
import React, { useRef, useState, useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, Keyboard, TouchableWithoutFeedback, Modal, Dimensions, Text, Pressable, ImageSourcePropType, ImageBackground } from 'react-native';
import Button from '@/components/Button';
import ResetPassword from '@/components/ResetPassword';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import PhoneInput from 'react-native-phone-number-input';
import ImageViewer from '@/components/ImageViewer';
import * as MediaLibrary from "expo-media-library";
import format from 'date-fns/format';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import app from './index';
import { AntDesign } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import PhoneNumberInput from "../components/PhoneNumberInput";
import ImageViewers from '@/components/ImageViewer';
import { useTranslation } from 'react-i18next';
import '@/i18n';

export default function App({ navigation} : any) {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [date, setDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [statuss, setStatus] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  //const [selectedCountry, setSelectedCountry] = useState(null);
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);


  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef(null);



  const placeholderImage = require("../assets/images/croopt.png")

  const sourcePhone = selectedImage ? { uri: selectedImage } : placeholderImage

  // const navigation = useNavigation();
  const Stack = createStackNavigator();
  const handlePhoneNumberChange = (newPhoneNumber: any) => {
    setPhoneNumber(newPhoneNumber);
  }

  const validationSchema = z.object({
    phone: z.string().min(9, 'The number most respect the 9 figures format').max(9, 'The number most respect the 9 figures format'),

  });

  type FormData = z.infer<typeof validationSchema>;
  const { handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const insets = useSafeAreaInsets();
  const handlePress = () => {
    console.log('Button pressed!');
    navigation.navigate('password')
  };
  const handleRegister = () => {
    // Here you can implement your registration logic
    console.log('Registration details:', { name, surname, date, phoneNumber, status, password });
  };
  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate  = selectedDate || date;
    setShowPicker(false);
    setIsVisible(false)
    setDate(currentDate);
  }
  const handleVisible = () => {
    setIsVisible(true)
  }

  const handleDismiss = () => {
    setIsVisible(false)
  }

  // image
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  if (status === null) {
    requestPermission();
  }

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const { t, i18n } = useTranslation();

  return (
    // <SafeAreaView style={{flex: 1}}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
        <View >
          <View style={styles.photo} ref={imageRef} collapsable={false}  >


            <ImageViewers
              placeholderImageSource={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" }}
              selectedImage={selectedImage}
            />

            <AntDesign
              name="pluscircle"
              size={30}
              color="#FFC400"
              onPress={pickImageAsync}
              style={{ right: '14%', top: '10%' }}
            />
          </View>
          <Image source={placeholderImage} style={styles.photo} />
        </View>

        <View style={styles.row}>
          <View style={[styles.input, styles.Background, styles.halfWidth]}>
          <Text>{t('name')}</Text>
          </View>

          <View style={[styles.input, styles.Background, styles.halfWidth]}>
          <Text>{t('Surname')}</Text>
          </View>

        </View >
        <View style={{ borderColor: '#111', marginBottom: 16, padding: 16, borderRadius: 10, backgroundColor: '#F6F5FD', width: "100%" }}>
          <Pressable onPress={() => handleVisible()}>
          <Text>{date ? format(date, 'dd/MM/yyyy') : t('dateOfBirth')}</Text>
            {isVisible && (
              <DateTimePicker mode="date" value={date || new Date()} display="default" onChange={handleDateChange} disabled={isVisible} />
            )}
          </Pressable>
        </View>

        <View>
          <Controller name="phone"
            control={control}
            // rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <PhoneNumberInput onChangeText={onChange} />
            )}
          />
          {errors.phone && <Text style={{ color: "red" }}>{errors.phone.message}</Text>}
        </View>

          <View  style={[styles.input, styles.Background]}>
          <Text>{t('Status')}</Text>
          </View>

        <TouchableOpacity onPress={handlePress} style={styles.passwordInput}>
          <Text style={{ width: '93%', color: 'black' }}>{t('password')}</Text>
          <AntDesign
            name='right'
            size={20}
            color="gray"
            style={{}}
          />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    width: "100%",
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#F6F5FD',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#F6F5FD',
    justifyContent: 'center',
  },
  Background: {
    backgroundColor: '#F6F5FD' //  background color
  },
  halfWidth: {
    width: '48%', // Adjust as needed
  },
  passwordInput: {
    width: '100%',
    height: '10%',
    borderColor: '#F6F5FD',
    //justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#F6F5FD',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    paddingVertical: 15,
  },
  phoneInputContainer: {
    borderColor: '#F6F5FD',
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    // backgroundColor: '#F6F5FD',
  },
  // header2: {
  //   width: "100%",
  //   height: "15%",
  //  resizeMode: 'cover',
  //   backgroundColor: "red",
  // },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    //backgroundColor: "grey",
    marginTop: "-45%",
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    objectFit: "cover",

  },

  // userName: {
  //     fontSize: 10,
  //     fontWeight: "black",
  //     marginBottom: 5,
  // },
  // userStatus: {
  //     color: "#777",
  // },
  // optionsContainer: {
  //     marginTop: 20,
  //     paddingHorizontal: 20,
  // },
  // option: {
  //     paddingVertical: 15,
  //     backgroundColor: "#fff",
  //     borderRadius: 8,
  //     marginBottom: 10,
  // },
  // optionText: {
  //     fontSize: 16,
  //     color: "#333",
  // },
  // modalContainer: {
  //   flex: 1,
  //   margin: "10%",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "black",
  //   position: "relative",
  //   width: "-50%",
  //   borderRadius: 10,
  // },
  // imagePreviewContainer: {
  //   width: "100%",
  //   height: "100%",
  //   borderRadius: 100,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginBottom: 20,
  // },
  // imagePreview: {
  //   width: "100%",
  //   height: 100,
  //   resizeMode: "contain",
  // },
  // cameraIcon: {
  //   position: "absolute",
  //   top: 105,
  //   left: 130,
  //   backgroundColor: "rgba(0, 0, 0, 0.5)",
  //   padding: 5,
  //   borderRadius: 50,
  // },
  // modalButtons: {
  //   flexDirection: "column",
  //   justifyContent: 'flex-end',
  //   alignItems: "center",
  //   width: "80%",
  //   position: 'absolute'
  // },
  button: {
    backgroundColor: 'black',
    marginBottom: 5,
    width: '50%'
  },
  textButton: {
    fontSize: 12,
  },

});

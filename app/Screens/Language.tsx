import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TranslationKeys } from '@/i18n/types';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const change = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();

  const greet = (key: TranslationKeys) => t(key);

  // console.log('test');
  return (
    <View>
      
      <Button title={greet('english')} onPress={() => change('en')} />
      <Button title={greet('french')} onPress={() => change('fr')} />
    </View>
  );
};

export default LanguageSwitcher;
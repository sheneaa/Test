import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const change = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View>
      <Button title="EN" onPress={() => change('en')} />
      <Button title="FR" onPress={() => change('fr')} />
    </View>
  );
};

export default LanguageSwitcher;
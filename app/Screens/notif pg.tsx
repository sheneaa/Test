import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import { TranslationKeys } from '@/i18n/types';
//import { Switch } from '@react-native-community/switch';


const NotificationSettings = () => {
  const { t } = useTranslation();

  const greet = (key: TranslationKeys) => t(key);
 
  const [isHighPriorityEnabled, setIsHighPriorityEnabled] = useState(false);
  const [isReactionEnabled, setIsReactionEnabled] = useState(false);

  
  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <View>
          <Text style={styles.settingTitle}> {greet('Notifications of messages')} </Text>
          <Text style={styles.settingDescription}>
          {greet('play sound of incoming notifications')}
          </Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#4CAF50" }}
          thumbColor={isHighPriorityEnabled ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsHighPriorityEnabled(previousState => !previousState)}
          value={isHighPriorityEnabled}
        />
      </View>

      <View style={styles.settingItem}>
        <View>
          <Text style={styles.settingTitle}> {greet('Notification tones')}</Text>
          <Text style={styles.settingDescription}>
          {greet('Show notifications for alert')} 
          </Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#4CAF50" }}
          thumbColor={isReactionEnabled ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsReactionEnabled(previousState => !previousState)}
          value={isReactionEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    height: '10%',
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingDescription: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
});

export default NotificationSettings;
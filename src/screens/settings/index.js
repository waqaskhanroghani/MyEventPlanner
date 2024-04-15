import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';

export default function Settings({navigation}) {
  const [themeSwitch, setThemeSwitch] = useState(false);
  const [notificationSwitch, setNotificationSwitch] = useState(true);

  // Function to handle theme toggle
  const toggleTheme = () => {
    setThemeSwitch(previousState => !previousState);
  };

  // Function to handle notification toggle
  const toggleNotification = () => {
    setNotificationSwitch(previousState => !previousState);
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../Assets/images/bg4.png')}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Settings</Text>
        {/* Change Theme Setting */}
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Dark Theme</Text>
          <Switch
            trackColor={{false: colors.lightGray, true: colors.secondary}}
            thumbColor={colors.white}
            ios_backgroundColor={colors.lightGray}
            onValueChange={toggleTheme}
            value={themeSwitch}
          />
        </View>
        {/* Notification Settings */}
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Notifications</Text>
          <Switch
            trackColor={{false: colors.lightGray, true: colors.secondary}}
            thumbColor={colors.white}
            ios_backgroundColor={colors.lightGray}
            onValueChange={toggleNotification}
            value={notificationSwitch}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  settingText: {
    color: 'white',
    fontSize: 18,
  },
});

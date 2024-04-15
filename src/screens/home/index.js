import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import colors from '../../config/colors';
import Routes from '../../navigation/Routes';

export default function Home({navigation}) {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../Assets/images/bg3.png')}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome To My Event Planner</Text>
        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate(Routes.CREATEEVENT)}>
            Create Event
          </Button>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate(Routes.ALLEVENTS)}>
            View All Events
          </Button>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate(Routes.SETTINGS)}>
            Settings
          </Button>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate(Routes.PROFILE)}>
            Profile
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    width: windowWidth * 0.8,
    marginTop: 20,
  },
  button: {
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: colors.primary,
    width: '100%',
  },
  welcomeText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

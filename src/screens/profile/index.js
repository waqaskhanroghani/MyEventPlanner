import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';

export default function Profile({navigation}) {
  // Dummy user data
  const user = {
    username: 'JohnDoe',
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    profilePic: require('../../Assets/images/bg2.png'),
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
        <View style={styles.profileContainer}>
          <Image source={user.profilePic} style={styles.profilePic} />
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.fullName}>{user.fullName}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
        {/* Add other profile details here */}
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
  profileContainer: {
    alignItems: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  username: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fullName: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5,
  },
  email: {
    color: 'white',
    fontSize: 16,
  },
});

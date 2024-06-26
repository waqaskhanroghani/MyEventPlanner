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
    username: 'username',
    fullName: 'username',
    email: 'username@example.com',
    profilePic: require('../../Assets/images/bg2.png'),
    bio: 'username dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget libero convallis, et iaculis mauris sollicitudin. Proin pharetra, nulla non facilisis dignissim.',
  };

  // Function to handle edit profile action
  const handleEditProfile = () => {
    // Navigate to edit profile screen
    // You can implement your navigation logic here
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
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
          {/* Edit Profile Button */}
          <TouchableOpacity
            style={styles.editButton}
            onPress={handleEditProfile}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
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
  profileContainer: {
    alignItems: 'center',
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
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
    marginBottom: 10,
  },
  bio: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

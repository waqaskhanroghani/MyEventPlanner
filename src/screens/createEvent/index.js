import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons from react-native-vector-icons
import colors from '../../config/colors';

export default function CreateEvent({navigation}) {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateEvent = () => {
    // Basic form validation
    if (!eventName || !date || !time || !location) {
      alert('Please fill in all required fields.');
      return;
    }

    // Proceed with creating the event
    // You can add your logic here
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
        <Text style={styles.title}>Create Event</Text>
        {/* Event Name */}
        <TextInput
          style={styles.input}
          placeholder="Event Name"
          value={eventName}
          onChangeText={text => setEventName(text)}
        />
        {/* Date */}
        <TextInput
          style={styles.input}
          placeholder="Date"
          value={date}
          onChangeText={text => setDate(text)}
        />
        {/* Time */}
        <TextInput
          style={styles.input}
          placeholder="Time"
          value={time}
          onChangeText={text => setTime(text)}
        />
        {/* Location */}
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={text => setLocation(text)}
        />
        {/* Description */}
        <TextInput
          style={[styles.input, {height: 100, textAlignVertical: 'top'}]}
          placeholder="Description"
          multiline
          value={description}
          onChangeText={text => setDescription(text)}
        />
        {/* Create Event Button */}
        <TouchableOpacity style={styles.button} onPress={handleCreateEvent}>
          <Text style={styles.buttonText}>Create Event</Text>
        </TouchableOpacity>
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
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '80%',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 11,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    // color: colors.primary,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useEventContext} from '../../context/EventContext';
import colors from '../../config/colors';

export default function AllEvents({navigation}) {
  const {events, deleteEvent} = useEventContext();

  // Render individual event item
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon name="calendar" size={24} color="white" style={styles.icon} />
      </View>
      <View style={styles.eventDetails}>
        <Text style={styles.eventName}>{item.eventName}</Text>
        <Text style={styles.eventDetail}>Date: {item.date}</Text>
        <Text style={styles.eventDetail}>Time: {item.time}</Text>
        <Text style={styles.eventDetail}>Location: {item.location}</Text>
        <Text style={styles.eventDetail}>Description: {item.description}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteEvent(item.id)}>
        <Icon name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  // Handle delete event
  const handleDeleteEvent = eventId => {
    deleteEvent(eventId);
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
        <Text style={styles.title}>All Events</Text>
        {/* FlatList to render events */}
        <FlatList
          data={events}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.eventList}
        />
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
    flex: 1,
    width: '80%',
    paddingTop: 50,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 25,
    padding: 10,
    marginRight: 15,
  },
  icon: {
    color: 'white',
  },
  eventDetails: {
    flex: 1,
  },
  eventName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventDetail: {
    color: 'white',
    fontSize: 16,
    marginBottom: 3,
  },
  deleteButton: {
    marginLeft: 10,
  },
  eventList: {
    paddingBottom: 20,
  },
});

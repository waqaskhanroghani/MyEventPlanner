import React, {createContext, useContext, useState, useEffect} from 'react';

// Create a new context
const EventContext = createContext();

// Custom hook to use the event context
export const useEventContext = () => useContext(EventContext);

// Event provider component
export const EventProvider = ({children}) => {
  const [events, setEvents] = useState([]);

  // Load events from storage on component mount
  useEffect(() => {
    loadEventsFromStorage();
  }, []);

  // Save events to storage whenever the events state changes
  useEffect(() => {
    saveEventsToStorage();
  }, [events]);

  // Function to load events from storage
  const loadEventsFromStorage = async () => {
    try {
      const savedEvents = await AsyncStorage.getItem('events');
      if (savedEvents !== null) {
        setEvents(JSON.parse(savedEvents));
      }
    } catch (error) {
      console.error('Error loading events from storage:', error);
    }
  };

  // Function to save events to storage
  const saveEventsToStorage = async () => {
    try {
      await AsyncStorage.setItem('events', JSON.stringify(events));
    } catch (error) {
      console.error('Error saving events to storage:', error);
    }
  };

  // Function to add a new event
  const addEvent = newEvent => {
    setEvents([...events, newEvent]);
  };

  // Function to delete an event
  const deleteEvent = eventId => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  // Context value
  const value = {
    events,
    addEvent,
    deleteEvent,
  };

  // Provide the context value to its children
  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};

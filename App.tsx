import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import TabNavigation from './src/navigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './src/navigation/Routes';
import {EventProvider} from './src/context/EventContext';

import Home from './src/screens/home';
import CreateEvent from './src/screens/createEvent';
import AllEvents from './src/screens/AllEvents';
import Settings from './src/screens/settings';
import Profile from './src/screens/profile';
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <PaperProvider>
          <EventProvider>
            <Stack.Navigator>
              <Stack.Screen
                name={Routes.TABNAVIGATOR}
                component={Home}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={Routes.CREATEEVENT}
                component={CreateEvent}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={Routes.ALLEVENTS}
                component={AllEvents}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={Routes.SETTINGS}
                component={Settings}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={Routes.PROFILE}
                component={Profile}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </EventProvider>
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

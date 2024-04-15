import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import CardExchange from './src/screens/CardExchange';
import Onboarding from './src/screens/Onboarding';
import Wallet from './src/screens/Wallet';
import TabNavigation from './src/navigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './src/navigation/Routes';
import {ExpenseProvider} from './src/context/ExpenseContext';
import Home from './src/screens/home';
import CreateEvent from './src/screens/createEvent';
import AllEvents from './src/screens/AllEvents';
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <PaperProvider>
          <ExpenseProvider>
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
            </Stack.Navigator>
          </ExpenseProvider>
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

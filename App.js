import 'react-native-gesture-handler'
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './components/LoginForm';
import LoginRegister from './components/LoginRegister';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterForm from './components/RegisterForm';
import NewAccountForm from './components/NewAccountForm';
import Home from './components/Home';
import FoodLog from './components/FoodLog';
import Tabs from './components/Tabs';
import Profile from './components/Profile';
import FoodList from './components/FoodList';
import RecipeList from './components/RecipeList';
import FoodForm from './components/FoodForm';
import LogForm from './components/LogForm';


const Stack = createStackNavigator();


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Easy Macros"
          component={LoginRegister}
          options={{
            title: "Menu M8",
            headerStyle: {
              backgroundColor: 'grey',
              height: 80
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
              textAlign: 'center'
            },
          }} /> */}

        {/* <Stack.Screen name="Login" component={LoginForm}
          options={{
            headerStyle: {
              backgroundColor: 'indigo',
              height: 120
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 35,
              textAlign: 'center'
            }
          }} */}

        {/* /> */}
        {/* <Stack.Screen name="Register" component={RegisterForm}
          options={{
            headerStyle: {
              backgroundColor: 'indigo',
              height: 120
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 35,
              textAlign: 'center'
            }
          }}
        />
        <Stack.Screen name="NewAccountForm" component={NewAccountForm}

          options={{
            title: "Basic info",
            headerStyle: {
              backgroundColor: 'indigo',
              height: 120
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 35,
              textAlign: 'center'
            }
          }}
        /> */}

        {/* <Stack.Screen name="Home" component={Home}
          options={{
            title: "Menu M8",
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: 'grey',
              height: 80
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 35,
              textAlign: 'center'
            }
          }}
        /> */}

        {/* <Stack.Screen name="FoodLog" component={FoodLog}
          options={{
            title: "Easy Macros",
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: 'indigo',
              height: 120
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 35,
              textAlign: 'center'
            }
          }}
        /> */}
        <Stack.Screen name="Tabs" component={Tabs}
          options={{
            headerTitleAlign: 'center',
            title: "Menu M8",
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: 'grey',
              height: 80,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
              textAlign: 'center'
            }
          }}
        />
        <Stack.Screen name="Profile" component={Profile}
          options={{
            title: "Easy Macros",
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: 'indigo',
              height: 120
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 35,
              textAlign: 'center'
            }
          }}
        />
        <Stack.Screen name="FoodList" component={FoodList}
          options={{
            title: "Foods",
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: 'indigo',
              height: 120
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 35,
              textAlign: 'center'
            }
          }}
        />
        <Stack.Screen name="RecipeList" component={RecipeList}
          options={{
            title: "Recipes",
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: 'indigo',
              height: 120
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 35,
              textAlign: 'center'
            }
          }}
        />

        <Stack.Screen name="FoodForm" component={FoodForm}
          options={{
            title: "Add Food",
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: 'indigo',
              height: 120
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 35,
              textAlign: 'center'
            }
          }}
        />

<Stack.Screen name="LogForm" component={LogForm}
          options={{
            title: "Log Food",
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: 'indigo',
              height: 120
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 35,
              textAlign: 'center'
            }
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )

};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "purple"
  }
})

export default App;
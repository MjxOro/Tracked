import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'tamagui';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

export default function App() {
  const Stack = createNativeStackNavigator();
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: '',
          headerBackTitle: 'Back',
          headerTransparent: true,
          headerTintColor: theme.color.val
        }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

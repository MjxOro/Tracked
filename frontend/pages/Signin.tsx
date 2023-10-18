import { Text, YStack } from 'tamagui';
import Inputbox from '../components/Inputbox';
import MainButton from '../components/MainButton';
import GoogleButton from '../components/GoogleButton';
import Logo from '../components/Logo';
import YStackWrapper from '../components/YStackWrapper';

export default function Signin() {
  return (
    <YStackWrapper justifyContent="space-evenly" alignItems="center">
      <YStack width="100%" alignItems="center">
        <Text my="$8" fontSize="$10">
          Sign In
        </Text>
        <Logo />
      </YStack>
      <YStack width="75%" justifyContent="center" alignItems="center">
        <Inputbox placeholder="Email" width="100%" />
        <Inputbox placeholder="Password" secureTextEntry width="100%" />
      </YStack>
      <MainButton>Login</MainButton>
      <YStack width='' justifyContent="center" alignItems="center">
        <Text my="$4">Or sign in with</Text>
        <GoogleButton signin />
      </YStack>
    </YStackWrapper>
  );
}

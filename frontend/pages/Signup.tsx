import { YStack, Text } from 'tamagui';
import Inputbox from '../components/Inputbox';
import MainButton from '../components/MainButton';
import GoogleButton from '../components/GoogleButton';
import YStackWrapper from '../components/YStackWrapper';

export default function Signup() {
  return (
    <YStackWrapper justifyContent="space-evenly" alignItems="center">
      <Text my='$8' fontSize="$10">Sign Up</Text>
      <YStack width="75%" justifyContent="center" alignItems="center">
        <Inputbox placeholder="Name" width="100%" />
        <Inputbox placeholder="Email" width="100%" />
        <Inputbox placeholder="Password" secureTextEntry width="100%" />
        <Inputbox placeholder="confirm Password" secureTextEntry width="100%" />
      </YStack>
      <MainButton>Sign Up</MainButton>
      <YStack justifyContent="center" alignItems="center">
        <Text my="$4">Or sign up with</Text>
        <GoogleButton />
      </YStack>
    </YStackWrapper>
  );
}

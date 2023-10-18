import { YStack, Text } from 'tamagui';
import Logo from '../components/Logo';
import MainButton from '../components/MainButton';
import LinkSmall from '../components/LinkSmall';
import type { RootStackParamList } from '../navigation.types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import YStackWrapper from '../components/YStackWrapper';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Landing'>;
};

export default function Landing({ navigation }: Props) {
  function navigateSignup() {
    navigation.navigate('Signup');
  }
  function navigateSignin() {
    navigation.navigate('Signin');
  }
  return (
    <YStackWrapper justifyContent="space-evenly" alignItems="center">
      <Text fontSize="$8">Welcome To TrackMatt</Text>
      <Logo />
      <YStack w="100%" justifyContent="center" alignItems="center">
        <MainButton onPress={navigateSignup}>Create Account</MainButton>
        <LinkSmall onPress={navigateSignin}>Sign in</LinkSmall>
      </YStack>
    </YStackWrapper>
  );
}

import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import Navigator from './Navigator'

export default function App() {
  return (
    <TamaguiProvider defaultTheme='light' config={config}>
      <Navigator />
    </TamaguiProvider>
  );
}

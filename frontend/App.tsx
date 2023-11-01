import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import Navigator from './Navigator';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { useAppSelector } from './store/index';

export default function App() {
  const theme = useAppSelector((state) => state.theme);
  return (
    <Provider store={store}>
      <TamaguiProvider defaultTheme={theme.currentTheme} config={config}>
        <Navigator />
      </TamaguiProvider>
    </Provider>
  );
}

import { Input } from 'tamagui';

type Props = {
  placeholder: string;
  width?: string;
  secureTextEntry?: boolean
  onChangeText?: (e: any) => void;
};

const Inputbox: React.FC<Props> = ({ placeholder, width, secureTextEntry, onChangeText }) => {
  return (
    <Input
      size='$4'
      my='$2'
      onChangeText={onChangeText}
      width={width}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Inputbox;

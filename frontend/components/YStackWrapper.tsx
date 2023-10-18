import { YStack, useTheme } from "tamagui";

type Props = React.ComponentProps<typeof YStack>

const YStackWrapper: React.FC<Props> = ({children, ...props}: Props) => {
  const theme = useTheme()
  return (
    <YStack space fullscreen backgroundColor={theme.background.val} {...props}>{children}</YStack>
  )

}

export default YStackWrapper

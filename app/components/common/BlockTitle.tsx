import { Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react"

type BlockTitleProps = {
  text1: string
  text2: string
  text1Color?: any
}
export const BlockTitle = ({
  text1,
  text2,
  text1Color = "black",
}: BlockTitleProps) => {
  return (
    <Stack
      spacing={2}
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
    >
      <Text fontSize="36px" fontWeight="bold" color={text1Color}>
        {text1}
      </Text>
      <Text fontSize="36px" fontWeight="bold" color="palette.main">
        {text2}
      </Text>
    </Stack>
  )
}

export default BlockTitle

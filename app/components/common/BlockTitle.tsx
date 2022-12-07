import { Flex, Heading, HStack, Text } from "@chakra-ui/react"

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
    <HStack spacing={2}>
      <Text fontSize="36px" fontWeight="bold" color={text1Color}>
        {text1}
      </Text>
      <Text fontSize="36px" fontWeight="bold" color="palette.main">
        {text2}
      </Text>
    </HStack>
  )
}


export default BlockTitle

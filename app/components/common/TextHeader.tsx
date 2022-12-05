import { Box, Flex, Heading, HStack } from "@chakra-ui/react"

type TextHeaderProps = {
  text1: String
  text2: String
}

const TextHeader = ({ text1, text2 }: TextHeaderProps) => {
  return (
    <Flex w="full" py={8} direction="column">
      <HStack>
        <Heading mr={2}>{text1}</Heading>
        <Heading color="green">{text2}</Heading>
      </HStack>
      <Box h="2px" w="full" bgColor="black" mt={2} />
    </Flex>
  )
}

export default TextHeader

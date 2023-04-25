import { Box, Flex, Heading, HStack } from "@chakra-ui/react"

type TextHeaderYellowProps = {
  text1: String
  text2: String
}

const TextHeaderYellow = ({ text1, text2 }: TextHeaderYellowProps) => {
  return (
    <Flex w="full" mb={8} direction="column">
      <HStack>
        <Heading mr={2}>{text1}</Heading>
        <Heading color="#FFD93D">{text2}</Heading>
      </HStack>
      <Box h="2px" w="full" bgColor="black" mt={2} />
    </Flex>
  )
}

export default TextHeaderYellow

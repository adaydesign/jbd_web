import { Box, Flex, Heading, HStack } from "@chakra-ui/react"

type TextHeaderBlueProps = {
  text1: String
  text2: String
}

const TextHeaderBlue = ({ text1, text2 }: TextHeaderBlueProps) => {
  return (
    <Flex w="full" mb={8} direction="column">
      <HStack>
        <Heading mr={2}>{text1}</Heading>
        <Heading color="#5BC0F8">{text2}</Heading>
      </HStack>
      <Box h="2px" w="full" bgColor="black" mt={2} />
    </Flex>
  )
}

export default TextHeaderBlue

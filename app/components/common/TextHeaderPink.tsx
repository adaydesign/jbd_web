import { Box, Flex, Heading, HStack } from "@chakra-ui/react"

type TextHeaderPinkProps = {
  text1: String
  text2: String
}

const TextHeaderPink = ({ text1, text2 }: TextHeaderPinkProps) => {
  return (
    <Flex w="full" mb={8} direction="column">
      <HStack>
        <Heading mr={2}>{text1}</Heading>
        <Heading color="#E11299">{text2}</Heading>
      </HStack>
      <Box h="2px" w="full" bgColor="black" mt={2} />
    </Flex>
  )
}

export default TextHeaderPink

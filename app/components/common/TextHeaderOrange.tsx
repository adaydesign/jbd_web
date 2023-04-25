import { Box, Flex, Heading, HStack } from "@chakra-ui/react"

type TextHeaderOrangeProps = {
  text1: String
  text2: String
}

const TextHeaderOrange = ({ text1, text2 }: TextHeaderOrangeProps) => {
  return (
    <Flex w="full" mb={8} direction="column">
      <HStack>
        <Heading mr={2}>{text1}</Heading>
        <Heading color="#FC4F00">{text2}</Heading>
      </HStack>
      <Box h="2px" w="full" bgColor="black" mt={2} />
    </Flex>
  )
}

export default TextHeaderOrange

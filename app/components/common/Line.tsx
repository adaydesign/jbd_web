import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react"

type LineProps = {
  lineColor?: any
}
export const Line = ({ lineColor = "blue.800" }:LineProps) => {
  return (
    <HStack mt={6}>
      <Box h="3px" w="60px" bgColor={lineColor} />
      <Box h="16px" w="16px" borderWidth="4px" borderColor="palette.secondary" />
      <Box h="3px" w="60px" bgColor={lineColor} />
    </HStack>
  )
}


export default Line

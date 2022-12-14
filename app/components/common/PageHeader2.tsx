import { Flex, Heading, HStack, Text } from "@chakra-ui/react"

type PageHeaderProps2 = {
  heading: String
  text: String
}

const PageHeader2 = ({ heading, text }: PageHeaderProps2) => {
  return (
    <Flex w="full" h="35vh" bgImage="/images/breadcrumb.jpg" bgSize="cover">
      <Flex w="full" bgColor="blackAlpha.700" align="center">
        <Flex w="full" justify="space-between">
          <HStack ml="3%" borderLeftWidth="8px" borderLeftColor="palette.main" px={4}>
            <Heading color="white">{heading}</Heading>
          </HStack>
          <Flex
            bgColor="palette.secondary"
            align="center"
            w="50%"
            borderLeftRadius="50px"
            pl="30px"
            py={4}
          >
            <Text fontSize="13px"  color="white">
              {text}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}


export default PageHeader2

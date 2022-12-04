import { Button, Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react"
import { RiContactsFill, RiChatForwardFill } from "react-icons/ri"

const ContactUs = () => {
  return (
    <Flex
      flex={6}
      bgColor="rgba(0, 100, 0, 0.9)"
      direction="column"
      justify="center"
      px={10}
    >
      <HStack color="white" spacing={10}>
        <Icon as={RiContactsFill} boxSize="160px" />
        <VStack align="flex-start">
          <Text fontSize="25px">Call Us:</Text>
          <Text fontSize="40px" fontWeight="bold">
            +(01) 2345 6789
          </Text>
        </VStack>
      </HStack>
    </Flex>
  )
}
const ApplyNow = () => {
  return (
    <Flex flex={8} bgColor="rgba(0, 0, 60, 0.9)" align="center">
      <Flex px="60px" direction="column">
        <Text fontSize="35px" fontWeight="bold" color="green">
          Professional and Dedicated Consulting Services
        </Text>
        <Text fontSize="25px" color="white" mt={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Text>
        <Button
          rightIcon={<RiChatForwardFill />}
          colorScheme="green"
          p={3}
          borderRadius="xl"
          color="white"
          height="60px"
          w="fit-content"
          mt={4}
        >
          <Text fontSize="25px">Apply Now</Text>
        </Button>
      </Flex>
    </Flex>
  )
}

const ApplySection = () => {
  return (
    <Flex
      w="full"
      bgImage={`url("/images/img01.jpg")`}
      backgroundSize="cover"
      minH="35vh"
    >
      <ContactUs />
      <ApplyNow />
    </Flex>
  )
}

export default ApplySection

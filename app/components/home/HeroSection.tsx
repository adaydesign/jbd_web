import { Button, Flex, Text } from "@chakra-ui/react"
import { RiChatForwardFill } from "react-icons/ri"

const Text1 = () => {
  return (
    <Flex p={3} bgColor="blue" w="fit-content">
      <Text color="white" fontSize="25px">
        Welcome innovation in business starts here
      </Text>
    </Flex>
  )
}

const Text2 = () => {
  return (
    <Flex direction="column" color="white">
      <Text fontSize="70px" fontWeight="bold">
        Digital Marketing Agency
      </Text>
      <Text fontSize="18px" bgColor="green">
        We create and build flexible & creative design in your budget. Helping
        your get increase sales.
      </Text>
    </Flex>
  )
}

const ButtonStart = () => {
  return (
    <Flex w="fit-content" mt={6}>
      <Button
        rightIcon={<RiChatForwardFill />}
        colorScheme="green"
        p={3}
        borderRadius="xl"
        color="white"
        height="60px"
      >
        <Text fontSize="25px">Get Start</Text>
      </Button>
    </Flex>
  )
}

const HeroSection = () => {
  return (
    <Flex
      w="full"
      minH="70vh"
      bgImage={`url("/images/img03.jpg")`}
      backgroundSize="cover"
    >
      <Flex
        w="full"
        bgColor="blackAlpha.700"
        direction="column"
        justify="center"
        align="flex-end"
        p={16}
      >
        <Text1 />
        <Text2 />
        <ButtonStart />
      </Flex>
    </Flex>
  )
}

export default HeroSection

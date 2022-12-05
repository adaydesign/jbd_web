import { Button, Flex, Text } from "@chakra-ui/react"
import { RiChatForwardFill } from "react-icons/ri"

const Text1 = () => {
  return (
    <Flex p={3} bgColor="palette.body2" w="fit-content">
      <Text color="white" fontSize="25px">
      Call for Applications for COJ Fellowship Program
      </Text>
    </Flex>
  )
}

const Text2 = () => {
  return (
    <Flex direction="column" color="white">
      <Text fontSize="70px" fontWeight="bold" textAlign="right">
      People-Centered Justice Matters
      </Text>
      <Text fontSize="18px" bgColor="" textAlign="right">
      ร่วมสร้างกระบวนการยุติธรรมที่ยึดความต้องการ ทัศนคติ และความคาดหวังของประชาชนเป็นศูนย์กลาง (People-Centered) ในการพัฒนาคุณภาพการให้บริการของศาลยุติธรรม เพื่อลดช่องว่างของกระบวนการยุติธรรมแบบดั้งเดิมที่ยึดองค์กรผู้ให้บริการเป็นศูนย์กลาง (Institution-Focused)
      </Text>
    </Flex>
  )
}

const ButtonStart = () => {
  return (
    <Flex w="fit-content" mt={6}>
      <Button
        rightIcon={<RiChatForwardFill />}
        colorScheme="menu"
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

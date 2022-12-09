import { Button, Flex, Text, VStack, HStack, Stack } from "@chakra-ui/react"
import { RiChatForwardFill } from "react-icons/ri"
import { Link } from "@remix-run/react"

const Text1 = () => {
  return (
    <Flex
      p={3}
      bgColor="palette.footer"
      w="fit-content"
      borderRightWidth="25px"
      borderRightColor="palette.main"
    >
      <Text color="white" fontSize="25px">
        {/* Call for Applications for COJ Fellowship Program */}
        Justice by Design: กระบวนการยุติธรรมที่ทุกคนออกแบบได้
      </Text>
    </Flex>
  )
}

const Text2 = () => {
  return (
    <Flex direction="column" color="white">
      <Stack justify="flex-end" direction={{ base: "column", md: "row" }}>
        <Text fontSize="40px" fontWeight="bold" textAlign="right">
          People-Centered
        </Text>
        <Text
          fontSize="40px"
          fontWeight="bold"
          textAlign="right"
          color="palette.main"
        >
          Justice Matters
        </Text>
      </Stack>

      <Text fontSize="19px" bgColor="blackAlpha.400" textAlign="right">
        ร่วมสร้างกระบวนการยุติธรรมที่ยึดความต้องการ ทัศนคติ
        และความคาดหวังของประชาชนเป็นศูนย์กลาง (People-Centered)
        ในการพัฒนาคุณภาพการให้บริการของศาลยุติธรรม
        เพื่อลดช่องว่างของกระบวนการยุติธรรมแบบดั้งเดิมที่ยึดองค์กรผู้ให้บริการเป็นศูนย์กลาง
        (Institution-Focused)
      </Text>
    </Flex>
  )
}

const HeroSection = () => {
  return (
    <Flex
      w="full"
      minH="70vh"
      bgImage={`url("/images/img003.jpg")`}
      backgroundSize="cover"
      backgroundPosition={{ base: "center", md: "left" }}
      justify="flex-end"
    >
      <Flex
        w="full"
        bgColor="blackAlpha.200"
        direction="column"
        justify="center"
        align="flex-end"
        p={16}
      >
        <Flex
          w={{ base: "full", md: "68%" }}
          direction="column"
          justify="center"
          align="flex-end"
        >
          <Text1 />
          <Text2 />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HeroSection

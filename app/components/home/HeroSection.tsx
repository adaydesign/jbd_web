import { Button, Flex, Text, VStack, HStack } from "@chakra-ui/react"
import { RiChatForwardFill } from "react-icons/ri"
import { Link } from "@remix-run/react"

const Text1 = () => {
  return (
    <Flex p={3} bgColor="palette.footer" w="fit-content">
      <Text color="white" fontSize="25px">
      Call for Applications for COJ Fellowship Program
      </Text>
    </Flex>
    
  )
}

const Text1HL = () => {
  return (
    <Flex p={3} bgColor="palette.main" w="fit-content">
      <Text color="palette.main" fontSize="25px">
      ..
      </Text>
    </Flex>
    
  )
}

const Text2 = () => {
  return (
    <Flex direction="column" color="white">
      <HStack justify="flex-end">
      <Text fontSize="40px" fontWeight="bold" textAlign="right">
      People-Centered 
      </Text>
      <Text fontSize="40px" fontWeight="bold" textAlign="right" color="palette.main">
      Justice Matters
      </Text>
      </HStack>
      
      <Text fontSize="19px" bgColor="blackAlpha.400" textAlign="right">
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
        as={Link} 
        to={"/application"} 
      >
        <Text fontSize="25px">Apply Now!</Text>
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
<Flex  w="68%" direction="column"
        justify="center"
        align="flex-end">
          <HStack  spacing='0'>
  <Text1 />
  <Text1HL />
  </HStack>
        <Text2 />
        <ButtonStart />
</Flex>
        
      </Flex>
    </Flex>
  )
}

export default HeroSection

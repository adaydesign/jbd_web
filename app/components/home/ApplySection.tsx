import { Button, Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react"
import { RiContactsFill, RiChatForwardFill } from "react-icons/ri"

const ContactUs = () => {
  return (
    <Flex
      flex={6}
      bgColor="rgba(189, 5, 30, 0.9)"
      direction="column"
      justify="center"
      px={10}
    >
      <HStack color="white" spacing={10}>
        <Icon as={RiContactsFill} boxSize="60px" />
        <VStack align="flex-start">
          <Text fontSize="25px">Call Us:</Text>
          <Text fontSize="32px" fontWeight="bold">
            +(01) 2345 6789
          </Text>
        </VStack>
      </HStack>
    </Flex>
  )
}
const ApplyNow = () => {
  return (
    <Flex flex={8} bgColor="rgba(85, 87, 89, 0.97)" align="center">
      <Flex px="60px" direction="column">
        <Text fontSize="24px" fontWeight="bold" color="white"  mt={4}>
          สนใจเข้าร่วมโครงการ
        </Text>
        <Text fontSize="19px" color="white" mt={4}>
          สมัครเข้าร่วมโครงการได้ตั้งแต่วันที่ 15 ธ.ค. 65
        </Text>
        <Text fontSize="19px" color="white" >
          ไม่มีค่าใช้จ่ายตลอดเข้าร่วมโครงการ
        </Text>
        <Button
          rightIcon={<RiChatForwardFill />}
          colorScheme="menu"
          p={3}
          borderRadius="xl"
          color="white"
          height="50px"
          w="fit-content"
          mt={2}
        >
          <Text fontSize="24px">Apply Now</Text>
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

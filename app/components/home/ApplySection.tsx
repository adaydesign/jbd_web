import { Button, Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react"
import { RiContactsFill, RiChatForwardFill, RiPhoneFill, RiFileTextFill } from "react-icons/ri"
import { Link } from "@remix-run/react"

const ContactUs = () => {
  return (
    <Flex
      flex={3}
      bgColor="rgba(189, 5, 30, 0.9)"
      direction="column"
      justify="center"
      px={10}
    >
      <HStack color="white" spacing={10}>
        <Icon as={RiPhoneFill} boxSize="60px" />
        <VStack align="flex-start">
          <Text fontSize="24px">ติดต่อสอบถาม</Text>
          <Text fontSize="19px" fontWeight="bold">
          02 512 8499
          </Text>
        </VStack>
      </HStack>
    </Flex>
  )
}
const ApplyNow = () => {
  return (
    <Flex flex={7} bgColor="rgba(85, 87, 89, 0.97)"  justify="center" align="center">
      <Icon as={RiFileTextFill} boxSize="60px" color="white" />
      <Flex px="60px" direction="column">
        <Text fontSize="24px"  color="white"  >
          สนใจเข้าร่วมโครงการ
        </Text>
        <Text fontSize="19px" color="white" mt={2}>
          รับสมัครเข้าร่วมโครงการตั้งแต่วันที่ 15 ธ.ค. 65
        </Text>
        <Text fontSize="19px" color="white" >
          ไม่มีค่าใช้จ่ายตลอดเข้าร่วมโครงการ
        </Text>

      </Flex>


      <Button
          rightIcon={<RiChatForwardFill />}
          colorScheme="menu"
          p={5}
          borderRadius="xl"
          color="white"
          height="50px"
          w="fit-content"
          mt={0}
          as={Link} 
          to={"/application"} 
          
        >
          <Text fontSize="24px">Apply Now</Text>
        </Button>
    </Flex>
  )
}

const ApplySection = () => {
  return (
    <Flex
      w="full"
      bgImage={`url("/images/img01.jpg")`}
      backgroundSize="cover"
      minH="25vh"
      
    >
      
      <ContactUs />
      <ApplyNow />
    </Flex>
  )
}

export default ApplySection

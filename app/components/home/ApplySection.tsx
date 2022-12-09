import {
  Button,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import {
  RiContactsFill,
  RiChatForwardFill,
  RiPhoneFill,
  RiFileTextFill,
} from "react-icons/ri"
import { Link } from "@remix-run/react"

const ContactUs = () => {
  return (
    <Flex
      flex={{ base: 1, md: 5 }}
      bgColor="rgba(189, 5, 30, 0.9)"
      direction="column"
      align="center"
      justify="center"
      p={{ base: 6, md: 0 }}
    >
      <Stack
        color="white"
        spacing={{ base: 2, md: 10 }}
        direction={{ base: "column", md: "row" }}
        align="center"
      >
        <Icon as={RiPhoneFill} boxSize="60px" />
        <VStack align="flex-start">
          <Text fontSize="24px">ติดต่อสอบถาม</Text>
          <Text fontSize="19px" fontWeight="bold">
            02 512 8499
          </Text>
        </VStack>
      </Stack>
    </Flex>
  )
}
const ApplyNow = () => {
  return (
    <Flex
      flex={{ base: 1, md: 7 }}
      bgColor="rgba(85, 87, 89, 0.97)"
      justify="center"
      align="center"
      direction={{ base: "column", md: "row" }}
      p={{ base: 6, md: 0 }}
    >
      <Icon as={RiFileTextFill} boxSize="60px" color="white" />
      <Flex
        px={{ base: 2, md: "60px" }}
        direction="column"
        my={{ base: 4, md: 0 }}
      >
        <Text fontSize="24px" color="white">
          " สนใจเข้าร่วมหลักสูตร
        </Text>
        <Text fontSize="19px" color="white" mt={1} align="center">
          สมัครได้ตั้งแต่วันที่ 15 ธ.ค. 65 ถึงวันที่ 15 ม.ค. 66
        </Text>
        <Text fontSize="19px" color="white">
          ไม่มีค่าใช้จ่ายตลอดหลักสูตร "
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
      direction={{ base: "column", md: "row" }}
    >
      <ContactUs />
      <ApplyNow />
    </Flex>
  )
}

export default ApplySection

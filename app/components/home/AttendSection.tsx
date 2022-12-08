import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  ListItem,
  SimpleGrid,
  Spacer,
  Text,
  UnorderedList,
} from "@chakra-ui/react"
import { RiCalendarTodoFill, RiTimeFill, RiUserVoiceFill } from "react-icons/ri"
import { BlockTitle, Line } from "~/components/common"

const AttendSection = () => {
  return (
    <Center
      w="full"
      display="flex"
      flexDirection="column"
      py="70px"
      bgColor="palette.container"
    >
      <BlockTitle text1="Who should" text2="Attend?" />
      <Line />
      <Text fontSize="19px" mt={6} w="50%" textAlign="center"></Text>
      <Flex direction={{ base: "column", md: "row" }}>
        <Flex direction="column" w="full">
          <Text fontSize="24px" fontWeight="bold" textAlign="center">
            ภาคประชาชน{" "}
          </Text>

          <UnorderedList
            fontSize="19px"
            mt={3}
            color="black"
            w="100%"
            textAlign="left"
          >
            <ListItem>ประชาชนผู้ใช้บริการศาล</ListItem>
            <ListItem>นิสิต</ListItem>
            <ListItem>นักศึกษา</ListItem>
          </UnorderedList>
        </Flex>
        <Box
          backgroundColor="palette.body2"
          w="5px"
          mx="20"
          display={{ base: "none", md: "flex" }}
        ></Box>
        <Flex direction="column" w="full" mt={{ base: 6, md: 0 }}>
          <Text fontSize="24px" fontWeight="bold" textAlign="center">
            ภาคปฏิบัติงาน
          </Text>
          <UnorderedList
            fontSize="19px"
            mt={3}
            color="black"
            w="100%"
            textAlign="left"
          >
            <ListItem>ผู้พิพากษา</ListItem>
            <ListItem>เจ้าหน้าที่ศาล</ListItem>
            <ListItem>อัยการ</ListItem>
            <ListItem>ทนายความ</ListItem>
            <ListItem>ผู้ปฏิบัติงานในศาลอื่นๆ</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Center>
  )
}

export default AttendSection

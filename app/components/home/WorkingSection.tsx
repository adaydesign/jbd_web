import {
  Center,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react"

import { BlockTitle, Line } from "~/components/common"

const WorkingSection = () => {
  return (
    <Center
      w="full"
      display="flex"
      flexDirection="column"
      py="70px"
      bgColor="palette.body1"
      px={{ base: 8, md: 16 }}
    >
      <BlockTitle text1="Details" text2="" text1Color="black" />

      <Line lineColor="black" />
      <Text
        fontSize="25px"
        mt={6}
        color="black"
        w="50%"
        textAlign="center"
      ></Text>
      <Center>
        <UnorderedList fontSize="19px" mt={6} color="black" textAlign="left" w="78%">
          <ListItem mb={2}>
            หลักสูตร Fellowship Program
            ที่ผสมผสานระหว่างการบรรยายเชิงวิชาการและการร่วมมือกับสมาชิกกลุ่มประมาณ
            6-7 คน เพื่อแก้ไขปัญหาที่เกิดขึ้นจริงในกระบวนการยุติธรรมชั้นศาล
          </ListItem>
          <ListItem mb={2}>
            กิจกรรมของหลักสูตรจัดขึ้นที่สำนักงานศาลยุติธรรม ศาลอาญา ศาลแพ่ง และสถาบันพัฒนาข้าราชการฝ่ายตุลาการศาลยุติธรรม
          </ListItem>
          <ListItem mb={2}>
            ระยะเวลาดำเนินการของหลักสูตรทั้งสิ้น 8 วัน โดยจัดขึ้นในวันเสาร์ที่ 5, 11, 18, 25 กุมภาพันธ์ วันเสาร์ที่ 11, 18, 25 มีนาคม และวันเสาร์ที่ 1 เมษายน 2566 เวลา 9.00 - 12.00 น.
          </ListItem>
          <ListItem mb={2}>
            วิทยากรผู้บรรยายมีความรู้ความเชี่ยวชาญเกี่ยวกับกระบวนการคิดเชิงออกแบบและการพิจารณาคดีในศาล
          </ListItem>
          {/* <ListItem mb={2}>ตรวจสอบ Course Curriculum ได้ที่ (Link)</ListItem> */}
          <ListItem>
            ร่วมนำเสนอ Idea จากการทำกระบวนการ Design Thinking ต่อประชาชนและผู้บริหารศาลยุติธรรม
          </ListItem>
        </UnorderedList>
      </Center>

      {/* <ClientPanel /> */}
    </Center>
  )
}

export default WorkingSection

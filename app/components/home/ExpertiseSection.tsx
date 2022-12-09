import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react"
import { RiCalendarTodoFill, RiTimeFill, RiUserVoiceFill } from "react-icons/ri"

import { BlockTitle, Line } from "~/components/common"

const ExpertiseSection = () => {
  return (
    <Center
      w="full"
      display="flex"
      flexDirection="column"
      py="50px"
      bgColor="palette.body1"
    >
      <BlockTitle text1="Justice by" text2="Design" />
      <Text
        fontSize="24px"
        mt={0}
        w="50%"
        textAlign="center"
        fontWeight="bold"
        color="palette.body2"
      >
        : กระบวนการยุติธรรมที่ทุกคนออกแบบได้
      </Text>
      <Line />
      <Text fontSize="19px" mt={6} w="70%" lineHeight="9" align="center">
        ร่วมสร้างสรรค์การพิจารณาคดีในชั้นศาลผ่านกระบวนการคิดเชิงออกแบบ (Design Thinking) ไปพร้อม ๆ กับเพื่อนร่วมทีมที่มาจากภาคประชาชนผู้ใช้บริการศาลและภาคปฏิบัติ เพื่อนำเสนอนวัตกรรมการดำเนินคดีในศาลรูปแบบใหม่ที่ยึดเอาความต้องการของประชาชนเป็นศูนย์กลาง (People-Centered) ภายใต้ Theme “Redesigning the Court for People-Centered Justice”
      </Text>
    </Center>
  )
}

export default ExpertiseSection

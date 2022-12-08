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
import {
  RiCalendarTodoFill,
  RiTimeFill,
  RiUserVoiceFill,
} from "react-icons/ri"

import { BlockTitle,Line } from "~/components/common"
// type BlockTitleProps = {
//   text1: string
//   text2: string
//   text1Color?: any
// }
// export const BlockTitle = ({
//   text1,
//   text2,
//   text1Color = "black",
// }: BlockTitleProps) => {
//   return (
//     <HStack spacing={3}>
//       <Text fontSize="36px" fontWeight="bold" color={text1Color}>
//         {text1}
//       </Text>
//       <Text fontSize="36px" fontWeight="bold" color="palette.main">
//         {text2}
//       </Text>
//     </HStack>
//   )
// }

// type LineProps = {
//   lineColor?: any
// }
// export const Line = ({ lineColor = "blue.800" }:LineProps) => {
//   return (
//     <HStack mt={6}>
//       <Box h="3px" w="60px" bgColor={lineColor} />
//       <Box h="16px" w="16px" borderWidth="4px" borderColor="palette.secondary" />
//       <Box h="3px" w="60px" bgColor={lineColor} />
//     </HStack>
//   )
// }

// type ExpertiseItemProps = {
//   icon: any
//   title: String
//   desc: String
// }
// const ExpertiseItem = ({ icon, title, desc }: ExpertiseItemProps) => {
//   return (
//     <Flex p={6} shadow="2xl" w="full">
//       <Flex
//         direction="column"
//         align="center"
//         justify="center"
//         p={4}
//         borderWidth="2px"
//         borderStyle="dashed"
//         borderColor="blue.700"
//         w="full"
//       >
//         <Icon as={icon} boxSize="80px" color="palette.main" />
//         <Text fontSize="21px" fontWeight="bold" textAlign="center">
//           {title}
//         </Text>
//         <Text fontSize="19px">{desc}</Text>
//       </Flex>
//     </Flex>
//   )
// }

// const ExpertisePanel = () => {
//   return (
    
//     <SimpleGrid columns={3} spacing={14} mt={6} pb={100} w="90%">
//       <ExpertiseItem
//         icon={RiUserVoiceFill}
//         title="Design Thinking Bootcamp"
//         desc="(In-person)"
//       />
//       <ExpertiseItem
//         icon={RiCalendarTodoFill}
//         title="Feb 5,11,18,25 Mar 11,18,25"
//         desc="Time are subject to change"
//       />
//       <ExpertiseItem
//         icon={RiTimeFill}
//         title="Saturday"
//         desc="9.00-16.00"
//       />
//     </SimpleGrid>
//   )
// }

const ExpertiseSection = () => {
  return (
    <Center w="full" display="flex" flexDirection="column" py="50px" bgColor="palette.body1">
     
      {/* <BlockTitle text1="At-a-" text2="Glance"/>
      <Line />
      <ExpertisePanel /> */}
      <BlockTitle text1="Justice by" text2="Design" />
      <Text fontSize="24px" mt={0} w="50%" textAlign="center" fontWeight="bold" color="palette.body2">
      : กระบวนการยุติธรรมที่ทุกคนออกแบบได้
      </Text>
      <Line />
      <Text fontSize="19px" mt={6} w="70%" lineHeight="9" align="center" >
      ร่วมสร้างสรรค์การพิจารณาคดีในชั้นศาลผ่านกระบวนการคิดเชิงออกแบบ (Design Thinking) ไปพร้อม ๆ กับเพื่อนร่วมทีมที่มาจากภาคประชาชนผู้ใช้บริการศาลและภาคปฏิบัติ เพื่อนำเสนอ นวัตกรรมการดำเนินคดีในศาลรูปแบบใหม่ที่ยึดเอาความต้องการของประชาชนเป็นศูนย์กลาง (People-Centered) ภายใต้ Theme “Redesign Court for People-Centered Justice”
      </Text>
      
    </Center>
  )
}

export default ExpertiseSection

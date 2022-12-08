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
  RiFileList3Line,
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
//     <HStack spacing={0}>
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

type AtAGlanceItemProps = {
  icon: any
  title: String
  desc: String
}
const AtAGlanceItem = ({ icon, title, desc }: AtAGlanceItemProps) => {
  return (
    <Flex p={2} shadow="2xl" w="full">
      <Flex
        direction="column"
        align="center"
        justify="center"
        p={4}
        borderWidth="2px"
        borderStyle="dashed"
        borderColor="blue.700"
        w="full"
      >
        <Icon as={icon} boxSize="80px" color="palette.main" />
        <Text fontSize="20px" fontWeight="bold" textAlign="center">
          {title}
        </Text>
        <Text fontSize="19px">{desc}</Text>
      </Flex>
    </Flex>
  )
}

const AtAGlancePanel = () => {
  return (
    
    <SimpleGrid 
    columns={{
      base: 1,
      md: 3,
    }} 
    spacing={14} mt={6} pb={30} w="90%">
      <AtAGlanceItem
        icon={RiUserVoiceFill}
        title="Design Thinking Bootcamp"
        desc="(In-person)"
      />
      <AtAGlanceItem
        icon={RiCalendarTodoFill}
        title="Saturday (9.00 - 12.00)"
        desc="Feb 5,11,18,25 & Mar 11,18,25,31"
      />
      <AtAGlanceItem
        icon={RiFileList3Line}
        title="5 Teaching Sessions"
        desc="1 Group Project"
      />
    </SimpleGrid>
  )
}

const AtAGlanceSection = () => {
  return (
    <Center w="full" display="flex" flexDirection="column" py="50px" bgColor="palette.container">
     
      <BlockTitle text1="At-a-" text2="Glance"/>
      <Line />
      <AtAGlancePanel />

      
    </Center>
  )
}

export default AtAGlanceSection

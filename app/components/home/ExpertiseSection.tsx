import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import {
  RiShieldCheckFill,
  RiMailSendFill,
  RiPieChart2Fill,
} from "react-icons/ri"

type BlockTitleProps = {
  text1: String
  text2: String
  text1Color?: any
}
export const BlockTitle = ({
  text1,
  text2,
  text1Color = "black",
}: BlockTitleProps) => {
  return (
    <HStack spacing={3}>
      <Text fontSize="36px" fontWeight="bold" color={text1Color}>
        {text1}
      </Text>
      <Text fontSize="36px" fontWeight="bold" color="palette.main">
        {text2}
      </Text>
    </HStack>
  )
}

type LineProps = {
  lineColor?: any
}
export const Line = ({ lineColor = "blue.800" }:LineProps) => {
  return (
    <HStack mt={6}>
      <Box h="3px" w="60px" bgColor={lineColor} />
      <Box h="16px" w="16px" borderWidth="4px" borderColor="palette.secondary" />
      <Box h="3px" w="60px" bgColor={lineColor} />
    </HStack>
  )
}

type ExpertiseItemProps = {
  icon: any
  title: String
  desc: String
}
const ExpertiseItem = ({ icon, title, desc }: ExpertiseItemProps) => {
  return (
    <Flex p={6} shadow="2xl">
      <Flex
        direction="column"
        align="center"
        justify="center"
        p={4}
        borderWidth="2px"
        borderStyle="dashed"
        borderColor="blue.700"
      >
        <Icon as={icon} boxSize="120px" color="palette.main" />
        <Text fontSize="30px" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="25px">{desc}</Text>
      </Flex>
    </Flex>
  )
}

const ExpertisePanel = () => {
  return (
    <SimpleGrid columns={3} spacing={14} mt={6} w="90%">
      <ExpertiseItem
        icon={RiShieldCheckFill}
        title="Design Thinking Bootcamp"
        desc="(In-person)"
      />
      <ExpertiseItem
        icon={RiMailSendFill}
        title="Feb 5,11,18,25 Mar 11,18,25"
        desc="Time are subject to change"
      />
      <ExpertiseItem
        icon={RiPieChart2Fill}
        title="Saturday"
        desc="9.00-16.00"
      />
    </SimpleGrid>
  )
}

const ExpertiseSection = () => {
  return (
    <Center w="full" display="flex" flexDirection="column" py="100px">
      <BlockTitle text1="Justice by" text2="Design" />
      <Line />
      <Text fontSize="19px" mt={6} w="50%" textAlign="center">
      ร่วมสร้างสรรค์การพิจารณาคดีในชั้นศาลผ่านกระบวนการคิดเชิงออกแบบ (Design Thinking) ไปพร้อม ๆ กับเพื่อนร่วมทีมที่มาจากภาคประชาชนผู้ใช้บริการศาลและภาคปฏิบัติ เพื่อนำเสนอ นวัตกรรมการดำเนินคดีในศาลรูปแบบใหม่ที่ยึดเอาความต้องการของประชาชนเป็นศูนย์กลาง (People-Centered) ภายใต้ Theme “Redesign Court for People-Centered Justice”
      </Text>
      <ExpertisePanel />
    </Center>
  )
}

export default ExpertiseSection

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
import {
  RiCalendarTodoFill,
  RiTimeFill,
  RiUserVoiceFill,
} from "react-icons/ri"

type BlockTitleProps = {
  text1: string
  text2: string
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


const AttendSection = () => {
  return (
    <Center w="full" display="flex" flexDirection="column" py="50px" bgColor="palette.container">
    
      <BlockTitle text1="Who should" text2="Attend?" />
      <Line />
      <Text fontSize="19px" mt={6} w="50%" textAlign="center">

     
      </Text>
<Flex>
      <Flex direction="column" w="full">
      <Text fontSize="24px" fontWeight="bold" textAlign="center">ภาคประชาชน </Text>

        <UnorderedList fontSize="19px" mt={3} color="black" w="100%" textAlign="left">

<ListItem>ประชาชนผู้ใช้บริการศาล</ListItem>
<ListItem>นิสิต</ListItem>
<ListItem>นักศึกษา</ListItem>


</UnorderedList>

        </Flex>
      <Box   backgroundColor="palette.body2" w="5px" mx="20" ></Box>
      <Flex direction="column"  w="full">
      <Text fontSize="24px" fontWeight="bold" textAlign="center">ภาคปฏิบัติงาน</Text>
        <UnorderedList fontSize="19px" mt={3} color="black" w="100%" textAlign="left">

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

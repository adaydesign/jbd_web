import { Center, Flex, HStack, Image, SimpleGrid, Text, List, ListItem, ListIcon, OrderedList, UnorderedList, } from "@chakra-ui/react"
// import { Line } from "./ExpertiseSection"
import { BlockTitle,Line } from "~/components/common"

// type ClientItemProps = {
//   image: any
//   text1: String
//   text2?: String
// }
// const ClientItem = ({ image, text1, text2 }: ClientItemProps) => {
//   return (
//     <Flex
//       direction="column"
//       align="center"
//       justify="center"
//       _hover={{ transform: "scale(1.1)" }}
//     >
//       <Image src={image} />
//       <Text fontSize="25px" color="white">
//         {text1} <strong>{text2}</strong>
//       </Text>
//     </Flex>
//   )
// }

// const ClientPanel = () => {
//   return (
//     <SimpleGrid columns={5} spacing="40px" mt="60px">
//       <ClientItem
//         image={"/images/client01.png"}
//         text1="Digital"
//         text2="Marketing"
//       />
//       <ClientItem
//         image={"/images/client02.png"}
//         text1="Business"
//         text2="Group"
//       />
//       <ClientItem
//         image={"/images/client03.png"}
//         text1="Creative"
//         text2="Business"
//       />
//       <ClientItem
//         image={"/images/client04.png"}
//         text1="Creative"
//         text2="Logo"
//       />
//       <ClientItem
//         image={"/images/client05.png"}
//         text1="Website"
//         text2="Hosting"
//       />
//     </SimpleGrid>
//   )
// }

const WorkingSection = () => {
  return (
    <Center
      w="full"
      display="flex"
      flexDirection="column"
      py="70px"
      bgColor="palette.body1"
    >
      <BlockTitle text1="Details" text2="" text1Color="black" />
      
      
      <Line lineColor="black" />
      <Text fontSize="25px" mt={6} color="black" w="50%" textAlign="center">


      </Text>
      <Center>
      <UnorderedList fontSize="19px" mt={6} color="black" w="70%" textAlign="left">

        <ListItem>หลักสูตร Fellowship Program ที่ผสมผสานระหว่างการบรรยายเชิงวิชาการและ การร่วมมือกับสมาชิกกลุ่มประมาณ 6-7 คน เพื่อแก้ไข ปัญหาที่เกิดขึ้นจริงในกระบวนการยุติธรรมชั้นศาล</ListItem>
        <ListItem>กิจกรรมของหลักสูตรจัดขึ้นที่สำนักงานศาลยุติธรรม ศาล อาญา ศาลแพ่ง และสถาบันพัฒนาข้าราชการฝ่ายตุลาการศาลยุติธรรม</ListItem>
        <ListItem>ระยะเวลาดำเนินการของหลักสูตรทั้งสิ้น 7 วัน โดยจัดขึ้นในวันเสาร์ที่ 5, 11, 18, 25 กุมภาพันธ์ และวันเสาร์ที่ 11, 18, 25 มีนาคม 2566 เวลา 9.00-16.00 น.</ListItem>
        <ListItem>วิทยากรผู้บรรยายมีความรู้ความเชี่ยวชาญเกี่ยวกับ กระบวนการคิดเชิงออกแบบและการพิจารณาคดีในศาล</ListItem>
        <ListItem>ตรวจสอบ Course Curriculum ได้ที่ (Link)</ListItem>
        <ListItem>ร่วมนำเสนอ idea จากการทำกระบวนการ Design Thinking ต่อประชาชนและผู้บริหารศาลยุติธรรม</ListItem>

      </UnorderedList>
      </Center>

      {/* <ClientPanel /> */}
    </Center>
  )
}

export default WorkingSection

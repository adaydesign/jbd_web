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

const WhySection = () => {
  return (
    <Center
      w="full"
      display="flex"
      flexDirection="column"
      py="70px"
      bgColor="palette.container"
      px={{ base: 16, md: 0 }}
    >
      <BlockTitle text1="Why" text2="Justice x Design ?" text1Color="black" />

      <Line lineColor="black" />
      <Text
        fontSize="25px"
        mt={6}
        color="black"
        w="50%"
        textAlign="center"
      ></Text>
      <Center>
        <UnorderedList
          fontSize="19px"
          mt={6}
          color="black"
          w="100%"
          textAlign="left"
        >
          <ListItem mb={2}>
            เรียนรู้กระบวนการคิดเชิงออกแบบ (Design Thinking) จากทีมวิทยากรและ
            Coach ที่มีประสบการณ์จริง
          </ListItem>
          <ListItem mb={2}>
            เข้าใจ pain point
            ของการดำเนินคดีในชั้นศาลจากมุมมองของประชาชนผู้ใช้บริการและ
            ผู้ปฏิบัติงานในศาล
          </ListItem>
          <ListItem mb={2}>
            ลงสำรวจและสังเกตการณ์กระบวนการในชั้นศาลเพื่อให้เห็นสภาพปัญหาจริงในการดำเนินคดีชั้นศาล
          </ListItem>
          <ListItem mb={2}>
            ร่วมสร้างสรรค์นวัตกรรมการพิจารณาคดีในชั้นศาลพร้อมกับเพื่อนร่วมทีมตามประเด็นที่แต่ละทีมสนใจ
          </ListItem>
          <ListItem mb={2}>
            ร่วมนำเสนอผลงานนวัตกรรมการพิจารณาคดีแบบใหม่ต่อประชาชนทั่วไปและผู้บริหารศาลยุติธรรม
          </ListItem>
          <ListItem>
            ประกาศนียบัตร, การเข้าร่วมโครงการ COJ Fellowship Program
          </ListItem>
        </UnorderedList>
      </Center>
      {/* 
      <ClientPanel /> */}
    </Center>
  )
}

export default WhySection

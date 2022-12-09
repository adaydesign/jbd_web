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
} from "@chakra-ui/react";

import { BlockTitle, Line } from "~/components/common";

const OurChallengeSection = () => {
  return (
    <Center
      w="full"
      display="flex"
      flexDirection="column"
      py="70px"
      bgColor="palette.container"
      px={{ base: 8, md: 0 }}
    >
      <BlockTitle text1="Our" text2="Challenge" text1Color="black" />

      <Line lineColor="black" />

      <Text
        fontSize="19px"
        mt={6}
        color="black"
        w="70%"
        textAlign="left"
        textIndent="30px"
        lineHeight="8"
      >
        ออกแบบกระบวนการยุติธรรมชั้นศาลภายใต้โจทย์ของหลักสูตร “Redesigning the
        Court for People-Centered Justice”
        โดยให้ความสำคัญกับประสบการณ์ของผู้ใช้บริการกลุ่มต่าง ๆ
        ตั้งแต่เริ่มต้นจนจบกระบวนการชั้นศาล เช่น
      </Text>

      <Center>
        <UnorderedList
          fontSize="19px"
          mt={6}
          color="black"
          w="100%"
          textAlign="left"
        >
          <ListItem mb={2}>
            การออกแบบกระบวนการศาลดิจิทัลโดยคำนึงถึงประชาชนที่ไม่สามารถเข้าถึงเทคโนโลยีได้
          </ListItem>
          <ListItem mb={2}>
            การออกแบบกระบวนการศาลเพื่อรองรับสังคมผู้สูงอายุ
          </ListItem>
          <ListItem mb={2}>
            การออกแบบกระบวนการศาลที่คำนึงถึงประชาชนที่ไม่มีเงินจ้างทนายความแต่จำเป็นต้องใช้บริการศาล
          </ListItem>
          <ListItem mb={2}>
            การออกแบบกระบวนการศาลที่คำนึงถึงประชาชนที่จำเป็นต้องใช้บริการศาลแต่ไม่มีเวลามาศาล
          </ListItem>
          <ListItem>
            การออกแบบกระบวนการศาลเพื่อแก้ปัญหาอื่น ๆ ของผู้ใช้บริการศาล เป็นต้น
          </ListItem>
        </UnorderedList>
      </Center>
      {/* 
      <ClientPanel /> */}
    </Center>
  );
};

export default OurChallengeSection;

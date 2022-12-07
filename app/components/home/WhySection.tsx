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

const WhySection = () => {
  return (
    <Center
      w="full"
      display="flex"
      flexDirection="column"
      py="70px"
      bgColor="palette.container"
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
          <ListItem>
            เรียนรู้กระบวนการคิดเชิงออกแบบ (Design Thinking) จากทีมวิทยากรและ
            Coach ที่มีประสบการณ์จริง
          </ListItem>
          <ListItem>
            เข้าใจ pain point
            ของการดำเนินคดีในชั้นศาลจากมุมมองของประชาชนผู้ใช้บริการและ
            ผู้ปฏิบัติงานในศาล
          </ListItem>
          <ListItem>
            ลงสำรวจและสังเกตการณ์กระบวนการในชั้นศาลเพื่อให้เห็นสภาพปัญหาจริงในการดำเนินคดีชั้นศาล
          </ListItem>
          <ListItem>
            ร่วมสร้างสรรค์นวัตกรรมการพิจารณาคดีในชั้นศาลพร้อมกับเพื่อนร่วมทีมตามประเด็นที่แต่ละทีมสนใจ
          </ListItem>
          <ListItem>
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
  );
};

export default WhySection;

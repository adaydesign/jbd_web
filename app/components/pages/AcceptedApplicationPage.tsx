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
  VStack,
} from "@chakra-ui/react";

import { BlockTitle, Line } from "~/components/common";

const AcceptedApplicationPage = () => {
  return (
    <Center
      w="full"
 
      bgColor="palette.container"
   
    >
      
 
  

      <iframe src="/docs/selectedcandidates.pdf" width="1000px" height="1200px" title="รายชื่อผู้ได้รับการคัดเลือกเข้าร่วมหลักสูตร"></iframe>
  

      {/* <ClientPanel /> */}
    </Center>
  );
};

export default AcceptedApplicationPage;

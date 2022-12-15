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

const ProgramJourneyPage = () => {
  return (
    <Center
      w="full"
      display="flex"
      flexDirection="column"
      py="20px"
      bgColor="palette.container"
      px={{ base: 8, md: 16 }}
    >
      
 
      <Center>
      <Image src="/images/program_journey.png" />
      </Center>

      {/* <ClientPanel /> */}
    </Center>
  );
};

export default ProgramJourneyPage;

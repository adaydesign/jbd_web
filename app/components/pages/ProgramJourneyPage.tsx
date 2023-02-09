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
  Box,
  Divider,
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
      <Image mb={5} src="/images/program_journey.png" />

      <Divider mb={10} />
      <Text fontSize="20" fontWeight="bold" mb={5}>
        โครงการ Justice by Design : กระบวนการยุติธรรมที่ทุกคนออกแบบได้
      </Text>
      <iframe
        src="https://docs.google.com/viewer?url=https://jbd.coj.go.th/docs/1_โครงการJustice_by_Design.pdf&embedded=true"
        width="100%"
        height="400px"
        title="โครงการ Justice by Design : กระบวนการยุติธรรมที่ทุกคนออกแบบได้"
      ></iframe>

      <Divider mt={5} mb={10} />
      <Text fontSize="20" fontWeight="bold" mb={5}>
        กำหนดการกิจกรรมที่ 1 สัมมนาทางวิชาการฯ
      </Text>
      <iframe
        src="https://docs.google.com/viewer?url=https://jbd.coj.go.th/docs/2_กำหนดการสัมมนา7สัปดาห์.pdf&embedded=true"
        width="100%"
        height="400px"
        title="กำหนดการกิจกรรมที่ 1 สัมมนาทางวิชาการฯ"
      ></iframe>

      <Divider mt={5} mb={10} />
      <Text fontSize="20" fontWeight="bold" mb={5}>
        กำหนดการกิจกรรมที่ 2 จัดงานมอบรางวัลฯ
      </Text>
      <iframe
        src="https://docs.google.com/viewer?url=https://jbd.coj.go.th/docs/3_กำหนดการมอบรางวัล.pdf&embedded=true"
        width="100%"
        height="400px"
        title="กำหนดการกิจกรรมที่ 2 จัดงานมอบรางวัลฯ"
      ></iframe>

      {/* <ClientPanel /> */}
    </Center>
  );
};

export default ProgramJourneyPage;

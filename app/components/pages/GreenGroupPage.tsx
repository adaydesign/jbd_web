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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

import { BlockTitle, Line } from "~/components/common";

const GreenGroupPage = () => {
  return (
    <Center
      w="full"
      display="flex"
      flexDirection="column"
      py="20px"
      bgColor="palette.container"
      px={{ base: 8, md: 16 }}
    >
      <Flex w="full" mt={2} mb={4} p={5} justify="center" shadow="2xl">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/lj6rC-Eo_sQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Flex>

      <Center w="full" bgColor="palette.container">
        <Accordion defaultIndex={[0]} allowToggle w="full">
          <AccordionItem>
            <h1>
              <AccordionButton _expanded={{ bg: "green", color: "white" }}>
                <Box as="span" flex="1" textAlign="left">
                  <Text as="b" fontSize="20px">
                    Project Summary - Green Team
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h1>
            <AccordionPanel pb={4}>
              <Box p={10} shadow="xl">
                <Center flexDirection="column"></Center>
                       <iframe
                  src="https://docs.google.com/viewer?url=https://jbd.coj.go.th/docs/outcome/green/Project_Summary-Green.pdf&embedded=true"
                  width="100%"
                  height="400px"
                  title="Project Summary"
                ></iframe>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h1>
              <AccordionButton _expanded={{ bg: "green", color: "white" }}>
                <Box as="span" flex="1" textAlign="left">
                  <Text as="b" fontSize="20px">
                    Project Presentation - Green Team
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h1>
            <AccordionPanel pb={4}>
              <Box p={10} shadow="xl">
                <Center flexDirection="column"></Center>
                       <iframe
                  src="https://docs.google.com/viewer?url=https://jbd.coj.go.th/docs/outcome/green/Project_Presentation-Green.pdf&embedded=true"
                  width="100%"
                  height="400px"
                  title="กำหนดการกิจกรรมที่ 1 สัมมนาทางวิชาการฯ"
                ></iframe>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h1>
              <AccordionButton _expanded={{ bg: "green", color: "white" }}>
                <Box as="span" flex="1" textAlign="left">
                  <Text as="b" fontSize="20px">
                    Project Journey - Green Team
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h1>
            <AccordionPanel pb={4}>
              <Box p={10} shadow="xl">
                <Center flexDirection="column"></Center>
                       <iframe
                  src="https://docs.google.com/viewer?url=https://jbd.coj.go.th/docs/outcome/green/Project_Journey-Green.pdf&embedded=true"
                  width="100%"
                  height="400px"
                  title="กำหนดการกิจกรรมที่ 1 สัมมนาทางวิชาการฯ"
                ></iframe>
              </Box>
            </AccordionPanel>
          </AccordionItem>
</Accordion>

      </Center>
     
      <Divider mb={10} />
     

  
    </Center>
  );
};

export default GreenGroupPage;

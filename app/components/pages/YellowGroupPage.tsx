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
  Button,
  Link as CKLink,
} from "@chakra-ui/react";
import { MdOutlineDownloadForOffline } from "react-icons/md";

import { BlockTitle, Line } from "~/components/common";

const YellowGroupPage = () => {
  return (
    <Center
      w="full"
      display="flex"
      flexDirection="column"
      py="20px"
      bgColor="palette.container"
      px={{ base: 3, md: 6 }}
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
              <AccordionButton _expanded={{ bg: "#FFD93D", color: "white" }}>
                <Box as="span" flex="1" textAlign="left">
                  <Text as="b" fontSize="20px">
                    Project Summary 1 - Yellow Team
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h1>
            <AccordionPanel pb={4}>
              <Box p={5} shadow="xl">
                <Center flexDirection="column">


                <CKLink
                    href="https://jbd.coj.go.th/docs/outcome/yellow/Project_Summary1-Yellow.pdf"
                    isExternal
                  >
                    <Button
                      leftIcon={<MdOutlineDownloadForOffline size="30" />}
                      colorScheme="yellow"
                      variant="solid"
                      mb={5}
                    >
                      Download
                    </Button>
                  </CKLink>



                </Center>
                       <iframe
                  src="https://docs.google.com/viewer?url=https://jbd.coj.go.th/docs/outcome/yellow/Project_Summary1-Yellow.pdf&embedded=true"
                  width="100%"
                  height="500px"
                  title="Project Summary 1 - Yellow Team"
                ></iframe>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h1>
              <AccordionButton _expanded={{ bg: "#FFD93D", color: "white" }}>
                <Box as="span" flex="1" textAlign="left">
                  <Text as="b" fontSize="20px">
                    Project Summary 2 - Yellow Team
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h1>
            <AccordionPanel pb={4}>
              <Box p={5} shadow="xl">
                <Center flexDirection="column">

                <CKLink
                    href="https://jbd.coj.go.th/docs/outcome/yellow/Project_Summary2-Yellow.pdf"
                    isExternal
                  >
                    <Button
                      leftIcon={<MdOutlineDownloadForOffline size="30" />}
                      colorScheme="yellow"
                      variant="solid"
                      mb={5}
                    >
                      Download
                    </Button>
                  </CKLink>



                </Center>
                       <iframe
                  src="https://docs.google.com/viewer?url=https://jbd.coj.go.th/docs/outcome/yellow/Project_Summary2-Yellow.pdf&embedded=true"
                  width="100%"
                  height="500px"
                  title="Project Summary 2 - Yellow Team"
                ></iframe>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h1>
              <AccordionButton _expanded={{ bg: "#FFD93D", color: "white" }}>
                <Box as="span" flex="1" textAlign="left">
                  <Text as="b" fontSize="20px">
                    Project Presentation - Yellow Team
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h1>
            <AccordionPanel pb={4}>
              <Box p={5} shadow="xl">
                <Center flexDirection="column">


                <CKLink
                    href="https://jbd.coj.go.th/docs/outcome/yellow/Project_Presentation-Yellow.pdf"
                    isExternal
                  >
                    <Button
                      leftIcon={<MdOutlineDownloadForOffline size="30" />}
                      colorScheme="yellow"
                      variant="solid"
                      mb={5}
                    >
                      Download
                    </Button>
                  </CKLink>



                </Center>
                       <iframe
                  src="https://docs.google.com/viewer?url=https://jbd.coj.go.th/docs/outcome/yellow/Project_Presentation-Yellow.pdf&embedded=true"
                  width="100%"
                  height="500px"
                  title="Project Presentation - Yellow Team"
                ></iframe>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          {/* <AccordionItem>
            <h1>
              <AccordionButton _expanded={{ bg: "#FFD93D", color: "white" }}>
                <Box as="span" flex="1" textAlign="left">
                  <Text as="b" fontSize="20px">
                    Project Journey - Yellow Team
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h1>
            <AccordionPanel pb={4}>
              <Box p={5} shadow="xl">
                <Center flexDirection="column"></Center>
                       <iframe
                  src="https://docs.google.com/viewer?url=https://jbd.coj.go.th/docs/outcome/yellow/Project_Journey-Yellow.pdf&embedded=true"
                  width="100%"
                  height="500px"
                  title="Project Journey - Yellow Team"
                ></iframe>
              </Box>
            </AccordionPanel>
          </AccordionItem> */}
</Accordion>

      </Center>
     
      <Divider mb={10} />
     

  
    </Center>
  );
};

export default YellowGroupPage;

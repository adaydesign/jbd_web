import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"
import { APP_DEV, APP_NAME, APP_NAME_EN } from "~/constants"
import { SocialIconPanel } from "./Header"

const FooterTopPanel = () => {
  return (
    <Flex w="full" direction="column">
      <Heading color="palette.secondary">Justice by Design</Heading>
      <Box
        h="3px"
        w={{ base: "full", md: "40%" }}
        bgColor="palette.main"
        my={6}
      />
      <Text w={{ base: "full", md: "40%" }} fontSize="19px" color="white">
        Creating Justice Initiative through Design Thinking Process.
      </Text>
    </Flex>
  )
}

const FooterBottomPanel = () => {
  return (
    <Flex
      w="full"
      justify={{ base: "center", md: "space-between" }}
      direction={{ base: "column", md: "row" }}
      align="center"
    >
      <Image src="/images/Logo_jbd_footer.png" width="209" height="50" />
      <Box boxSize="20px" display={{ base: "block", md: "none" }} />
      <SocialIconPanel />
      <Box boxSize="20px" display={{ base: "block", md: "none" }} />
      <VStack>
        <Text color="white">
          CopyrightÂ©2022 <strong>{APP_NAME_EN}</strong>
        </Text>
        <Text color="white">{APP_DEV}</Text>
      </VStack>
    </Flex>
  )
}

const Footer = () => {
  return (
    <Flex
      w="full"
      bgColor="palette.footer"
      direction="column"
      px={{ base: 8, md: 16 }}
      pt={5}
      pb={8}
    >
      <FooterTopPanel />
      <Divider my={8} />
      <FooterBottomPanel />
    </Flex>
  )
}

export default Footer

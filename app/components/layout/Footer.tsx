import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"
import { APP_DEV, APP_NAME } from "~/constants"
import { SocialIconPanel } from "./Header"

const FooterTopPanel = () => {
  return (
    <Flex w="full" direction="column">
      <Heading color="palette.secondary">About Justice by Design</Heading>
      <Box h="3px" w="160px" bgColor="green" my={6} />
      <Text w="40%" fontSize="19px" color="white">
      Creating Justice Initiative through Design Thinking Process.
      </Text>
    </Flex>
  )
}

const FooterBottomPanel = () => {
  return (
    <Flex w="full" justify="space-between">
      <Image src="/images/Logo_jbd_footer.png" width="209" height="50" />
      <SocialIconPanel />
      <VStack>
        <Text color="white">
          Copyright©2022 <strong>{APP_NAME}</strong>
        </Text>
        <Text color="white">{APP_DEV}</Text>
      </VStack>
    </Flex>
  )
}

const Footer = () => {
  return (
    <Flex w="full" bgColor="palette.footer" direction="column" px={16} pt={16} pb={8}>
      <FooterTopPanel />
      <Divider my={8} />
      <FooterBottomPanel />
    </Flex>
  )
}

export default Footer

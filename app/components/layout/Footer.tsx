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
      <Heading color="white">About Justice by Design</Heading>
      <Box h="3px" w="160px" bgColor="green" my={6} />
      <Text w="40%" fontSize="25px" color="white">
        It is a long established fact that reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum
      </Text>
    </Flex>
  )
}

const FooterBottomPanel = () => {
  return (
    <Flex w="full" justify="space-between">
      <Image src="/images/logo22.png" />
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
    <Flex w="full" bgColor="blue.900" direction="column" p={16}>
      <FooterTopPanel />
      <Divider my={8} />
      <FooterBottomPanel />
    </Flex>
  )
}

export default Footer

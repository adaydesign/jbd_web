import { Center, Flex, Icon, Link, Spacer, Text } from "@chakra-ui/react"
import { Header, Body, Footer } from "~/components/layout"
import { BsFillXCircleFill } from "react-icons/bs"
import { useCatch, Link as ReactLink } from "@remix-run/react"

const CatchErrorLayout = () => {
  const caught = useCatch()

  return (
    <Flex w="full" direction="column" minH="100vh">
      <Header />
      <Body>
        <Center w="full" h="80vh">
          <Flex direction="column" w="fit-content" align="center">
            <Icon
              as={BsFillXCircleFill}
              boxSize="150px"
              color="gray.300"
              mb={6}
            />
            <Text fontSize="30px" color="gray.800">
              {caught.status}
            </Text>
            <Text fontSize="40px" color="gray.500">
              {caught.statusText}
            </Text>
            <Text color="gray.800">
              <Link as={ReactLink} to="/">
                กลับสู่หน้าแรก
              </Link>
            </Text>
          </Flex>
        </Center>
      </Body>
      <Spacer bgColor="palette.body" />
      <Footer />
    </Flex>
  )
}

export default CatchErrorLayout

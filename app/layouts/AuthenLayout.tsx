import { Button, Flex, Spacer, Text } from "@chakra-ui/react"
import { Form } from "@remix-run/react"
import { Header, Body, Footer } from "~/components/layout"
import { useUserContext } from "~/contexts/UserContext"
import { Link } from "@remix-run/react"

type PublicLayoutProps = {
  children?: React.ReactNode
}

const AuthenLayout = ({ children }: PublicLayoutProps) => {
  const userData: any = useUserContext()
  return (
    <Flex w="full" direction="column" minH="100vh">
      <Header />
      <Flex
        bgColor="palette.main"
        w="full"
        justify="flex-end"
        p={4}
        align="center"
      >
        <Text color="white" as={Link} to="/_" size="sm">
          For Administrator -{" "}
        </Text>
        <Text color="white" ml={4} fontWeight="bold">
          {userData.user_fullname}
        </Text>
        <Form action="/logout" method="post">
          <Button colorScheme="red" size="sm" ml={4} type="submit">
            Logout
          </Button>
        </Form>
      </Flex>
      <Body>{children}</Body>
      <Spacer bgColor="palette.body" />
      <Footer />
    </Flex>
  )
}

export default AuthenLayout

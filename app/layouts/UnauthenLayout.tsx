import { Center, Flex, Icon, Link, Spacer, Text } from "@chakra-ui/react"
import { Header, Body, Footer } from "~/components/layout"
import { BsShieldLock } from "react-icons/bs"
import { APP_REDIRECT_URL, APP_REDIRECT_DELAY } from "~/constants"
import { useMemo, useState } from "react"
import { useEffect } from "react"

type UnauthenLayoutProps = {
  action: string
}
const UnauthenLayout = ({ action }: UnauthenLayoutProps) => {
  const [count, setCount] = useState(APP_REDIRECT_DELAY)

  const actionMessage = useMemo(() => {
    if (action === "logout") {
      return "กำลังออกจากระบบ"
    } else {
      return "ท่านไม่ได้รับสิทธิการเข้าใช้งานหน้านี้"
    }
  }, [action])

  useEffect(() => {
    setTimeout(() => {
      if (count > 1) {
        setCount(count - 1)
      } else {
        if (action === "logout") {
          window.location.replace("/")
        } else {
          window.location.replace(APP_REDIRECT_URL)
        }
      }
    }, 1000)
  }, [count])

  return (
    <Flex w="full" direction="column" minH="100vh">
      <Header />
      <Body>
        <Center w="full" h="80vh">
          <Flex direction="column" w="fit-content" align="center">
            <Icon as={BsShieldLock} boxSize="150px" color="gray.300" mb={6} />
            <Text fontSize="30px" color="gray.500">
              {actionMessage}
            </Text>
            <Text>ระบบกำหนดเปลี่ยนกลับไปหน้าหลัก...{count}</Text>
          </Flex>
        </Center>
      </Body>
      <Spacer bgColor="palette.body" />
      <Footer />
    </Flex>
  )
}

export default UnauthenLayout

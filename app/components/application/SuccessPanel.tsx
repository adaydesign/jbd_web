import { Box, Button, Center, Flex, Icon, Text, VStack } from "@chakra-ui/react"
import { Link } from "@remix-run/react"
import { RiStarLine } from "react-icons/ri"

const SuccessPanel = () => {
  return (
    <Flex w="full" p={{ base: 4, md: 10 }} bgColor="green.50">
      <Center w="full" flexDirection="column">
        <Icon as={RiStarLine} boxSize="60px" color="green.700" />
        <VStack mt={2}>
          <Text
            fontSize="20px"
            color="green"
            fontWeight="bold"
            textAlign="center"
          >
            ท่านได้ส่งใบสมัครเข้าร่วมโครงการเรียบร้อยแล้ว
            เราจะทำการแจ้งผลการสมัครภายหลัง
          </Text>
          <Text fontSize="20px" textAlign="center">
            Thank you for submitting application, we will be in touch shortly.
          </Text>
          <Box h="100px" />
          <Link to="/">
            <Button colorScheme="menu">กลับหน้าแรก</Button>
          </Link>
        </VStack>
      </Center>
    </Flex>
  )
}

export default SuccessPanel

import { Center, Flex, Text, VStack } from "@chakra-ui/react"

const NoticePanel = () => {
  return (
    <Flex w="full" p={{ base: 4, md: 10 }}>
      <Center w="full" flexDirection="column" bgColor="palette.body3" p={6}>
        <VStack mt={2}>
          <Text color="red" fontWeight="bold" textAlign="center">
            โปรดกรอกข้อมูลตามความเป็นจริงและตรวจสอบความถูกต้องก่อนทำการยื่นสมัคร
          </Text>
          <Text textAlign="center">
            **เมื่อกด “ยืนยันการสมัคร” แล้ว ข้อมูลดังกล่าวไม่สามารถแก้ไขได้
          </Text>
        </VStack>
      </Center>
    </Flex>
  )
}

export default NoticePanel

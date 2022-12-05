import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Spacer,
} from "@chakra-ui/react"
import FormLayout from "./FormLayout"

const FormStep2ButtonControl = () => {
  return (
    <>
      <Button>ก่อนหน้า</Button>
      <Spacer />
      <Button>ถัดไป</Button>
    </>
  )
}

const FormStep2 = () => {
  return (
    <FormLayout buttonControl={<FormStep2ButtonControl />}>
      <HStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>ที่อยู่ที่ประสงค์ใช้ติดต่อ</FormLabel>
          <Input type="text" />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl isRequired>
          <FormLabel>หมายเลขโทรศัพท์ที่ประสงค์ใช้ติดต่อ</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>หมายเลขโทรศัพท์ฉุกเฉิน</FormLabel>
          <Input type="text" />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl isRequired>
          <FormLabel>Email ที่ประสงค์ใช้ติดต่อ</FormLabel>
          <Input type="email" />
        </FormControl>
      </HStack>
    </FormLayout>
  )
}

export default FormStep2

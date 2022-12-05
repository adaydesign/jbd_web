import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Spacer,
} from "@chakra-ui/react"
import { useFormStepContext } from "~/contexts/FormStepContext"
import FormLayout from "./FormLayout"

const FormStep1ButtonControl = () => {
  const { setStep } = useFormStepContext()
  const onChangeStepHandle = () => {
    setStep(2)
  }
  return (
    <>
      <Spacer />
      <Button onClick={onChangeStepHandle}>ถัดไป</Button>
    </>
  )
}

const FormStep1 = () => {
  return (
    <FormLayout buttonControl={<FormStep1ButtonControl />}>
      <HStack spacing={4}>
        <FormControl>
          <FormLabel>คำนำหน้า</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>ชื่อ</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>นามสกุล</FormLabel>
          <Input type="text" />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>วัน เดือน ปีเกิด</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>อายุ</FormLabel>
          <Input type="text" />
        </FormControl>
      </HStack>
    </FormLayout>
  )
}

export default FormStep1

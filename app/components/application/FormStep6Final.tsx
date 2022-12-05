import {
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react"
import { useFormStepContext } from "~/contexts/FormStepContext"
import FormLayout from "./FormLayout"

const FormStep6ButtonControl = () => {
  const { setStep } = useFormStepContext()
  const onChangeStepHandle = () => {
    setStep(5)
  }
  return (
    <>
      <Button onClick={onChangeStepHandle}>ก่อนหน้า</Button>
      <Spacer />
      <Button>ยืนยันการสมัคร</Button>
    </>
  )
}

const FormStep6Final = () => {
  return (
    <FormLayout buttonControl={<FormStep6ButtonControl />}>
      <HStack spacing={4}>
        <FormControl>
          <FormLabel>ช่องทางออนไลน์</FormLabel>
          <CheckboxGroup colorScheme="green">
            <Stack direction="column">
              <Checkbox value="">Facebook</Checkbox>
              <Checkbox value="">Instagram</Checkbox>
              <Checkbox value="">Twitter</Checkbox>
              <Checkbox value="">Email</Checkbox>
              <Checkbox value="">Website ศาลยุติธรรม</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
      </HStack>

      <VStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>ได้รับการแนะนำจาก</FormLabel>
          <CheckboxGroup colorScheme="green">
            <Stack direction="column">
              <Checkbox value="">เพื่อนร่วมงาน</Checkbox>
              <Checkbox value="">อาจารย์</Checkbox>
              <Checkbox value="">บุคลากรของศาลยุติธรรม</Checkbox>
              <Checkbox value="">Email</Checkbox>
              <Checkbox value="">อื่นๆ (โปรดระบุ)</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl>
          <Input type="text" placeholder="อื่นๆ (โปรดระบุ)" />
        </FormControl>
      </VStack>
    </FormLayout>
  )
}

export default FormStep6Final

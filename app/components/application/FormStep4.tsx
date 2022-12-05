import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Spacer,
} from "@chakra-ui/react"
import { useFormStepContext } from "~/contexts/FormStepContext"
import FormLayout from "./FormLayout"

const FormStep4ButtonControl = () => {
  const { setStep } = useFormStepContext()
  const onChangeStepHandle = (v: number) => {
    setStep(v)
  }
  return (
    <>
      <Button onClick={() => onChangeStepHandle(3)}>ก่อนหน้า</Button>
      <Spacer />
      <Button onClick={() => onChangeStepHandle(5)}>ถัดไป</Button>
    </>
  )
}

const FormStep4 = () => {
  return (
    <FormLayout buttonControl={<FormStep4ButtonControl />}>
      <HStack spacing={4}>
        <FormControl>
          <FormLabel>ตำแหน่ง</FormLabel>
          <Input type="text" />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>องค์กร</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>อายุการทำงาน</FormLabel>
          <Input type="text" placeholder="เช่น 3 ปี 4 เดือน" />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>
            กรุณาระบุข้อมูลโดยสังเขปเกี่ยวกับลักษณะงานที่รับผิดชอบ
          </FormLabel>
          <Input type="text" />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl>
          <Checkbox>ข้าพเจ้าอยู่ระหว่างการศึกษาในสถาบันศึกษา</Checkbox>
        </FormControl>
      </HStack>
    </FormLayout>
  )
}

export default FormStep4

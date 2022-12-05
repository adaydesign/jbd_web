import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Spacer,
} from "@chakra-ui/react"
import FormLayout from "./FormLayout"

const FormStep4ButtonControl = () => {
  return (
    <>
      <Button>ก่อนหน้า</Button>
      <Spacer />
      <Button>ถัดไป</Button>
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

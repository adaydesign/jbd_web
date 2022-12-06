import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Spacer,
} from "@chakra-ui/react"
import { Controller, useFormContext } from "react-hook-form"
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
  const { control } = useFormContext()
  return (
    <FormLayout buttonControl={<FormStep4ButtonControl />}>
      <HStack spacing={4}>
        <FormControl>
          <FormLabel>ตำแหน่ง</FormLabel>
          <Controller
            name="position"
            control={control}
            render={({ field }) => <Input type="text" {...field} />}
          />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>องค์กร</FormLabel>
          <Controller
            name="org"
            control={control}
            render={({ field }) => <Input type="text" {...field} />}
          />
        </FormControl>
        <FormControl>
          <FormLabel>อายุการทำงาน</FormLabel>
          <Controller
            name="work_age"
            control={control}
            render={({ field }) => (
              <Input type="text" placeholder="เช่น 3 ปี 4 เดือน" {...field} />
            )}
          />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>
            กรุณาระบุข้อมูลโดยสังเขปเกี่ยวกับลักษณะงานที่รับผิดชอบ
          </FormLabel>
          <Controller
            name="working_desc"
            control={control}
            render={({ field }) => <Input type="text" {...field} />}
          />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl>
          <Controller
            name="study"
            control={control}
            render={({ field }) => (
              <Checkbox {...field}>
                ข้าพเจ้าอยู่ระหว่างการศึกษาในสถาบันศึกษา
              </Checkbox>
            )}
          />
        </FormControl>
      </HStack>
    </FormLayout>
  )
}

export default FormStep4

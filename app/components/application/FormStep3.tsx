import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Spacer,
} from "@chakra-ui/react"
import { useFormStepContext } from "~/contexts/FormStepContext"
import FormLayout from "./FormLayout"

const FormStep3ButtonControl = () => {
  const { setStep } = useFormStepContext()
  const onChangeStepHandle = (v: number) => {
    setStep(v)
  }
  return (
    <>
      <Button onClick={() => onChangeStepHandle(2)}>ก่อนหน้า</Button>
      <Spacer />
      <Button onClick={() => onChangeStepHandle(4)}>ถัดไป</Button>
    </>
  )
}

const FormStep3 = () => {
  return (
    <FormLayout buttonControl={<FormStep3ButtonControl />}>
      <HStack spacing={4}>
        <FormControl>
          <FormLabel>
            กรณีสำเร็จการศึกษา กรุณาระบุ หลักสูตรและปีที่สำเร็จการศึกษา
          </FormLabel>
          <Input type="text" />
        </FormControl>
      </HStack>

      <HStack spacing={4}>
        <FormControl>
          <FormLabel>
            กรณีอยู่ระหว่างการศึกษา กรุณาระบุ มหาวิทยาลัย คณะ สำนักวิชา สาขา
            และชั้นปีที่เรียน
          </FormLabel>
          <Input type="text" />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>
            กรุณาแนบ CV / Resume ภาษาไทยหรือภาษาอังกฤษ (หากมี)
          </FormLabel>
          <Input type="file" />
          <FormHelperText>
            (แนะนำการตั้งชื่อไฟล์โดยใช้ชื่อ-นามสกุล เช่น manee_choojai.pdf)
          </FormHelperText>
        </FormControl>
      </HStack>
    </FormLayout>
  )
}

export default FormStep3

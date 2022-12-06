import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Spacer,
} from "@chakra-ui/react"
import { useMemo } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { useFormStepContext } from "~/contexts/FormStepContext"
import FormLayout from "./FormLayout"

const FormStep1ButtonControl = () => {
  const { setStep } = useFormStepContext()
  const { watch } = useFormContext()
  const enable = useMemo(() => {
    return watch("first_name") && watch("last_name")
  }, [watch("first_name"), watch("last_name")])

  const onChangeStepHandle = () => {
    setStep(2)
  }
  return (
    <>
      <Spacer />
      <Button onClick={onChangeStepHandle} isDisabled={!enable}>
        ถัดไป
      </Button>
    </>
  )
}

const FormStep1 = () => {
  const { control } = useFormContext()
  return (
    <FormLayout buttonControl={<FormStep1ButtonControl />}>
      <HStack spacing={4}>
        <FormControl>
          <FormLabel>คำนำหน้า</FormLabel>

          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Select defaultValue="ไม่ประสงค์ระบุ" {...field}>
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
                <option value="ไม่ประสงค์ระบุ">ไม่ประสงค์ระบุ</option>
              </Select>
            )}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>ชื่อ</FormLabel>
          <Controller
            name="first_name"
            control={control}
            render={({ field }) => <Input type="text" {...field} />}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>นามสกุล</FormLabel>
          <Controller
            name="last_name"
            control={control}
            render={({ field }) => <Input type="text" {...field} />}
          />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>วัน เดือน ปีเกิด</FormLabel>
          <Controller
            name="birth_date"
            control={control}
            render={({ field }) => <Input type="date" {...field} />}
          />
        </FormControl>
        <FormControl>
          <FormLabel>อายุ</FormLabel>
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <Input type="number" min={0} max={90} {...field} />
            )}
          />
        </FormControl>
      </HStack>
    </FormLayout>
  )
}

export default FormStep1

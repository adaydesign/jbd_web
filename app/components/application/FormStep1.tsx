import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Select,
  Spacer,
} from "@chakra-ui/react"
import { useEffect, useMemo } from "react"
import { Controller, useFormContext, useWatch } from "react-hook-form"
import { useFormStepContext } from "~/contexts/FormStepContext"
import FormLayout from "./FormLayout"

const FormStep1ButtonControl = () => {
  const { setStep } = useFormStepContext()
  const {
    watch,
    formState: { errors },
  } = useFormContext()
  const enable = useMemo(() => {
    return (
      watch("first_name") &&
      watch("last_name") &&
      !errors.first_name &&
      !errors.last_name
    )
  }, [watch("first_name"), watch("last_name"), errors])

  const onChangeStepHandle = () => {
    setStep(2)
  }
  return (
    <>
      <Spacer />
      <Button
        onClick={onChangeStepHandle}
        isDisabled={!enable}
        colorScheme="menu"
      >
        ถัดไป
      </Button>
    </>
  )
}

const FormStep1 = () => {
  const { control, watch, setValue } = useFormContext()
  const {
    formState: { errors },
  } = useFormContext()

  useEffect(() => {
    const bd = watch("birth_date")
    if (bd) {
      const cy = new Date().getFullYear()
      const bdy = new Date(bd).getFullYear()
      const y = Math.abs(cy - bdy)
      setValue("age", y)
    }
  }, [watch("birth_date")])
  return (
    <FormLayout buttonControl={<FormStep1ButtonControl />}>
      <HStack spacing={4} align="flex-start">
        <FormControl isRequired>
          <FormLabel>คำนำหน้า</FormLabel>
          <Controller
            name="title"
            defaultValue={"-"}
            control={control}
            rules={{
              required: {
                value: true,
                message: "กรุณาระบบข้อมูล",
              },
            }}
            render={({ field }) => (
              <Select {...field}>
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
                <option value="-">ไม่ประสงค์ระบุ</option>
              </Select>
            )}
          />
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.first_name}>
          <FormLabel>ชื่อ</FormLabel>
          <Controller
            name="first_name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "กรุณาระบบข้อมูล",
              },
              maxLength: {
                value: 100,
                message: "ขนาดข้อความยาวเกินกำหนด 100 ตัวอักษร",
              },
            }}
            render={({ field }) => <Input type="text" {...field} />}
          />
          <FormErrorMessage>
            {errors.first_name?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.last_name}>
          <FormLabel>นามสกุล</FormLabel>
          <Controller
            name="last_name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "กรุณาระบบข้อมูล",
              },
              maxLength: {
                value: 100,
                message: "ขนาดข้อความยาวเกินกำหนด 100 ตัวอักษร",
              },
            }}
            render={({ field }) => <Input type="text" {...field} />}
          />
          <FormErrorMessage>
            {errors.last_name?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4} align="flex-start">
        <FormControl>
          <FormLabel>วัน เดือน ปีเกิด</FormLabel>
          <Controller
            name="birth_date"
            control={control}
            render={({ field }) => <Input type="date" {...field} />}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.age}>
          <FormLabel>อายุ (ปี)</FormLabel>
          <Controller
            name="age"
            control={control}
            rules={{
              min: { value: 0, message: "กรุณากรอกอายุมากกว่า 0 ปี" },
              max: {
                value: 100,
                message: "กรุณากรอกอายุไม่เกิน 100 ปี",
              },
            }}
            render={({ field }) => <Input type="number" {...field} />}
          />
          <FormErrorMessage>{errors.age?.message?.toString()}</FormErrorMessage>
        </FormControl>
      </HStack>
    </FormLayout>
  )
}

export default FormStep1

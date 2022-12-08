import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Spacer,
} from "@chakra-ui/react"
import { useMemo } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { useFormStepContext } from "~/contexts/FormStepContext"
import FormLayout from "./FormLayout"

const FormStep2ButtonControl = () => {
  const { setStep } = useFormStepContext()
  const {
    watch,
    formState: { errors },
  } = useFormContext()
  const enable = useMemo(() => {
    return (
      watch("address") &&
      watch("tel") &&
      watch("emer_tel") &&
      watch("email") &&
      !errors.address &&
      !errors.tel &&
      !errors.emer_tel &&
      !errors.email
    )
  }, [
    watch("address"),
    watch("tel"),
    watch("emer_tel"),
    watch("email"),
    errors,
  ])

  const onChangeStepHandle = (v: number) => {
    setStep(v)
  }
  return (
    <>
      <Button onClick={() => onChangeStepHandle(1)}>ก่อนหน้า</Button>
      <Spacer />
      <Button onClick={() => onChangeStepHandle(3)} isDisabled={!enable}>
        ถัดไป
      </Button>
    </>
  )
}

const FormStep2 = () => {
  const { control } = useFormContext()
  const {
    formState: { errors },
  } = useFormContext()
  return (
    <FormLayout buttonControl={<FormStep2ButtonControl />}>
      <HStack spacing={4} align="flex-start">
        <FormControl isRequired isInvalid={!!errors.address}>
          <FormLabel>ที่อยู่ที่ประสงค์ใช้ติดต่อ</FormLabel>
          <Controller
            name="address"
            control={control}
            rules={{
              required: {
                value: true,
                message: "กรุณาระบบข้อมูล",
              },
              maxLength: {
                value: 190,
                message: "ขนาดข้อความยาวเกินกำหนด 190 ตัวอักษร",
              },
            }}
            render={({ field }) => <Input type="text" {...field} />}
          />
          <FormErrorMessage>
            {errors.address?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4} align="flex-start">
        <FormControl isRequired isInvalid={!!errors.tel}>
          <FormLabel>หมายเลขโทรศัพท์ที่ประสงค์ใช้ติดต่อ</FormLabel>
          <Controller
            name="tel"
            control={control}
            rules={{
              required: {
                value: true,
                message: "กรุณาระบบข้อมูล",
              },
              maxLength: {
                value: 20,
                message: "ขนาดข้อความยาวเกินกำหนด 20 ตัวอักษร",
              },
            }}
            render={({ field }) => <Input type="text" {...field} />}
          />
          <FormErrorMessage>{errors.tel?.message?.toString()}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.emer_tel}>
          <FormLabel>หมายเลขโทรศัพท์ฉุกเฉิน</FormLabel>
          <Controller
            name="emer_tel"
            control={control}
            rules={{
              required: {
                value: true,
                message: "กรุณาระบบข้อมูล",
              },
              maxLength: {
                value: 20,
                message: "ขนาดข้อความยาวเกินกำหนด 20 ตัวอักษร",
              },
            }}
            render={({ field }) => <Input type="text" {...field} />}
          />
          <FormErrorMessage>
            {errors.emer_tel?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl isRequired isInvalid={!!errors.email}>
          <FormLabel>Email ที่ประสงค์ใช้ติดต่อ</FormLabel>
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: "กรุณาระบบข้อมูล",
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message:
                  "กรุณากรอก Email ตามรูปแบบที่ถูกต้อง เช่น yourmail@mail.com",
              },
              maxLength: {
                value: 120,
                message: "ขนาดข้อความยาวเกินกำหนด 120 ตัวอักษร",
              },
            }}
            render={({ field }) => <Input type="email" {...field} />}
          />
          <FormErrorMessage>
            {errors.email?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
      </HStack>
    </FormLayout>
  )
}

export default FormStep2

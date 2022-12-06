import {
  Button,
  FormControl,
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

  const { watch } = useFormContext()
  const enable = useMemo(() => {
    return (
      watch("address") && watch("tel") && watch("emer_tel") && watch("email")
    )
  }, [watch("address"), watch("tel"), watch("emer_tel"), watch("email")])

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
  return (
    <FormLayout buttonControl={<FormStep2ButtonControl />}>
      <HStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>ที่อยู่ที่ประสงค์ใช้ติดต่อ</FormLabel>
          <Controller
            name="address"
            control={control}
            render={({ field }) => <Input type="text" {...field} />}
          />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl isRequired>
          <FormLabel>หมายเลขโทรศัพท์ที่ประสงค์ใช้ติดต่อ</FormLabel>
          <Controller
            name="tel"
            control={control}
            render={({ field }) => <Input type="text" {...field} />}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>หมายเลขโทรศัพท์ฉุกเฉิน</FormLabel>
          <Controller
            name="emer_tel"
            control={control}
            render={({ field }) => <Input type="text" {...field} />}
          />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl isRequired>
          <FormLabel>Email ที่ประสงค์ใช้ติดต่อ</FormLabel>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input type="email" {...field} />}
          />
        </FormControl>
      </HStack>
    </FormLayout>
  )
}

export default FormStep2

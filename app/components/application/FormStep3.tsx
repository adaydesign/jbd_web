import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Spacer,
  Stack,
} from "@chakra-ui/react"
import { useMemo } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { useFormStepContext } from "~/contexts/FormStepContext"
import FormLayout from "./FormLayout"

const FormStep3ButtonControl = () => {
  const { setStep } = useFormStepContext()
  const {
    watch,
    formState: { errors },
  } = useFormContext()

  const enable = useMemo(() => {
    return !errors.edu_1 && !errors.edu_2
  }, [watch("edu_1"), watch("edu_2"), errors])

  const onChangeStepHandle = (v: number) => {
    setStep(v)
  }
  return (
    <>
      <Button onClick={() => onChangeStepHandle(2)} colorScheme="menu">
        ก่อนหน้า
      </Button>
      <Spacer />
      <Button
        onClick={() => onChangeStepHandle(4)}
        isDisabled={!enable}
        colorScheme="menu"
      >
        ถัดไป
      </Button>
    </>
  )
}

const FormStep3 = () => {
  const { control } = useFormContext()
  const {
    formState: { errors },
  } = useFormContext()
  return (
    <FormLayout buttonControl={<FormStep3ButtonControl />}>
      <Stack
        spacing={4}
        align="flex-start"
        direction={{ base: "column", md: "row" }}
      >
        <FormControl isInvalid={!!errors.edu_1}>
          <FormLabel>
            กรณีสำเร็จการศึกษา กรุณาระบุ หลักสูตรและปีที่สำเร็จการศึกษา
          </FormLabel>
          <Controller
            name="edu_1"
            control={control}
            rules={{
              maxLength: {
                value: 190,
                message: "ขนาดข้อความยาวเกินกำหนด 190 ตัวอักษร",
              },
            }}
            render={({ field }) => <Input type="text" {...field} />}
          />
          <FormErrorMessage>
            {errors.edu_1?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
      </Stack>

      <Stack
        spacing={4}
        mt={4}
        align="flex-start"
        direction={{ base: "column", md: "row" }}
      >
        <FormControl isInvalid={!!errors.edu_2}>
          <FormLabel>
            กรณีอยู่ระหว่างการศึกษา กรุณาระบุ มหาวิทยาลัย คณะ สำนักวิชา สาขา
            และชั้นปีที่เรียน
          </FormLabel>
          <Controller
            name="edu_2"
            control={control}
            rules={{
              maxLength: {
                value: 190,
                message: "ขนาดข้อความยาวเกินกำหนด 190 ตัวอักษร",
              },
            }}
            render={({ field }) => <Input type="text" {...field} />}
          />
          <FormErrorMessage>
            {errors.edu_2?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
      </Stack>

      <Stack
        spacing={4}
        mt={4}
        align="flex-start"
        direction={{ base: "column", md: "row" }}
      >
        <FormControl>
          <FormLabel>
            กรุณาแนบ CV / Resume ภาษาไทยหรือภาษาอังกฤษ (หากมี)
          </FormLabel>
          <Input name="cv_file" type="file" />
          <FormHelperText>
            แนะนำการตั้งชื่อไฟล์โดยใช้ชื่อ-นามสกุล เช่น manee_choojai.pdf
            และใช้เฉพาะไฟล์ PDF ขนาดไม่เกิน 5 MB เท่านั้น
          </FormHelperText>
        </FormControl>
      </Stack>
    </FormLayout>
  )
}

export default FormStep3

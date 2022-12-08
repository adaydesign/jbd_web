import {
  Button,
  Checkbox,
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

const FormStep4ButtonControl = () => {
  const { setStep } = useFormStepContext()
  const {
    watch,
    formState: { errors },
  } = useFormContext()

  const enable = useMemo(() => {
    return (
      !errors.position &&
      !errors.org &&
      !errors.work_age &&
      !errors.working_desc
    )
  }, [
    watch("position"),
    watch("org"),
    watch("work_age"),
    watch("working_desc"),
    errors,
  ])

  const onChangeStepHandle = (v: number) => {
    setStep(v)
  }
  return (
    <>
      <Button onClick={() => onChangeStepHandle(3)} colorScheme="menu">
        ก่อนหน้า
      </Button>
      <Spacer />
      <Button
        onClick={() => onChangeStepHandle(5)}
        isDisabled={!enable}
        colorScheme="menu"
      >
        ถัดไป
      </Button>
    </>
  )
}

const FormStep4 = () => {
  const { control } = useFormContext()
  const {
    formState: { errors },
  } = useFormContext()
  return (
    <FormLayout buttonControl={<FormStep4ButtonControl />}>
      <HStack spacing={4} align="flex-start">
        <FormControl isInvalid={!!errors.position}>
          <FormLabel>ตำแหน่ง</FormLabel>
          <Controller
            name="position"
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
            {errors.position?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4} align="flex-start">
        <FormControl isInvalid={!!errors.org}>
          <FormLabel>องค์กร</FormLabel>
          <Controller
            name="org"
            control={control}
            rules={{
              maxLength: {
                value: 190,
                message: "ขนาดข้อความยาวเกินกำหนด 190 ตัวอักษร",
              },
            }}
            render={({ field }) => <Input type="text" {...field} />}
          />
          <FormErrorMessage>{errors.org?.message?.toString()}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.work_age}>
          <FormLabel>อายุการทำงาน</FormLabel>
          <Controller
            name="work_age"
            control={control}
            rules={{
              maxLength: {
                value: 100,
                message: "ขนาดข้อความยาวเกินกำหนด 100 ตัวอักษร",
              },
            }}
            render={({ field }) => (
              <Input type="text" placeholder="เช่น 3 ปี 4 เดือน" {...field} />
            )}
          />
          <FormErrorMessage>
            {errors.work_age?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4} align="flex-start">
        <FormControl isInvalid={!!errors.working_desc}>
          <FormLabel>
            กรุณาระบุข้อมูลโดยสังเขปเกี่ยวกับลักษณะงานที่รับผิดชอบ
          </FormLabel>
          <Controller
            name="working_desc"
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
            {errors.working_desc?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4} align="flex-start">
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

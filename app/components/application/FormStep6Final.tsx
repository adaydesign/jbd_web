import {
  Button,
  Checkbox,
  CheckboxGroup,
  Collapse,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react"
import { useMemo } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { useFormStepContext } from "~/contexts/FormStepContext"
import FormLayout from "./FormLayout"

const FormStep6ButtonControl = () => {
  const { setStep } = useFormStepContext()
  const {
    watch,
    formState: { errors },
  } = useFormContext()

  const enable = useMemo(() => {
    let suggNoteEnable = false

    if (!watch("sugg_other")) {
      suggNoteEnable = true
    } else if (watch("sugg_other") && !errors.sugg_note) {
      suggNoteEnable = true
    }

    return suggNoteEnable
  }, [watch("sugg_other"), watch("sugg_note"), errors])

  const onChangeStepHandle = () => {
    setStep(5)
  }

  return (
    <>
      <Button onClick={onChangeStepHandle} colorScheme="menu">
        ก่อนหน้า
      </Button>
      <Spacer />
      <Button type="submit" isDisabled={!enable} colorScheme="blue">
        ยืนยันการสมัคร
      </Button>
    </>
  )
}

const FormStep6Final = () => {
  const { control, watch } = useFormContext()
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <FormLayout buttonControl={<FormStep6ButtonControl />}>
      <HStack spacing={4}>
        <FormControl>
          <FormLabel>ช่องทางออนไลน์</FormLabel>
          <Stack direction="column">
            <Controller
              name="online_facebook"
              control={control}
              render={({ field }) => <Checkbox {...field}>Facebook</Checkbox>}
            />
            <Controller
              name="online_instagram"
              control={control}
              render={({ field }) => <Checkbox {...field}>Instagram</Checkbox>}
            />
            <Controller
              name="online_twitter"
              control={control}
              render={({ field }) => <Checkbox {...field}>Twitter</Checkbox>}
            />
            <Controller
              name="online_email"
              control={control}
              render={({ field }) => <Checkbox {...field}>Email</Checkbox>}
            />
            <Controller
              name="online_website"
              control={control}
              render={({ field }) => (
                <Checkbox {...field}>Website ศาลยุติธรรม</Checkbox>
              )}
            />
          </Stack>
        </FormControl>
      </HStack>

      <VStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>ได้รับการแนะนำจาก</FormLabel>
          <Stack direction="column">
            <Controller
              name="sugg_colleague"
              control={control}
              render={({ field }) => (
                <Checkbox {...field}>เพื่อนร่วมงาน</Checkbox>
              )}
            />
            <Controller
              name="sugg_teacher"
              control={control}
              render={({ field }) => <Checkbox {...field}>อาจารย์</Checkbox>}
            />
            <Controller
              name="sugg_officer"
              control={control}
              render={({ field }) => (
                <Checkbox {...field}>บุคลากรของศาลยุติธรรม</Checkbox>
              )}
            />
            <Controller
              name="sugg_email"
              control={control}
              render={({ field }) => <Checkbox {...field}>Email</Checkbox>}
            />
            <Controller
              name="sugg_other"
              control={control}
              render={({ field }) => (
                <Checkbox {...field}>อื่นๆ (โปรดระบุ)</Checkbox>
              )}
            />
          </Stack>
        </FormControl>
        <Collapse in={watch("sugg_other")} style={{ width: "100%" }}>
          <FormControl isInvalid={!!errors.sugg_note}>
            <Controller
              name="sugg_note"
              control={control}
              rules={{
                maxLength: {
                  value: 100,
                  message: "ขนาดข้อความยาวเกินกำหนด 100 ตัวอักษร",
                },
              }}
              render={({ field }) => (
                <Input type="text" placeholder="อื่นๆ (โปรดระบุ)" {...field} />
              )}
            />
            <FormErrorMessage>
              {errors.sugg_note?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
        </Collapse>
      </VStack>
    </FormLayout>
  )
}

export default FormStep6Final

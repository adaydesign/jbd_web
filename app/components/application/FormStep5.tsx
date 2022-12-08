import {
  Button,
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

const FormStep5ButtonControl = () => {
  const { setStep } = useFormStepContext()
  const {
    watch,
    formState: { errors },
  } = useFormContext()
  const enable = useMemo(() => {
    let join = false

    if (watch("join") == "1") {
      join = true
    } else if (watch("join") == "2" && !errors.join_note) {
      join = true
    }

    return (
      watch("essay_1") &&
      watch("essay_2") &&
      watch("essay_3") &&
      watch("essay_4") &&
      !errors.essay_1 &&
      !errors.essay_2 &&
      !errors.essay_3 &&
      !errors.essay_4 &&
      join
    )
  }, [
    watch("essay_1"),
    watch("essay_2"),
    watch("essay_3"),
    watch("essay_4"),
    watch("join"),
    watch("join_note"),
    errors,
  ])

  const onChangeStepHandle = (v: number) => {
    setStep(v)
  }
  return (
    <>
      <Button onClick={() => onChangeStepHandle(4)} colorScheme="menu">
        ก่อนหน้า
      </Button>
      <Spacer />
      <Button
        onClick={() => onChangeStepHandle(6)}
        isDisabled={!enable}
        colorScheme="menu"
      >
        ถัดไป
      </Button>
    </>
  )
}

const FormStep5 = () => {
  const { control, watch } = useFormContext()
  const {
    formState: { errors },
  } = useFormContext()
  return (
    <FormLayout buttonControl={<FormStep5ButtonControl />}>
      <HStack spacing={4} align="flex-start">
        <FormControl isRequired isInvalid={!!errors.essay_1}>
          <FormLabel>
            คุณรู้จักกระบวนการคิดเชิงออกแบบ (Design Thinking) หรือไม่ อย่างไร
            (ไม่เกิน 200 คำ)
          </FormLabel>
          <Controller
            name="essay_1"
            control={control}
            rules={{
              required: {
                value: true,
                message: "กรุณาระบุข้อมูล",
              },
              maxLength: {
                value: 2000,
                message: "ขนาดข้อความยาวเกินกำหนด 2000 ตัวอักษร",
              },
            }}
            render={({ field }) => <Textarea rows={5} {...field} />}
          />
          <FormErrorMessage>
            {errors.essay_1?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4} align="flex-start">
        <FormControl isRequired isInvalid={!!errors.essay_2}>
          <FormLabel>
            คุณเคยศึกษา/ มีประสบการณ์ใช้บริการ/
            ทำงานที่เกี่ยวข้องกับกระบวนพิจารณาในชั้นศาลหรือไม่ อย่างไร (ไม่เกิน
            200 คำ)
          </FormLabel>
          <Controller
            name="essay_2"
            control={control}
            rules={{
              required: {
                value: true,
                message: "กรุณาระบุข้อมูล",
              },
              maxLength: {
                value: 2000,
                message: "ขนาดข้อความยาวเกินกำหนด 2000 ตัวอักษร",
              },
            }}
            render={({ field }) => <Textarea rows={5} {...field} />}
          />
          <FormErrorMessage>
            {errors.essay_2?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4} align="flex-start">
        <FormControl isRequired isInvalid={!!errors.essay_3}>
          <FormLabel>
            คุณคิดว่าขั้นตอนการให้บริการของศาล หรือกระบวนพิจารณาในชั้นศาล
            มีส่วนใดที่ควรได้รับการ พัฒนามากที่สุด เพราะเหตุใด (ไม่เกิน 300 คำ)
          </FormLabel>
          <Controller
            name="essay_3"
            control={control}
            rules={{
              required: {
                value: true,
                message: "กรุณาระบุข้อมูล",
              },
              maxLength: {
                value: 3000,
                message: "ขนาดข้อความยาวเกินกำหนด 3000 ตัวอักษร",
              },
            }}
            render={({ field }) => <Textarea rows={5} {...field} />}
          />
          <FormErrorMessage>
            {errors.essay_3?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4} align="flex-start">
        <FormControl isRequired isInvalid={!!errors.essay_4}>
          <FormLabel>
            คุณคาดหวังว่าการเข้าร่วมหลักสูตร “Justice by Design:
            กระบวนการยุติธรรมที่ทุกคนออกแบบ ได้”
            จะเป็นประโยชน์อย่างไรต่อตัวของคุณหรือหน่วยงานที่คุณปฏิบัติหน้าที่อยู่ทั้งในปัจจุบันและใน
            อนาคต (กรุณาอธิบายพอสังเขป แต่ไม่เกิน 500 คำ
            เพื่อให้คณะกรรมการเข้าใจเป้าหมายในการเข้า ร่วมกิจกรรมของคุณ)
          </FormLabel>
          <Controller
            name="essay_4"
            control={control}
            rules={{
              required: {
                value: true,
                message: "กรุณาระบุข้อมูล",
              },
              maxLength: {
                value: 5000,
                message: "ขนาดข้อความยาวเกินกำหนด 5000 ตัวอักษร",
              },
            }}
            render={({ field }) => <Textarea rows={5} {...field} />}
          />
          <FormErrorMessage>
            {errors.essay_4?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
      </HStack>

      <VStack spacing={4} mt={4} align="flex-start">
        <FormControl isRequired>
          <FormLabel>
            คุณสามารถเข้าร่วมกิจกรรมในหลักสูตรได้ครบถ้วนทุกครั้งหรือไม่
          </FormLabel>
          <Controller
            name="join"
            control={control}
            defaultValue="1"
            render={({ field }) => (
              <RadioGroup {...field}>
                <Stack direction="row">
                  <Radio value="1">สามารถเข้าร่วมได้ทุกครั้ง</Radio>
                  <Radio value="2">ไม่สามารถเข้าร่วมได้ทุกครั้ง</Radio>
                </Stack>
              </RadioGroup>
            )}
          />
          <FormErrorMessage>
            {errors.join?.message?.toString()}
          </FormErrorMessage>
        </FormControl>
        <Collapse in={watch("join") == "2"} style={{ width: "100%" }}>
          <FormControl isInvalid={!!errors.join_note}>
            <Controller
              name="join_note"
              control={control}
              rules={{
                maxLength: {
                  value: 100,
                  message: "ขนาดข้อความยาวเกินกำหนด 100 ตัวอักษร",
                },
              }}
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="กรุณาระบบเหตุผลที่ไม่สามารถเข้าร่วมได้ทุกครั้ง"
                  {...field}
                />
              )}
            />
            <FormErrorMessage>
              {errors.join_note?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
        </Collapse>
      </VStack>
    </FormLayout>
  )
}

export default FormStep5

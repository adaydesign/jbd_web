import {
  Button,
  Checkbox,
  CheckboxGroup,
  Collapse,
  FormControl,
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
import { Controller, useFormContext } from "react-hook-form"
import { useFormStepContext } from "~/contexts/FormStepContext"
import FormLayout from "./FormLayout"

const FormStep6ButtonControl = () => {
  const { setStep } = useFormStepContext()
  const onChangeStepHandle = () => {
    setStep(5)
  }

  return (
    <>
      <Button onClick={onChangeStepHandle}>ก่อนหน้า</Button>
      <Spacer />
      <Button type="submit">ยืนยันการสมัคร</Button>
    </>
  )
}

const FormStep6Final = () => {
  const { control, watch } = useFormContext()
  return (
    <FormLayout buttonControl={<FormStep6ButtonControl />}>
      <HStack spacing={4}>
        <FormControl>
          <FormLabel>ช่องทางออนไลน์</FormLabel>
          <CheckboxGroup colorScheme="green">
            <Stack direction="column">
              <Controller
                name="online_facebook"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value}
                  >
                    Facebook
                  </Checkbox>
                )}
              />
              <Controller
                name="online_instagram"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value}
                  >
                    Instagram
                  </Checkbox>
                )}
              />
              <Controller
                name="online_twitter"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value}
                  >
                    Twitter
                  </Checkbox>
                )}
              />
              <Controller
                name="online_email"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value}
                  >
                    Email
                  </Checkbox>
                )}
              />
              <Controller
                name="online_website"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value}
                  >
                    Website ศาลยุติธรรม
                  </Checkbox>
                )}
              />
            </Stack>
          </CheckboxGroup>
        </FormControl>
      </HStack>

      <VStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>ได้รับการแนะนำจาก</FormLabel>
          <CheckboxGroup colorScheme="green">
            <Stack direction="column">
              <Controller
                name="sugg_colleague"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value}
                  >
                    เพื่อนร่วมงาน
                  </Checkbox>
                )}
              />
              <Controller
                name="sugg_teacher"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value}
                  >
                    อาจารย์
                  </Checkbox>
                )}
              />
              <Controller
                name="sugg_officer"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value}
                  >
                    บุคลากรของศาลยุติธรรม
                  </Checkbox>
                )}
              />
              <Controller
                name="sugg_email"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value}
                  >
                    Email
                  </Checkbox>
                )}
              />
              <Controller
                name="sugg_other"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value}
                  >
                    อื่นๆ (โปรดระบุ)
                  </Checkbox>
                )}
              />
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <Collapse in={watch("sugg_other")} style={{ width: "100%" }}>
          <FormControl>
            <Controller
              name="sugg_note"
              control={control}
              render={({ field }) => (
                <Input type="text" placeholder="อื่นๆ (โปรดระบุ)" {...field} />
              )}
            />
          </FormControl>
        </Collapse>
      </VStack>
    </FormLayout>
  )
}

export default FormStep6Final

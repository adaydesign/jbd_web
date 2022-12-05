import {
  Button,
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
import FormLayout from "./FormLayout"

const FormStep5ButtonControl = () => {
  return (
    <>
      <Button>ก่อนหน้า</Button>
      <Spacer />
      <Button>ถัดไป</Button>
    </>
  )
}

const FormStep5 = () => {
  return (
    <FormLayout buttonControl={<FormStep5ButtonControl />}>
      <HStack spacing={4}>
        <FormControl>
          <FormLabel>คำถามข้อ 1</FormLabel>
          <Textarea rows={5} />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>คำถามข้อ 2</FormLabel>
          <Textarea rows={5} />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>คำถามข้อ 3</FormLabel>
          <Textarea rows={5} />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>คำถามข้อ 4</FormLabel>
          <Textarea rows={5} />
        </FormControl>
      </HStack>

      <VStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>
            คุณสามารถเข้าร่วมกิจกรรมในหลักสูตรได้ครบถ้วนทุกครั้งหรือไม่
          </FormLabel>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="1">สามารถเข้าร่วมได้ทุกครั้ง</Radio>
              <Radio value="2">ไม่สามารถเข้าร่วมได้ทุกครั้ง</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <Input
            type="text"
            placeholder="กรุณาระบบเหตุผลที่ไม่สามารถเข้าร่วมได้ทุกครั้ง"
          />
        </FormControl>
      </VStack>
    </FormLayout>
  )
}

export default FormStep5

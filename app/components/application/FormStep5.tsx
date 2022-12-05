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
import { useFormStepContext } from "~/contexts/FormStepContext"
import FormLayout from "./FormLayout"

const FormStep5ButtonControl = () => {
  const { setStep } = useFormStepContext()
  const onChangeStepHandle = (v: number) => {
    setStep(v)
  }
  return (
    <>
      <Button onClick={() => onChangeStepHandle(4)}>ก่อนหน้า</Button>
      <Spacer />
      <Button onClick={() => onChangeStepHandle(6)}>ถัดไป</Button>
    </>
  )
}

const FormStep5 = () => {
  return (
    <FormLayout buttonControl={<FormStep5ButtonControl />}>
      <HStack spacing={4}>
        <FormControl>
          <FormLabel>
            คุณรู้จักกระบวนการคิดเชิงออกแบบ (Design Thinking) หรือไม่ อย่างไร
            (ไม่เกิน 200 คำ)
          </FormLabel>
          <Textarea rows={5} />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>
            คุณเคยศึกษา/ มีประสบการณ์ใช้บริการ/
            ทำงานที่เกี่ยวข้องกับกระบวนพิจารณาในชั้นศาลหรือไม่ อย่างไร (ไม่เกิน
            200 คำ)
          </FormLabel>
          <Textarea rows={5} />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>
            คุณคิดว่าขั้นตอนการให้บริการของศาล หรือกระบวนพิจารณาในชั้นศาล
            มีส่วนใดที่ควรได้รับการ พัฒนามากที่สุด เพราะเหตุใด (ไม่เกิน 300 คำ)
          </FormLabel>
          <Textarea rows={5} />
        </FormControl>
      </HStack>

      <HStack spacing={4} mt={4}>
        <FormControl>
          <FormLabel>
            คุณคาดหวังว่าการเข้าร่วมหลักสูตร “Justice by Design:
            กระบวนการยุติธรรมที่ทุกคนออกแบบ ได้”
            จะเป็นประโยชน์อย่างไรต่อตัวของคุณหรือหน่วยงานที่คุณปฏิบัติหน้าที่อยู่ทั้งในปัจจุบันและใน
            อนาคต (กรุณาอธิบายพอสังเขป แต่ไม่เกิน 500 คำ
            เพื่อให้คณะกรรมการเข้าใจเป้าหมายในการเข้า ร่วมกิจกรรมของคุณ)
          </FormLabel>
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

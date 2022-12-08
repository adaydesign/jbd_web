import { Box, Flex, HStack, Show, Text } from "@chakra-ui/react"
import { useMemo } from "react"
import { useFormStepContext } from "~/contexts/FormStepContext"

const formTitleList: string[] = [
  "Personal Information",
  "Contact Information",
  "Education Background",
  "Working Experiences",
  "Essay Questions",
  "Finish",
]

type StepItemProps = {
  itemStep: number
  title: string
}
const StepItem = ({ title, itemStep }: StepItemProps) => {
  const { step } = useFormStepContext()
  //const textColor = ""
  const borderColor = useMemo(() => {
    // pass
    if (itemStep < step) return "green.300"
    // current
    else if (itemStep == step) return "green"
    // not
    return "gray.300"
  }, [step])

  const mobileTitle = useMemo(() => {
    // current
    if (itemStep == step) return title
    // pass & not
    return title.substring(0, 1)
  }, [step])

  const mobileW = useMemo(() => {
    // current
    if (itemStep == step) return "100px"
    // pass & not
    return ""
  }, [step])

  return (
    <Box
      w={{ base: mobileW, md: "100px" }}
      borderBottomColor={borderColor}
      borderBottomWidth="3px"
    >
      <Text color="gray" textAlign="center">
        <Show below="md">{mobileTitle}</Show>
        <Show above="md">{title}</Show>
      </Text>
    </Box>
  )
}

const FormStepController = () => {
  return (
    <Flex w="full" justify="center" mt={2}>
      <HStack spacing={10} align="end">
        {formTitleList.map((t, i) => (
          <StepItem title={t} itemStep={i + 1} key={i} />
        ))}
      </HStack>
    </Flex>
  )
}

export default FormStepController

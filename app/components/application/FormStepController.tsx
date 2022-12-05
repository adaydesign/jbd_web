import { Box, Flex, HStack, Text } from "@chakra-ui/react"

const formTitleList: String[] = [
  "Personal Information",
  "Contact Information",
  "Education Background",
  "Working Experiences",
  "Essay Questions",
  "Finish",
]

type StepItemProps = {
  title: String
}
const StepItem = ({ title }: StepItemProps) => {
  //const textColor = ""
  //const borderColor = ""
  return (
    <Box w="100px" borderBottomColor="green" borderBottomWidth="3px">
      <Text color="gray" textAlign="center">
        {title}
      </Text>
    </Box>
  )
}

const FormStepController = () => {
  return (
    <Flex w="full" justify="center" mt={2}>
      <HStack spacing={10} align="end">
        {formTitleList.map((t, i) => (
          <StepItem title={t} key={i} />
        ))}
      </HStack>
    </Flex>
  )
}

export default FormStepController

import { Flex } from "@chakra-ui/react"
import React from "react"
import FormStep1 from "./FormStep1"
import FormStep2 from "./FormStep2"
import FormStep3 from "./FormStep3"
import FormStep4 from "./FormStep4"
import FormStep5 from "./FormStep5"
import FormStep6Final from "./FormStep6Final"
import FormStepController from "./FormStepController"

const ApplicationForm = () => {
  return (
    <Flex w="full" direction="column">
      <FormStepController />
      <FormStep1 />
      <FormStep2 />
      <FormStep3 />
      <FormStep4 />
      <FormStep5 />
      <FormStep6Final />
    </Flex>
  )
}

export default ApplicationForm

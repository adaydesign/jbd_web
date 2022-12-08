import { Collapse, Flex } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import FormStepContext from "~/contexts/FormStepContext"
import FormStep1 from "./FormStep1"
import FormStep2 from "./FormStep2"
import FormStep3 from "./FormStep3"
import FormStep4 from "./FormStep4"
import FormStep5 from "./FormStep5"
import FormStep6Final from "./FormStep6Final"
import FormStepController from "./FormStepController"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import { useFetcher } from "@remix-run/react"

const ApplicationForm = () => {
  const [step, setStep] = useState<number>(1)
  const divRef = useRef<HTMLInputElement | null>(null)
  const methods = useForm({
    mode: "onChange",
  })

  useEffect(() => {
    if (divRef) {
      divRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }, [step])

  return (
    <FormProvider {...methods}>
      <form method="post" encType="multipart/form-data" action="/application">
        <FormStepContext.Provider value={{ step, setStep }}>
          <Flex w="full" direction="column" ref={divRef}>
            <FormStepController />
            <Collapse in={step == 1}>
              <FormStep1 />
            </Collapse>
            <Collapse in={step == 2}>
              <FormStep2 />
            </Collapse>
            <Collapse in={step == 3}>
              <FormStep3 />
            </Collapse>
            <Collapse in={step == 4}>
              <FormStep4 />
            </Collapse>
            <Collapse in={step == 5}>
              <FormStep5 />
            </Collapse>
            <Collapse in={step == 6}>
              <FormStep6Final />
            </Collapse>
          </Flex>
        </FormStepContext.Provider>
      </form>
    </FormProvider>
  )
}

export default ApplicationForm

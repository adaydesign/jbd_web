import React, { createContext, useContext } from "react"

type StepValue = {
    step: number
    setStep: (v:number)=>void
}

const FormStepContext = createContext<StepValue>({
    step:1,
    setStep: ()=>{}
})

const useFormStepContext = ()=>{
    return useContext(FormStepContext)
}


export { useFormStepContext }
export default FormStepContext
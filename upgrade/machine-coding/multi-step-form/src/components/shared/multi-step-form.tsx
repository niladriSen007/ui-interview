import { useMultiStepForm } from "@/hooks/use-multi-step-form"
import type { FormSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useEffectEvent } from "react"
import { useForm } from "react-hook-form"
const MultiStepForm = () => {

  const { currentStep,
    isFirstStep,
    isLastStep,
    formData,
    isSubmitted,
    getCurrentSchema,
    goToNextStep,
    goToPreviousStep,
    updateFormData,
    submitForm,
    resetForm } = useMultiStepForm()

  const { register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    setValue
  } = useForm<FormSchema>({
    resolver: zodResolver(getCurrentSchema()),
    defaultValues: formData,
    mode: "onChange"
  })

  const resetFormState = useEffectEvent(() => {
    reset(formData)
  })

  useEffect(() => {
    resetFormState()
  }, [currentStep])

  return (
    <div>MultiStepForm</div>
  )
}
export default MultiStepForm
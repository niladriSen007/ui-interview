import { useMultiStepForm } from "@/hooks/use-multi-step-form"
import type { FormSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Activity, useEffect, useEffectEvent } from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Check, ChevronLeft, ChevronRight, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import ProgressSteps from "./progress-steps"
import PersonalInfo from "./personal-info"
import ProfessionalInfo from "./professional-info"
import BillingInfo from "./billing-info"
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
    resetForm,
    steps,
  } = useMultiStepForm()

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


  const onNextStep = async(data:FormSchema) => {

  }


  useEffect(() => {
    reset(formData)
  }, [currentStep])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-2xl">
        {/* Header: Progress Steps Indicator */}
        <CardHeader>
          <ProgressSteps currentStep={currentStep} steps={steps} />
        </CardHeader>

        <CardContent className="space-y-6">
          {/* 
            CONDITIONAL STEP RENDERING
            Only render the current step component.
            
            Why not render all and hide with CSS?
            - Performance: Don't mount unused components
            - Simpler: Clear which step is active
            - Memory: Don't keep unnecessary DOM nodes
            
            Pattern: Switch-like conditional rendering
          */}

          <Activity mode={currentStep === 0 ? "visible" : "hidden"}>
            <PersonalInfo register={register} errors={errors} />
          </Activity>
          {/*   {currentStep === 0 && (
            <PersonalInfo register={register} errors={errors} />
          )} */}
          {currentStep === 1 && (
            <ProfessionalInfo
              register={register}
              errors={errors}
              setValue={setValue} // Needed for Select component
            />
          )}
          {currentStep === 2 && (
            <BillingInfo register={register} errors={errors} />
          )}

          {/* 
            NAVIGATION BUTTONS
            Fixed position at bottom of card.
            
            Previous button:
            - Disabled on first step (nowhere to go back)
            - Outline variant (secondary style)
            
            Next/Submit button:
            - Text changes based on isLastStep
            - Primary button style
            - Shows arrow icon when not last step
          */}
          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={goToPreviousStep}
              disabled={isFirstStep}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            <Button type="button" onClick={handleSubmit(onNextStep)}>
              {isLastStep ? "Submit" : "Next"}
              {!isLastStep && <ChevronRight className="w-4 h-4 ml-1" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export default MultiStepForm
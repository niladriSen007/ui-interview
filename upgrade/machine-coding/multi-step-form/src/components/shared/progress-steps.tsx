import type { Step } from "@/types"

const ProgressSteps = ({
  currentStep,
  steps
}: {
  currentStep: number,
  steps: Step[]
}) => {
  return (
    <div>
      {steps.map((step, index) => (
        <div key={index} className={`step ${currentStep === index ? "active" : ""}`}>
          {step}
        </div>
      ))}
    </div>
  )
}
export default ProgressSteps
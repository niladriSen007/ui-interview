import { billingInfoSchema, personalInfoSchema, professionalInfoSchema, type FormSchema } from "@/schemas";
import { Briefcase, CardSimIcon, User } from "lucide-react"
import { useState } from "react";


const steps: Array<{ id: string; title: string; icon: React.ElementType }> = [
  {
    id: "personal-info",
    title: "Personal Information",
    icon: User,
  },
  {
    id: "professional-info",
    title: "Professional Information",
    icon: Briefcase,
  },
  {
    id: "billing-info",
    title: "Billing Information",
    icon: CardSimIcon,
  },
]

export const stepSchema = [
  personalInfoSchema,
  professionalInfoSchema,
  billingInfoSchema,
]

export const useMultiStepForm = () => {

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<FormSchema>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;


  const getCurrentSchema = () => stepSchema[currentStep];

  const goToNextStep = () => {
    if (!isLastStep) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPreviousStep = () => {
    if (!isFirstStep) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const updateFormData = (newData: Partial<FormSchema>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const submitForm = (data: FormSchema) => {
    console.log("Form submitted", data);
    setIsSubmitted(true);
  }

  const resetForm = () => {
    setFormData({});
    setCurrentStep(0);
    setIsSubmitted(false);
  }


  return {
    currentStep,
    isFirstStep,
    isLastStep,
    formData,
    isSubmitted,
    steps,
    getCurrentSchema,
    goToNextStep,
    goToPreviousStep,
    updateFormData,
    submitForm,
    resetForm,
  }

}
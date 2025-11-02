import z from "zod"

export const personalInfoSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
})

export const professionalInfoSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  position: z.string().min(1, "Position is required"),
  industry: z.string().min(1, "Industry is required"),
  experience: z.enum(["0-1", "1-3", "3-5", "5-7", "7+"], "Experience is required"),
})

export const billingInfoSchema = z.object({
  cardNumber: z.string().min(16, "Card number must be at least 16 digits"),
  cardHolder: z.string().min(1, "Name on card is required"),
  expiryDate: z.string().min(5, "Expiry date is required"),
  cvv: z.string().min(3, "CVV must be at least 3 digits"),
})

export type PersonalInfo = z.infer<typeof personalInfoSchema>
export type ProfessionalInfo = z.infer<typeof professionalInfoSchema>
export type BillingInfo = z.infer<typeof billingInfoSchema>


export type FormSchema = PersonalInfo | ProfessionalInfo | BillingInfo
export type AllFormSchema = PersonalInfo & ProfessionalInfo & BillingInfo
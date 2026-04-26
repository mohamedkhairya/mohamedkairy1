import * as z from "zod";

export const CheckoutSchema = z.object({

  city: z.string()
    .min(3, "City name is too short")
    .max(50, "City name is too long")
    .nonempty("City is required"),

  phone: z.string()
    .nonempty("Phone number is required")
    .regex(/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number (e.g., 01010700999)"),

  details: z.string()
    .min(5, "Please provide more address details")
    .max(500, "Details are too long")
    .nonempty("Address details are required"),
});

export type CheckoutForm = z.infer<typeof CheckoutSchema>;
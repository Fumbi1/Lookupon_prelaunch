"use server";
import { ZodError, z } from "zod"
const schemaRegister = z.object({
    first_name: z.string().min(2, {
        message: "First name must be at least 2 characters",
    }),
    last_name: z.string().min(2, {
        message: "Last name must be at least 2 characters",
    }),
    email: z.string().email({
        message: "Kindly innput a valid email address",
    }),
    password: z.string().min(6).max(20, {
        message: "Password must be between 6 and 20 characters",
    }),
})


export async function registerUserAction(prevState, formData){
    console.log("Hello from this side");

    const validatedField = schemaRegister.safeParse({
        first_name: formData.get("firstname"),
        last_name: formData.get("lastname"),
        email: formData.get("email"),
        password: formData.get("password")
    });

    if (!validatedField.success) {
        return {
            ...prevState,
            zodErrors: validatedField.error.flatten().fieldErrors,
            message: "Missing Fields failed to register"
        }
    }

    return {
        ...prevState,
        data: validatedField,
        zodErrors: null,
        message: "Correct inputs!"
    }
}

'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'


export interface FormResponse {
    status: "error" | "success",
    errors?: {
        field: string,
        message: string
    }[]
}



export async function signup(_prevState: any, formData: FormData): Promise<FormResponse> {
    const supabase = await createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
    }

    // Add validation for all required fields
    if (!data.email || !data.password || !data.firstName || !data.lastName) {
        return { status: "error", errors: [{ field: "email", message: " 'All fields are required'" }] }
    }

    const { error, data: authData } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
            data: {
                first_name: data.firstName,
                last_name: data.lastName,
                full_name: `${data.firstName} ${data.lastName}`,
            }
        }
    })

    if (error) {
        return { status: "error", errors: [{ field: error.name, message: error.message }] }
    }

    // Check if user already exists
    if (authData.user?.identities?.length === 0) {
        return { status: "error", errors: [{ field: "email", message: "User already exists." }] }

    }

    // Redirect to verification page
    redirect(`/verify?email=${encodeURIComponent(data.email)}`)
}
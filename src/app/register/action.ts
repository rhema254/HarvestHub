'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'


export async function signup(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
  }

  // Add validation for all required fields
  if (!data.email || !data.password || !data.firstName || !data.lastName) {
    return { error: 'All fields are required' }
  }

  const { error, data: authData } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      data: {
        first_name: data.firstName,
        last_name: data.lastName,
        full_name: `${data.firstName} ${data.lastName}`,
      }
    }
  })

  if (error) {
    return { error: error.message }
  }

  // Check if user already exists
  if (authData.user?.identities?.length === 0) {
    return { error: 'Email already registered' }
  }

  // Redirect to verification page
  redirect(`/verify?email=${encodeURIComponent(data.email)}`)
}
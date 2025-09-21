"use server";

import { auth } from "@/lib/auth";
import { error } from "console";
import { success } from "zod";

export const signIn = async (email: string, password: string) => {
  try{
  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

return {
  success: true,
  message: "Signed in successfully",
}
}
catch(error){
  const e = error as Error;
  
  return {
    success: false,
    message: e.message || "Failed to sign in",
  }
}
};

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "orcdev@test.com",
      password: "password123",
      name: "Orc Dev",
    },
  });
};

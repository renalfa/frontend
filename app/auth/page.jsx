"use client";

import React from "react";
import Logo from "@/components/logo";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/client";

const AuthPage = () => {
  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.log("error: ", error.message);
    }
  };

  return (
    <div className="w-full h-dvh flex-center">
      <section className="w-full max-w-md flex flex-col items-center gap-4 bg-muted p-8 rounded-xl border">
        <Logo withIcon />

        <div className="text-center">
          <h2 className="text-3xl">
            Welcome to recr<strong className="text-cyan-500">ai</strong>ter
          </h2>
          <p className="text-muted-foreground">Please sign in to continue</p>
        </div>

        <Button
          onClick={handleSignIn}
          variant="outline"
          className="w-full mt-8"
        >
          <FcGoogle className="mr-2" />
          Sign in with Google
        </Button>
      </section>
    </div>
  );
};

export default AuthPage;

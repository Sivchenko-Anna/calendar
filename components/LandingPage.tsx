'use client'
import {SignIn} from "@clerk/nextjs"
import Image from "next/image"

export default function LandingPage() {
  return (
    <main className="flex items-center p-10 gap-20 animate-fade-in max-md:flex-col h-dvh">
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl mb-2">Calendar</h2>
          <Image
            src='/assets/logo.svg'
            width={150}
            height={150}
            alt="Logo"
          />
        </div>
        <h1 className="text-2xl font-black lg:text-3xl text-center">
          Your time, perfectly planned
        </h1>
        <p className="font-extralight text-center">
          Join millions of professionals who easily book meetings with the #1 scheduling tool
        </p>
      </section>

      <div className="mt-3">
        <SignIn
          routing="hash" // Keeps sign-in UI on the same page using hash-based routing
        />
      </div>
    </main>
  )
}

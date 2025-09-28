import {SignUp} from "@clerk/nextjs";
import Image from "next/image";

export default function LoginPage() {
  return(
    <main className="flex flex-col justify-center items-center p-5 gap-10 animate-fade-in h-dvh">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl mb-2">Calendar</h2>
        <Image
          src='/assets/logo.svg'
          width={150}
          height={150}
          alt="Logo"
        />
      </div>

      <SignUp/>
    </main>
  )
}

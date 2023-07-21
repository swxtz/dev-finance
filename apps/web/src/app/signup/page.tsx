import { SignupForm } from "@/components/SignupForm";

export default function  Signup() {
  return (
    <main className="px-9 overflow-y-hidden">
      <h2 className="text-2xl text-gray-200 text-center pt-16 font-medium md:text-3xl">
        Crie sua conta e organize sua vida financeira.
      </h2>
      <SignupForm />
    </main>
  );
}
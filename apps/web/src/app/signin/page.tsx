import { LoginForm } from "@/components/LoginForm";

export default function Signin() {
  return (
    <main>
      <div className="h-screen px-9">
        <h2 className="text-2xl text-gray-200 text-center pt-16 font-medium">Bem-vindo de volta</h2>
        <LoginForm />
      </div>
    </main>
  );
}
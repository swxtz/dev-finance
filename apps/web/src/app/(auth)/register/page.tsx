import { RegisterForm } from "@/components/Forms/RegisterForm";


export default function Register() {
    return (
        <main>
            <div className="">
                <h2 className="text-2xl text-gray-200 text-center font-medium md:text-3xl">Insira seus dados</h2>
                <RegisterForm />
            </div> 
        </main>
    );
}
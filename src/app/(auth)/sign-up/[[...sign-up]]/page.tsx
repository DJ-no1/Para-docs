import { SignUp } from "@clerk/nextjs";

export default function signUpPage() {
    return <main className="auth-page">
    <SignUp />
    </main>
}
import { SignIn } from "@clerk/nextjs";

export default function signInPage() {
  return <main className="auth-page">
    <SignIn />
    </main>
}
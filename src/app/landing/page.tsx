'use client'

import { SignInButton, SignUpButton, useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const LandingPage = () => {
    const { isSignedIn, isLoaded } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (isLoaded && isSignedIn) {
            router.push('/dashboard')
        }
    }, [isSignedIn, isLoaded, router])

    if (!isLoaded) {
        return <div className="loader">Loading...</div>
    }

    return (
        <main className="landing-container">
            {/* Header */}
            <header className="landing-header">
                <div className="flex items-center gap-2">
                    <Image
                        src="/assets/icons/logo.svg"
                        alt="Para-docs Logo"
                        width={120}
                        height={32}
                        className="hidden md:block"
                    />
                    <Image
                        src="/assets/icons/logo-icon.svg"
                        alt="Para-docs"
                        width={32}
                        height={32}
                        className="mr-2 md:hidden"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <SignInButton mode="modal">
                        <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                            Sign In
                        </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                        <Button className="gradient-blue">
                            Get Started
                        </Button>
                    </SignUpButton>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Real-time Document
                        <span className="text-blue-500"> Collaboration</span>
                    </h1>
                    <p className="hero-subtitle">
                        Create, edit, and collaborate on documents in real-time with your team.
                        Experience the future of document editing with Para-docs.
                    </p>
                    <div className="hero-buttons">
                        <SignUpButton mode="modal">
                            <Button className="gradient-blue text-lg px-8 py-6">
                                Start Collaborating
                            </Button>
                        </SignUpButton>
                        <SignInButton mode="modal">
                            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-lg px-8 py-6">
                                Sign In
                            </Button>
                        </SignInButton>
                    </div>
                </div>
                <div className="hero-image">
                    <Image
                        src="/assets/images/doc.png"
                        alt="Document collaboration"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-2xl"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="features-title">Why Choose Para-docs?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Image src="/assets/icons/comment.svg" alt="Real-time" width={32} height={32} />
                        </div>
                        <h3 className="feature-card-title">Real-time Collaboration</h3>
                        <p className="feature-card-description">
                            See changes instantly as your team edits. No more version conflicts.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Image src="/assets/icons/share.svg" alt="Share" width={32} height={32} />
                        </div>
                        <h3 className="feature-card-title">Easy Sharing</h3>
                        <p className="feature-card-description">
                            Share documents with customizable permissions. Control who can view or edit.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Image src="/assets/icons/edit.svg" alt="Rich Editor" width={32} height={32} />
                        </div>
                        <h3 className="feature-card-title">Rich Text Editor</h3>
                        <p className="feature-card-description">
                            Powerful formatting tools with a clean, intuitive interface.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <h2 className="cta-title">Ready to Start Collaborating?</h2>
                <p className="cta-subtitle">Join thousands of teams already using Para-docs</p>
                <SignUpButton mode="modal">
                    <Button className="gradient-blue text-lg px-8 py-6">
                        Get Started for Free
                    </Button>
                </SignUpButton>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <div className="flex items-center justify-center gap-2">
                    <Image
                        src="/assets/icons/logo-icon.svg"
                        alt="Para-docs"
                        width={24}
                        height={24}
                    />
                    <p className="text-sm text-gray-400">
                        © 2025 Para-docs. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    )
}

export default LandingPage

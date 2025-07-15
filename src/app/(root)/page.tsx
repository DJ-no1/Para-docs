'use client'

import { SignInButton, SignUpButton, useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Home = () => {
  const { isSignedIn, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/dashboard')
    }
  }, [isSignedIn, isLoaded, router])

  if (!isLoaded || isSignedIn) {
    return (
      <div className="loader">
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Para-docs"
          width={48}
          height={48}
          className="animate-pulse"
        />
        <p className="text-lg">Loading...</p>
      </div>
    )
  }

  return (
    <main className="landing-container">
      {/* Header */}
      <header className="landing-header">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/icons/logo-icon.svg"
            alt="Para-docs"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-xl font-semibold text-gray-200">Para-docs</span>
        </div>
        <div className="flex items-center gap-3">
          <SignInButton mode="modal">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-700/50 px-4 py-2 rounded-lg font-medium transition-colors">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow-sm transition-colors">
              Get Started
            </Button>
          </SignUpButton>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="text-blue-400 text-sm font-medium">✨ Real-time collaboration</span>
          </div>
          <h1 className="hero-title">
            Create and collaborate on
            <br />
            documents in <span className="text-blue-400">real-time</span>
          </h1>
          <p className="hero-subtitle">
            Work together seamlessly with your team. Edit, comment, and share documents
            with powerful collaboration tools that keep everyone in sync.
          </p>
          <div className="hero-buttons">
            <SignUpButton mode="modal">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-base shadow-sm transition-all hover:shadow-md">
                Start for free
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white hover:border-gray-500 px-8 py-3 rounded-lg font-medium text-base transition-all">
                Sign in
              </Button>
            </SignInButton>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Active users</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Documents created</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
          </div>
        </div>
        <div className="hero-demo">
          <div className="demo-window">
            <div className="demo-header">
              <div className="demo-controls">
                <div className="demo-dot bg-red-500"></div>
                <div className="demo-dot bg-yellow-500"></div>
                <div className="demo-dot bg-green-500"></div>
              </div>
              <div className="demo-title">Project Proposal.docx</div>
              <div className="demo-users">
                <div className="demo-avatar bg-blue-500">A</div>
                <div className="demo-avatar bg-green-500">S</div>
              </div>
            </div>
            <div className="demo-content">
              <div className="demo-toolbar">
                <div className="toolbar-group">
                  <Image src="/assets/icons/type-bold.svg" alt="Bold" width={16} height={16} className="opacity-70" />
                  <Image src="/assets/icons/type-italic.svg" alt="Italic" width={16} height={16} className="opacity-70" />
                  <Image src="/assets/icons/type-underline.svg" alt="Underline" width={16} height={16} className="opacity-70" />
                </div>
                <div className="toolbar-divider"></div>
                <div className="toolbar-group">
                  <Image src="/assets/icons/h1.svg" alt="H1" width={16} height={16} className="opacity-70" />
                  <Image src="/assets/icons/h2.svg" alt="H2" width={16} height={16} className="opacity-70" />
                </div>
              </div>
              <div className="demo-document">
                <div className="demo-line">
                  <div className="demo-text demo-heading">Project Proposal</div>
                </div>
                <div className="demo-line">
                  <div className="demo-text demo-subheading">Executive Summary</div>
                </div>
                <div className="demo-line">
                  <div className="demo-text">This proposal outlines our strategy for implementing</div>
                  <div className="demo-cursor demo-cursor-1">
                    <div className="cursor-line"></div>
                    <div className="cursor-label">Alex</div>
                  </div>
                </div>
                <div className="demo-line">
                  <div className="demo-text">real-time collaboration features. Key benefits include</div>
                </div>
                <div className="demo-line">
                  <div className="demo-text">improved team productivity and seamless document</div>
                  <div className="demo-cursor demo-cursor-2">
                    <div className="cursor-line"></div>
                    <div className="cursor-label">Sarah</div>
                  </div>
                </div>
                <div className="demo-line">
                  <div className="demo-text">sharing across all team members.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-header">
          <h2 className="features-title">Everything you need to collaborate</h2>
          <p className="features-subtitle">Powerful tools designed for modern teams</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-modern">
              <Image src="/assets/icons/comment.svg" alt="Real-time" width={24} height={24} />
            </div>
            <h3 className="feature-title">Real-time editing</h3>
            <p className="feature-description">
              See changes as they happen. Multiple people can edit simultaneously without conflicts.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-modern">
              <Image src="/assets/icons/share.svg" alt="Share" width={24} height={24} />
            </div>
            <h3 className="feature-title">Smart sharing</h3>
            <p className="feature-description">
              Control access with granular permissions. Share with specific people or generate public links.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-modern">
              <Image src="/assets/icons/bell.svg" alt="Notifications" width={24} height={24} />
            </div>
            <h3 className="feature-title">Stay updated</h3>
            <p className="feature-description">
              Get notified when documents are shared with you or when collaborators make changes.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-modern">
              <Image src="/assets/icons/edit.svg" alt="Rich Editor" width={24} height={24} />
            </div>
            <h3 className="feature-title">Rich formatting</h3>
            <p className="feature-description">
              Professional text formatting with headings, lists, and styling options.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-modern">
              <Image src="/assets/icons/comment.svg" alt="Comments" width={24} height={24} />
            </div>
            <h3 className="feature-title">Contextual comments</h3>
            <p className="feature-description">
              Add comments anywhere in your document. Mention team members and resolve discussions.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-modern">
              <Image src="/assets/icons/doc.svg" alt="Documents" width={24} height={24} />
            </div>
            <h3 className="feature-title">Organized workspace</h3>
            <p className="feature-description">
              Keep all your documents organized in one place with easy search and filtering.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">Trusted by teams worldwide</h2>
            <p className="testimonials-subtitle">See what our users are saying about Para-docs</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &ldquo;Para-docs has revolutionized how our team collaborates. The real-time editing is seamless and the comment system keeps everyone aligned.&rdquo;
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>A</span>
                </div>
                <div className="author-info">
                  <div className="author-name">Alex Johnson</div>
                  <div className="author-title">Product Manager at TechCorp</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &ldquo;The sharing permissions are exactly what we needed. Easy to control who can edit vs view, and the notifications keep us all in sync.&rdquo;
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>S</span>
                </div>
                <div className="author-info">
                  <div className="author-name">Sarah Chen</div>
                  <div className="author-title">Design Lead at StartupXYZ</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &ldquo;Finally, a document editor that actually works for remote teams. No more version conflicts or lost changes. Game changer!&rdquo;
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>M</span>
                </div>
                <div className="author-info">
                  <div className="author-name">Michael Rodriguez</div>
                  <div className="author-title">Engineering Manager at DevStudio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <div className="how-it-works-header">
            <h2 className="how-it-works-title">How it works</h2>
            <p className="how-it-works-subtitle">Get started in minutes, not hours</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">
                <Image src="/assets/icons/add.svg" alt="Create" width={24} height={24} />
              </div>
              <h3 className="step-title">Create your document</h3>
              <p className="step-description">
                Sign up and create your first document. Start with a blank page or choose from templates.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">
                <Image src="/assets/icons/share.svg" alt="Share" width={24} height={24} />
              </div>
              <h3 className="step-title">Invite your team</h3>
              <p className="step-description">
                Share your document with team members. Set permissions for each person - editor or viewer.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">
                <Image src="/assets/icons/edit.svg" alt="Collaborate" width={24} height={24} />
              </div>
              <h3 className="step-title">Collaborate in real-time</h3>
              <p className="step-description">
                Edit together, add comments, and see changes instantly. No more sending files back and forth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to transform your workflow?</h2>
          <p className="cta-subtitle">Join thousands of teams already collaborating with Para-docs</p>
          <SignUpButton mode="modal">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg shadow-sm hover:shadow-md transition-all">
              Get started for free
            </Button>
          </SignUpButton>
          <p className="cta-note">No credit card required • Free forever plan available</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Image
              src="/assets/icons/logo-icon.svg"
              alt="Para-docs"
              width={28}
              height={28}
            />
            <span className="footer-brand-text">Para-docs</span>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
            <a href="#" className="footer-link">Support</a>
          </div>
          <p className="footer-copy">© 2025 Para-docs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

export default Home
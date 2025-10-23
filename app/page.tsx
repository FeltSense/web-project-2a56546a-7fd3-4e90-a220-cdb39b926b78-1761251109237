'use client'

import React, { useState, FormEvent } from 'react'

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    const form = e.currentTarget as HTMLFormElement
    
    const formData = {
      name: (form.querySelector('#name') as HTMLInputElement).value,
      email: (form.querySelector('#email') as HTMLInputElement).value,
      phone: (form.querySelector('#phone') as HTMLInputElement).value,
      company: (form.querySelector('#company') as HTMLInputElement).value,
      marketingGoal: (form.querySelector('#marketingGoal') as HTMLSelectElement).value,
      budget: (form.querySelector('#budget') as HTMLSelectElement).value,
      message: (form.querySelector('#message') as HTMLTextAreaElement).value,
      industry: 'marketing',
      source: 'Nexus AI Labs Contact Form'
    }

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We\'ll be in touch within 24 hours.',
      })
      form.reset()
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-500"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-500"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-500"
            placeholder="Your Company"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="marketingGoal" className="block text-sm font-medium mb-2">
            Primary Marketing Goal
          </label>
          <select
            id="marketingGoal"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
          >
            <option value="">Select a goal</option>
            <option value="brand-awareness">Brand Awareness</option>
            <option value="lead-generation">Lead Generation</option>
            <option value="customer-retention">Customer Retention</option>
            <option value="sales-conversion">Sales Conversion</option>
            <option value="content-marketing">Content Marketing</option>
            <option value="social-media">Social Media Growth</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium mb-2">
            Monthly Budget Range
          </label>
          <select
            id="budget"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
          >
            <option value="">Select budget</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-plus">$50,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Tell Us About Your Project
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-500 resize-none"
          placeholder="Share your marketing challenges and goals..."
        ></textarea>
      </div>

      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-500/10 border border-green-500/20 text-green-300'
              : 'bg-red-500/10 border border-red-500/20 text-red-300'
          }`}
        >
          <p className="text-sm">{submitStatus.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Get Your Free Consultation'
        )}
      </button>

      <p className="text-xs text-slate-500 text-center">
        By submitting this form, you agree to our Privacy Policy and Terms of Service.
      </p>
    </form>
  )
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out" id="navbar">
  <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg shadow-purple-500/20 transition-all duration-500" id="nav-container">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between transition-all duration-500 py-6" id="nav-content">
        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-slate-900 p-2 rounded-lg border border-purple-500/50">
              <svg className="w-8 h-8 text-cyan-400 transition-all duration-500" id="logo-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-500" id="brand-text">
              Nexus AI Labs
            </span>
            <div className="text-xs text-purple-300 font-light tracking-wider">Marketing Intelligence</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#home" className="relative px-4 py-2 text-gray-200 hover:text-cyan-400 transition-all duration-300 group">
            <span className="relative z-10">Home</span>
            <span className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 rounded-lg transition-all duration-300"></span>
          </a>
          <a href="#services" className="relative px-4 py-2 text-gray-200 hover:text-cyan-400 transition-all duration-300 group">
            <span className="relative z-10">Services</span>
            <span className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 rounded-lg transition-all duration-300"></span>
          </a>
          <a href="#about" className="relative px-4 py-2 text-gray-200 hover:text-cyan-400 transition-all duration-300 group">
            <span className="relative z-10">About</span>
            <span className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 rounded-lg transition-all duration-300"></span>
          </a>
          <a href="#pricing" className="relative px-4 py-2 text-gray-200 hover:text-cyan-400 transition-all duration-300 group">
            <span className="relative z-10">Pricing</span>
            <span className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 rounded-lg transition-all duration-300"></span>
          </a>
          <a href="#contact" className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-200 hover:text-cyan-400 transition-colors duration-300 p-2" id="mobile-menu-button">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="hidden md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-purple-500/30" id="mobile-menu">
    <div className="px-4 pt-2 pb-4 space-y-2">
      <a href="#home" className="block px-4 py-3 text-gray-200 hover:text-cyan-400 hover:bg-purple-600/20 rounded-lg transition-all duration-300">
        Home
      </a>
      <a href="#services" className="block px-4 py-3 text-gray-200 hover:text-cyan-400 hover:bg-purple-600/20 rounded-lg transition-all duration-300">
        Services
      </a>
      <a href="#about" className="block px-4 py-3 text-gray-200 hover:text-cyan-400 hover:bg-purple-600/20 rounded-lg transition-all duration-300">
        About
      </a>
      <a href="#pricing" className="block px-4 py-3 text-gray-200 hover:text-cyan-400 hover:bg-purple-600/20 rounded-lg transition-all duration-300">
        Pricing
      </a>
      <a href="#contact" className="block px-4 py-3 mt-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
        Contact
      </a>
    </div>
  </div>

  <script dangerouslySetInnerHTML={{__html: `
    (function() {
      const navbar = document.getElementById('navbar');
      const navContent = document.getElementById('nav-content');
      const logoIcon = document.getElementById('logo-icon');
      const brandText = document.getElementById('brand-text');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      let lastScroll = 0;
      
      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
          navContent.style.paddingTop = '0.75rem';
          navContent.style.paddingBottom = '0.75rem';
          logoIcon.style.width = '1.75rem';
          logoIcon.style.height = '1.75rem';
          brandText.style.fontSize = '1.25rem';
        } else {
          navContent.style.paddingTop = '1.5rem';
          navContent.style.paddingBottom = '1.5rem';
          logoIcon.style.width = '2rem';
          logoIcon.style.height = '2rem';
          brandText.style.fontSize = '1.5rem';
        }
        
        lastScroll = currentScroll;
      });
      
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    })();
  `}} />
</nav>
      
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900">
  {/* Animated Gradient Orbs */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>

  {/* Floating Grid Pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

  {/* Floating Text Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 text-cyan-400/20 font-mono text-sm animate-float">
      neural_networks.train()
    </div>
    <div className="absolute top-40 right-20 text-purple-400/20 font-mono text-sm animate-float" style={{ animationDelay: '0.5s' }}>
      AI.optimize()
    </div>
    <div className="absolute bottom-40 left-20 text-indigo-400/20 font-mono text-sm animate-float" style={{ animationDelay: '1s' }}>
      model.predict()
    </div>
    <div className="absolute bottom-20 right-32 text-cyan-400/20 font-mono text-sm animate-float" style={{ animationDelay: '1.5s' }}>
      data.transform()
    </div>
    <div className="absolute top-1/3 left-1/4 text-purple-400/20 font-mono text-sm animate-float" style={{ animationDelay: '2s' }}>
      intelligence++
    </div>
  </div>

  {/* Main Content */}
  <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
    <div className="max-w-5xl mx-auto text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm animate-fade-in">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <span className="text-cyan-300 text-sm font-medium">Next-Gen Marketing Intelligence</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Nexus AI Labs
        </span>
      </h1>

      {/* Subheadline */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Transform Marketing with
        <span className="block mt-2 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
          Predictive AI Intelligence
        </span>
      </h2>

      {/* Description */}
      <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        Harness neural-powered analytics to predict customer behavior, optimize campaigns in real-time, and achieve 10x ROI. Our AI doesn't just analyze data—it anticipates market shifts before they happen.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
          <span className="relative z-10">Start Free AI Audit</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        
        <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
          Watch AI in Action
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            10x
          </div>
          <div className="text-slate-400 text-sm">Average ROI Increase</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            94%
          </div>
          <div className="text-slate-400 text-sm">Prediction Accuracy</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            2.5M+
          </div>
          <div className="text-slate-400 text-sm">Campaigns Optimized</div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0px) translateX(0px);
        opacity: 0.2;
      }
      50% {
        transform: translateY(-20px) translateX(10px);
        opacity: 0.3;
      }
    }

    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .animate-fade-in {
      animation: fade-in 1s ease-out forwards;
    }

    .animate-fade-in-up {
      animation: fade-in-up 1s ease-out forwards;
    }
  `}</style>
</div>
      
      {/* Services Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-4 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
        AI-Powered Marketing Solutions
      </h2>
      <p className="text-xl text-purple-200 max-w-3xl mx-auto">
        Nexus AI Labs delivers cutting-edge artificial intelligence solutions tailored for marketing excellence
      </p>
    </div>

    {/* Hover Reveal Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      
      {/* Card 1 - Predictive Customer Analytics */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-8 flex flex-col items-center justify-center shadow-2xl border border-purple-400/30">
            <div className="w-24 h-24 mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3 text-center">Predictive Customer Analytics</h3>
            <p className="text-purple-100 text-center text-sm">Hover to reveal details</p>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-slate-800 p-8 shadow-2xl border border-purple-400/30 overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Predictive Customer Analytics</h3>
            <ul className="space-y-3 text-purple-200">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <span>End-to-end AI development from strategy to deployment for customer behavior prediction</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <span>Proven track record with Fortune 500 marketing teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <span>Expert team of AI engineers specializing in marketing data science</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <span>Transparent process with measurable ROI tracking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card 2 - Intelligent Content Generation */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-pink-600 to-purple-600 p-8 flex flex-col items-center justify-center shadow-2xl border border-pink-400/30">
            <div className="w-24 h-24 mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3 text-center">Intelligent Content Generation</h3>
            <p className="text-pink-100 text-center text-sm">Hover to reveal details</p>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-slate-800 p-8 shadow-2xl border border-pink-400/30 overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Intelligent Content Generation</h3>
            <ul className="space-y-3 text-pink-200">
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">✓</span>
                <span>Industry-specific AI solutions for marketing content creation</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">✓</span>
                <span>Rapid prototyping and iterative development cycles</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">✓</span>
                <span>Ethical AI practices ensuring brand-safe content</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">✓</span>
                <span>Ongoing support and optimization for content performance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card 3 - Campaign Optimization Engine */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-8 flex flex-col items-center justify-center shadow-2xl border border-blue-400/30">
            <div className="w-24 h-24 mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3 text-center">Campaign Optimization Engine</h3>
            <p className="text-blue-100 text-center text-sm">Hover to reveal details</p>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-slate-800 p-8 shadow-2xl border border-blue-400/30 overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Campaign Optimization Engine</h3>
            <ul className="space-y-3 text-blue-200">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>Real-time AI-powered campaign performance optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>Domain expertise in multi-channel marketing strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>Transparent ROI measurement and reporting dashboards</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>Compliance-focused approach for data privacy regulations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card 4 - Audience Segmentation AI */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 flex flex-col items-center justify-center shadow-2xl border border-indigo-400/30">
            <div className="w-24 h-24 mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3 text-center">Audience Segmentation AI</h3>
            <p className="text-indigo-100 text-center text-sm">Hover to reveal details</p>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-slate-800 p-8 shadow-2xl border border-indigo-400/30 overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Audience Segmentation AI</h3>
            <ul className="space-y-3 text-indigo-200">
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">✓</span>
                <span>Advanced machine learning for hyper-targeted audience discovery</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">✓</span>
                <span>Proven success with Fortune 500 marketing departments</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">✓</span>
                <span>Continuous optimization and performance monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">✓</span>
                <span>Full compliance with GDPR, CCPA, and ethical AI standards</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <p className="text-purple-200 text-lg mb-6">Trusted by leading marketing teams worldwide</p>
      <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
        Start Your AI Journey with Nexus AI Labs
      </button>
    </div>
  </div>

  <style jsx>{`
    .perspective-1000 {
      perspective: 1000px;
    }
    .transform-style-3d {
      transform-style: preserve-3d;
    }
    .backface-hidden {
      backface-visibility: hidden;
    }
    .rotate-y-180 {
      transform: rotateY(180deg);
    }
    .group:hover .group-hover\\:rotate-y-180 {
      transform: rotateY(180deg);
    }
  `}</style>
</section>
      
      {/* Testimonials Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24">
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzhjNWZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
  
  <div className="container mx-auto px-4 mb-16 text-center relative z-10">
    <h2 className="text-5xl font-bold text-white mb-4">
      Trusted by Marketing Leaders
    </h2>
    <p className="text-purple-200 text-lg max-w-2xl mx-auto">
      See how Nexus AI Labs transforms marketing strategies for industry professionals
    </p>
  </div>

  <div className="relative">
    {/* First Row - Scroll Left */}
    <div className="flex mb-8 animate-[scroll-left_40s_linear_infinite] hover:[animation-play-state:paused]">
      <div className="flex gap-8 pr-8">
        {/* Testimonial 1 */}
        <div className="min-w-[500px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-300/20 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
              alt="Sarah Mitchell"
              className="w-16 h-16 rounded-full border-4 border-purple-400 mr-4"
            />
            <div>
              <h4 className="text-white font-bold text-lg">Sarah Mitchell</h4>
              <p className="text-purple-300 text-sm">CMO, BrandVision Inc.</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            &quot;Nexus AI Labs revolutionized our content strategy. Their AI-driven insights helped us increase engagement by 340% in just three months. Absolutely game-changing for our marketing team!&quot;
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="min-w-[500px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-300/20 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" 
              alt="Marcus Chen"
              className="w-16 h-16 rounded-full border-4 border-purple-400 mr-4"
            />
            <div>
              <h4 className="text-white font-bold text-lg">Marcus Chen</h4>
              <p className="text-purple-300 text-sm">Director of Digital Marketing, TechFlow</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            &quot;The predictive analytics from Nexus AI Labs gave us an unfair advantage. We can now anticipate market trends before our competitors and adjust campaigns in real-time. ROI has never been better.&quot;
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="min-w-[500px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-300/20 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" 
              alt="Emily Rodriguez"
              className="w-16 h-16 rounded-full border-4 border-purple-400 mr-4"
            />
            <div>
              <h4 className="text-white font-bold text-lg">Emily Rodriguez</h4>
              <p className="text-purple-300 text-sm">VP of Marketing, GrowthMetrics</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            &quot;Nexus AI Labs transformed how we approach customer segmentation. Their machine learning models identified high-value audiences we didn&apos;t even know existed. Our conversion rates doubled overnight.&quot;
          </p>
        </div>

        {/* Duplicate for seamless loop */}
        <div className="min-w-[500px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-300/20 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
              alt="Sarah Mitchell"
              className="w-16 h-16 rounded-full border-4 border-purple-400 mr-4"
            />
            <div>
              <h4 className="text-white font-bold text-lg">Sarah Mitchell</h4>
              <p className="text-purple-300 text-sm">CMO, BrandVision Inc.</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            &quot;Nexus AI Labs revolutionized our content strategy. Their AI-driven insights helped us increase engagement by 340% in just three months. Absolutely game-changing for our marketing team!&quot;
          </p>
        </div>

        <div className="min-w-[500px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-300/20 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" 
              alt="Marcus Chen"
              className="w-16 h-16 rounded-full border-4 border-purple-400 mr-4"
            />
            <div>
              <h4 className="text-white font-bold text-lg">Marcus Chen</h4>
              <p className="text-purple-300 text-sm">Director of Digital Marketing, TechFlow</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            &quot;The predictive analytics from Nexus AI Labs gave us an unfair advantage. We can now anticipate market trends before our competitors and adjust campaigns in real-time. ROI has never been better.&quot;
          </p>
        </div>
      </div>
    </div>

    {/* Second Row - Scroll Right */}
    <div className="flex animate-[scroll-right_35s_linear_infinite] hover:[animation-play-state:paused]">
      <div className="flex gap-8 pr-8">
        {/* Testimonial 3 */}
        <div className="min-w-[500px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-300/20 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" 
              alt="Emily Rodriguez"
              className="w-16 h-16 rounded-full border-4 border-purple-400 mr-4"
            />
            <div>
              <h4 className="text-white font-bold text-lg">Emily Rodriguez</h4>
              <p className="text-purple-300 text-sm">VP of Marketing, GrowthMetrics</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            &quot;Nexus AI Labs transformed how we approach customer segmentation. Their machine learning models identified high-value audiences we didn&apos;t even know existed. Our conversion rates doubled overnight.&quot;
          </p>
        </div>

        {/* Testimonial 1 */}
        <div className="min-w-[500px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-300/20 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
              alt="Sarah Mitchell"
              className="w-16 h-16 rounded-full border-4 border-purple-400 mr-4"
            />
            <div>
              <h4 className="text-white font-bold text-lg">Sarah Mitchell</h4>
              <p className="text-purple-300 text-sm">CMO, BrandVision Inc.</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            &quot;Nexus AI Labs revolutionized our content strategy. Their AI-driven insights helped us increase engagement by 340% in just three months. Absolutely game-changing for our marketing team!&quot;
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="min-w-[500px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-300/20 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" 
              alt="Marcus Chen"
              className="w-16 h-16 rounded-full border-4 border-purple-400 mr-4"
            />
            <div>
              <h4 className="text-white font-bold text-lg">Marcus Chen</h4>
              <p className="text-purple-300 text-sm">Director of Digital Marketing, TechFlow</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <p className="text-purple-100 leading-relaxed">
            &quot;The predictive analytics from Nexus AI Labs gave us an unfair advantage. We can now anticipate market trends before our competitors and adjust campaigns in real-time. ROI has never been better.&quot;
          </p>
        </div>

        {/* Duplicate for seamless loop */}
        <div className="min-w-[500px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-300/20 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" 
              alt="Emily Rodriguez"
              className="w-16 h-16 rounded-full border-4 border-purple-400 mr-4"
            />
            <div>
              <h4 className="text-white font-bold text-lg">Emily Rodriguez</h4>
'use client'

import React, { useState } from 'react'

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
            "Nexus AI Labs revolutionized our content strategy. Their AI-driven insights helped us increase engagement by 340% in just three months. Absolutely game-changing for our marketing team!"
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
            "The predictive analytics from Nexus AI Labs gave us an unfair advantage. We can now anticipate market trends before our competitors and adjust campaigns in real-time. ROI has never been better."
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
            "Nexus AI Labs transformed how we approach customer segmentation. Their machine learning models identified high-value audiences we didn't even know existed. Our conversion rates doubled overnight."
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
            "Nexus AI Labs revolutionized our content strategy. Their AI-driven insights helped us increase engagement by 340% in just three months. Absolutely game-changing for our marketing team!"
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
            "The predictive analytics from Nexus AI Labs gave us an unfair advantage. We can now anticipate market trends before our competitors and adjust campaigns in real-time. ROI has never been better."
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
            "Nexus AI Labs transformed how we approach customer segmentation. Their machine learning models identified high-value audiences we didn't even know existed. Our conversion rates doubled overnight."
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
            "Nexus AI Labs revolutionized our content strategy. Their AI-driven insights helped us increase engagement by 340% in just three months. Absolutely game-changing for our marketing team!"
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
            "The predictive analytics from Nexus AI Labs gave us an unfair advantage. We can now anticipate market trends before our competitors and adjust campaigns in real-time. ROI has never been better."
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
            "Nexus AI Labs transformed how we approach customer segmentation. Their machine learning models identified high-value audiences we didn't even know existed. Our conversion rates doubled overnight."
          </p>
        </div>

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
            "Nexus AI Labs revolutionized our content strategy. Their AI-driven insights helped us increase engagement by 340% in just three months. Absolutely game-changing for our marketing team!"
          </p>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes scroll-left {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    @keyframes scroll-right {
      0% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(0);
      }
    }
  `}</style>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
  </div>

  <div className="relative max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-5xl font-extrabold text-white mb-4">
        Transform Your Marketing with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Nexus AI Labs</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Unlock AI-powered marketing automation that drives real results
      </p>
    </div>

    {/* Billing Toggle */}
    <div className="flex items-center justify-center mb-16">
      <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-full p-1.5 border border-purple-500/30 shadow-2xl">
        <div className="flex items-center space-x-1">
          <button className="relative px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/50">
            Monthly
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full animate-bounce">Popular</span>
          </button>
          <button className="px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 text-gray-400 hover:text-white">
            Annual
            <span className="ml-2 text-xs text-green-400 font-bold">Save 20%</span>
          </button>
        </div>
      </div>
    </div>

    {/* Pricing Cards */}
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Starter Plan */}
      <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
          <p className="text-gray-400 text-sm">Perfect for small teams</p>
        </div>
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-5xl font-extrabold text-white">$29</span>
            <span className="text-gray-400 ml-2">/month</span>
          </div>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-300">5 AI Campaign Templates</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-300">Basic Analytics Dashboard</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-300">Email Support</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-300">1,000 AI Credits/month</span>
          </li>
        </ul>
        <button className="w-full py-3 px-6 rounded-xl font-semibold bg-slate-700 text-white hover:bg-slate-600 transition-all duration-300">
          Get Started
        </button>
      </div>

      {/* Professional Plan - Featured */}
      <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 transform scale-105 shadow-2xl shadow-purple-500/50">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">MOST POPULAR</span>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
          <p className="text-purple-100 text-sm">For growing businesses</p>
        </div>
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-5xl font-extrabold text-white">$79</span>
            <span className="text-purple-100 ml-2">/month</span>
          </div>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-white font-medium">Unlimited AI Campaigns</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-white font-medium">Advanced Predictive Analytics</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-white font-medium">Priority 24/7 Support</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-white font-medium">10,000 AI Credits/month</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-white font-medium">A/B Testing Suite</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-white font-medium">Custom Integrations</span>
          </li>
        </ul>
        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
          className="w-full py-4 px-6 rounded-xl font-bold bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center group"
        >
          Start Free Trial
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <div className="mt-4 flex items-center justify-center space-x-3 text-white text-xs">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
            </svg>
            <span>SSL Secure</span>
          </div>
          <span>•</span>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Money-back Guarantee</span>
          </div>
        </div>
      </div>

      {/* Enterprise Plan */}
      <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
          <p className="text-gray-400 text-sm">For large organizations</p>
        </div>
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-5xl font-extrabold text-white">$99</span>
            <span className="text-gray-400 ml-2">/month</span>
          </div>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-300">Everything in Professional</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-300">Unlimited AI Credits</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-300">Dedicated Account Manager</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-300">White-label Solutions</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-300">Custom AI Model Training</span>
          </li>
        </ul>
        <button className="w-full py-3 px-6 rounded-xl font-semibold bg-slate-700 text-white hover:bg-slate-600 transition-all duration-300">
          Contact Sales
        </button>
      </div>
    </div>

    {/* Trust Badges */}
    <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-400">
      <div className="flex items-center space-x-2">
        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
        <span className="text-sm font-medium">256-bit SSL Encryption</span>
      </div>
      <div className="flex items-center space-x-2">
        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
        </svg>
        <span className="text-sm font-medium">Secure Payment by Stripe</span>
      </div>
      <div className="flex items-center space-x-2">
        <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
        <span className="text-sm font-medium">30-Day Money Back</span>
      </div>
    </div>
  </div>
</div>
      
      {/* Contact Form - Supabase Integration */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Left Column - Content */}
      <div className="space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-300">Let's Transform Your Marketing</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Amplify Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Marketing ROI?
            </span>
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Connect with Nexus AI Labs and discover how AI-powered marketing solutions can revolutionize your campaigns, boost engagement, and drive measurable results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-6 pt-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Instant Response</h3>
              <p className="text-slate-400 text-sm">Get a reply within 24 hours</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Free Consultation</h3>
              <p className="text-slate-400 text-sm">No commitment required</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Custom Strategy</h3>
              <p className="text-slate-400 text-sm">Tailored to your goals</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">ROI Focused</h3>
              <p className="text-slate-400 text-sm">Measurable results guaranteed</p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="pt-8 border-t border-slate-700/50">
          <p className="text-sm text-slate-400 mb-4">Trusted by leading brands worldwide</p>
          <div className="flex items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-2xl font-bold">98%</div>
            <div className="text-2xl font-bold">24/7</div>
          </div>
          <div className="flex items-center gap-8 text-xs text-slate-500 mt-1">
            <div>Clients</div>
            <div>Satisfaction</div>
            <div>Support</div>
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="lg:sticky lg:top-8">
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Start Your Journey</h3>
            <p className="text-slate-400">Fill out the form and we'll be in touch soon.</p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  </div>

  {/* Footer Integration */}
  <div className="relative border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">Nexus AI Labs</h3>
          <p className="text-slate-400 mb-6 max-w-md">
            Pioneering AI-driven marketing solutions that transform how brands connect with their audiences.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">AI Marketing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Automation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
        <p>&copy; 2024 Nexus AI Labs. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Contact Form Component */}
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const form = e.currentTarget as HTMLFormElement;
    
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
    };

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We\'ll be in touch within 24 hours.',
      });
      form.reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      
      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Left Side - CTA/Newsletter */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            Nexus AI Labs
          </h2>
          <p className="text-slate-300 text-lg mb-6">
            Transforming marketing with intelligent AI solutions
          </p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Stay Ahead of the Curve</h3>
          <p className="text-slate-400 mb-4">
            Get the latest AI marketing insights, trends, and exclusive updates delivered to your inbox.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        <div className="space-y-2 text-slate-400">
          <p className="flex items-center gap-2">
            <span className="text-blue-400">📧</span>
            <a href="mailto:hello@nexusailabs.com" className="hover:text-blue-400 transition-colors">
              hello@nexusailabs.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-blue-400">📞</span>
            <a href="tel:+1-555-AI-NEXUS" className="hover:text-blue-400 transition-colors">
              +1 (555) AI-NEXUS
            </a>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-blue-400">📍</span>
            <span>San Francisco, CA 94105</span>
          </p>
        </div>
      </div>

      {/* Right Side - Navigation Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Solutions</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                AI Content Generation
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Predictive Analytics
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Customer Insights
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Campaign Optimization
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Marketing Automation
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Company</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Press Kit
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Resources</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                API Reference
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Social Media & Copyright */}
    <div className="mt-12 pt-8 border-t border-slate-700">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Nexus AI Labs. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="YouTube"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}
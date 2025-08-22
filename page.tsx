"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ApexITLanding() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-100/95 backdrop-blur-sm shadow-lg border-b border-slate-200" : "bg-slate-100/90"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/apex-logo-authentic.svg" alt="Apex IT Solutions" className="h-12 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-800 hover:text-green-600 transition-all duration-300 font-medium">
              HOME
            </a>
            <a href="#about" className="text-slate-800 hover:text-green-600 transition-all duration-300 font-medium">
              ABOUT US
            </a>
            <a href="#services" className="text-slate-800 hover:text-green-600 transition-all duration-300 font-medium">
              WEB HOSTING
            </a>
            <a href="#products" className="text-slate-800 hover:text-green-600 transition-all duration-300 font-medium">
              PRODUCTS
            </a>
            <a
              href="#solutions"
              className="text-slate-800 hover:text-green-600 transition-all duration-300 font-medium"
            >
              SOLUTIONS
            </a>
            <a href="#clients" className="text-slate-800 hover:text-green-600 transition-all duration-300 font-medium">
              CLIENTS
            </a>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full"
            >
              CONTACT US
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section - Windows Hosting Service */}
      <section id="home" className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
              <defs>
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M10 10h80v80h-80z" stroke="#3b82f6" strokeWidth="0.5" fill="none" opacity="0.3" />
                  <circle cx="50" cy="50" r="3" fill="#10b981" opacity="0.6" />
                  <path d="M50 10v40M50 60v30M10 50h40M60 50h30" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>
          {/* Floating tech elements */}
          <div className="absolute top-20 right-20 w-64 h-64 opacity-20">
            <div className="w-full h-full rounded-full border-2 border-blue-400 animate-spin-slow"></div>
            <div className="absolute top-8 left-8 w-48 h-48 rounded-full border border-green-400 animate-pulse"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full mb-6 border border-blue-400/30">
                <span className="text-blue-300 font-semibold text-sm">We are here to</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Windows Hosting
                <span className="block text-green-400">Service</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Achieve high availability and unmatched efficiency with 24x7 Windows hosting.
              </p>
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 text-lg rounded-full">
                MORE DETAILS
              </Button>
            </div>

            <div className="relative">
              <div className="relative w-full h-[400px] flex items-center justify-center">
                {/* Cloud illustration */}
                <div className="relative">
                  <svg width="300" height="200" viewBox="0 0 300 200" className="drop-shadow-2xl">
                    <defs>
                      <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e0f2fe" />
                        <stop offset="100%" stopColor="#bae6fd" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M75 120c-25 0-45-20-45-45s20-45 45-45c5 0 10 1 14 2C100 15 120 0 145 0c30 0 55 25 55 55 0 5-1 10-2 14 20 5 35 23 35 44 0 25-20 45-45 45H75z"
                      fill="url(#cloudGradient)"
                      className="animate-float"
                    />
                  </svg>
                  {/* Tech elements around cloud */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">Windows Hosting</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Experience seamless scalability without compromising on performance with our Windows.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">Linux Hosting</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Experience the ultimate web hosting flexibility with our Linux hosting solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">Microsoft Hosting</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Advanced protection for your Microsoft hosting solutions in India.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">Microsoft Azure Cloud</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Streamline application, optimize performance with this power.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full">
              VIEW MORE SERVICES
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                    <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">APEX IT SOLUTIONS</h4>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center justify-between">
                      <span>Windows Cloud Server</span>
                      <span className="text-blue-600">→</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Linux Dedicated Server</span>
                      <span className="text-blue-600">→</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Linux Dedicated Server</span>
                      <span className="text-blue-600">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-6">
                <span className="text-green-600 font-semibold text-sm">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Empowering Businesses with
                <span className="block text-green-600">Reliable & Innovative IT Solutions</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Apex IT Solutions, we blend creativity, technology, and strategy to deliver robust web development,
                mobile app development, and digital marketing services. Founded by a team of experienced professionals,
                we are committed to helping businesses thrive in the digital world. With a decade of experience, we are
                secure, scalable, and budget-friendly. With a decade of experience, we continue to innovate in the
                digital world.
              </p>
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full">
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section id="clients" className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our clients</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img src="/abstract-business-logo.png" alt="Client 1" className="w-full h-12 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img src="/generic-tech-logo.png" alt="Client 2" className="w-full h-12 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/generic-environmental-protection-logo.png"
                alt="Client 3"
                className="w-full h-12 object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img src="/generic-corporate-logo.png" alt="Client 4" className="w-full h-12 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img src="/abstract-enterprise-logo.png" alt="Client 5" className="w-full h-12 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img src="/business-solutions-logo.png" alt="Client 6" className="w-full h-12 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">HOW IT WORKS</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Get In Touch With Us</h3>
              <p className="text-slate-600 text-sm">Reach out to us via online through live chat or phone.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Explore Our Services And Products</h3>
              <p className="text-slate-600 text-sm">We will help you find the right service and choose your options.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Make Your Purchases</h3>
              <p className="text-slate-600 text-sm">
                Once ready to buy and have selected your service, proceed with the purchase.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.689-.069-4.849-.069 3.259 0 3.668-.014 4.948-.072 4.358-.2 6.78 2.618 6.98 6.98 1.281.058 1.689-.069 4.948-.069 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98-.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Discuss Your Requirements</h3>
              <p className="text-slate-600 text-sm">
                Once connected, let us know and discuss your needs and service requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Each Platform Needs Its Own Dedicated Server
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              At Apex IT Solutions, we design dedicated servers and hosting solutions to meet your specific
              requirements, ensuring optimal performance and reliability for your business applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-4 text-slate-800">C Commerce Server</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  E-commerce sites with dedicated servers that ensure faster page loads, secure transactions, and
                  seamless performance during high traffic periods.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-4 text-slate-800">Storage Server</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Dedicated storage servers offer large capacity efficiently with robust security and high-performance
                  for file storage and backup solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-4 text-slate-800">Game Server</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Gaming servers with high-performance and dedicated game servers ensuring smooth gameplay and minimal
                  latency for online multiplayer environments.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-4 text-slate-800">VPS Server Solution</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Virtual Private Servers offer dedicated VPS server offering exceptional performance, enhanced
                  security, and service reliability for all clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your business with innovative IT solutions? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white">Name</label>
                        <Input placeholder="Your Name" className="bg-slate-700 border-slate-600 text-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white">Email</label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Subject</label>
                      <Input placeholder="How can we help you?" className="bg-slate-700 border-slate-600 text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Message</label>
                      <Textarea
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <Button className="w-full bg-green-500 hover:bg-green-600">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">📧</span>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-slate-300">info@apexitsolutions.in</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">📞</span>
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-slate-300">+91-9717085418</p>
                      <p className="text-slate-300">+91-9717067236</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">📍</span>
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-slate-300">A-83, First Floor, Sector-63</p>
                      <p className="text-slate-300">Noida, U.P. (IN) – 201301</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">🕒</span>
                    </div>
                    <div>
                      <p className="font-medium">Working Hours</p>
                      <p className="text-slate-300">Mon - Sat: 10:00 AM - 7:00 PM</p>
                      <p className="text-slate-300">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group bg-transparent w-12 h-12 border-slate-600"
                  >
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Button>
                  <Button
  variant="outline"
  size="icon"
  className="hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300 group bg-transparent w-12 h-12 border-slate-600"
>
  <svg
    className="w-5 h-5 group-hover:scale-110 transition-transform"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5c0 3.3-2.45 5.75-5.75 5.75h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5c2.07 0 3.75-1.68 3.75-3.75v-8.5C20 5.68 18.32 4 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.1A2.9 2.9 0 1 0 12 15.9a2.9 2.9 0 0 0 0-5.8zM17.5 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
</Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300 group bg-transparent w-12 h-12 border-slate-600"
                  >
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Button>
                </div>
                <p className="text-sm text-slate-400 mt-3">Connect with us on social media</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-200 text-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/apex-logo-authentic.svg" alt="Apex IT Solutions" className="h-8 w-auto" />
              </div>
              <p className="text-slate-600">Empowering businesses with reliable and innovative IT solutions.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <a href="#" className="hover:text-slate-800 transition-colors">
                    Windows Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-800 transition-colors">
                    Linux Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-800 transition-colors">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-800 transition-colors">
                    Dedicated Servers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <a href="#about" className="hover:text-slate-800 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-800 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-800 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-slate-800 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <a href="#" className="hover:text-slate-800 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-800 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-800 transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-300 mt-8 pt-8 text-center text-slate-500">
            <p>&copy; 2025 Apex IT Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

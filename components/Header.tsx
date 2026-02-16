'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImage from '../assets/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
           
              <Image
                src={logoImage}
                alt="Urban Tasty Logo"
                width={40}
                height={40}
                className="w-16 h-16 object-contain"
                quality={100}
                priority
                unoptimized={true}
              />
           
            <span className="text-2xl font-bold">
              <span className="text-secondary">Urban</span> <span className="text-primary">Tasty</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Products
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Search and CTA */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link href="#contact" className="btn-primary">
              Get Quote
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <Link href="#home" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#products" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="#contact" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="#contact" className="block btn-primary text-center mt-4">
              Get Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

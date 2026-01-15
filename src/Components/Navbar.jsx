import React from 'react'
import { Facebook, Instagram, Heart, Menu,X, Twitter, Mail } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Benifits', href: '#benifits' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-full bg-primary z-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart className="text-pink-500" size={28} />
            <a href='#home' className="text-2xl font-bold text-white cursor-pointer">Tilia</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-pink-500 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#facebook" className="hidden md:block text-white hover:text-pink-500 transition-colors">
              <Facebook size={20}/>
            </a>
            <a href="#instagram" className="hidden md:block text-white hover:text-pink-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#instagram" className="hidden md:block text-white hover:text-pink-500 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#instagram" className="hidden md:block text-white hover:text-pink-500 transition-colors">
              <Mail size={20} />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-white hover:text-pink-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-3 md:hidden flex items-center gap-4">
            <a href="#facebook" className="text-white hover:text-pink-500 transition-colors">
              <Facebook size={20}/>
            </a>
            <a href="#instagram" className="text-white hover:text-pink-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#instagram" className="text-white hover:text-pink-500 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#instagram" className="text-white hover:text-pink-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

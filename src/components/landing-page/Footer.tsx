'use client';
import React, { useState } from 'react';
import { Mail, Facebook, Twitter, Instagram, Linkedin, Plane } from 'lucide-react';

const TravioFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribing:', email);
      setEmail('');
    }
  };

  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'How It Works', href: '#' },
      { name: 'AI Tools', href: '#' },
      { name: 'Pricing', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Safety', href: '#' },
      { name: 'Community Guidelines', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Licenses', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-linear-to-b from-slate-800 to-slate-900 text-gray-100">
      {/* Newsletter Section */}
      <div className="border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700/50 rounded-full mb-4 backdrop-blur-sm">
              <Mail className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold mb-3 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Stay Connected
            </h2>
            <p className="text-gray-300 text-lg">
              Get travel tips, match suggestions, and exclusive offers delivered to your inbox
            </p>
          </div>

          <div className="max-w-md mx-auto flex gap-0 shadow-2xl">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white text-gray-900  focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button
              onClick={handleSubscribe}
              className="px-8 py-4 bg-linear-to-r from-rose-500 to-rose-600 text-white  hover:from-rose-600 hover:to-rose-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-rose-500/50"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-9xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <Plane className="w-6 h-6 text-white transform -rotate-45" />
              </div>
              <span className="text-2xl font-bold">Travio.</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting travelers worldwide for unforgettable journeys and meaningful friendships.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  onMouseEnter={() => setIsHovered(social.label)}
                  onMouseLeave={() => setIsHovered(null)}
                  className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Travio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TravioFooter;
import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const essentialLinks = [
    { name: 'About us', href: '/about' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Track yout shipment', href: '/track' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Blog', href: '/blog' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-[#E8F953] px-6 py-12 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex items-start">
            <div className="flex items-center gap-2">
            <Link href="/">
            <Image 
              src="/assets/logo-2.png" 
              alt="Africargo" 
              width={140} 
              height={30}
              className="object-contain rounded-xl"
            />
          </Link>
             
            </div>
          </div>

          {/* Empty middle section for spacing */}
          <div className="hidden md:block"></div>

          {/* Essential Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Essential Links</h3>
            <nav>
              <ul className="space-y-2">
                {essentialLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="hover:text-gray-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex gap-4 mt-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="hover:text-gray-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-black/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Address */}
            <div className="text-sm">
              2118 Thornridge Cir. Syracuse,<br />
              Connecticut 35624
            </div>

            {/* Contact Info */}
            <div className="text-sm">
              <div>ship@africargo.com</div>
              <div>07 88 07 07 02</div>
            </div>

            {/* Legal Links and Social */}
            <div className="flex flex-col md:items-end gap-4">
             
              <div className="flex gap-6 text-sm">
                <a 
                  href="/privacy" 
                  className="hover:text-gray-600 transition-colors"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  className="hover:text-gray-600 transition-colors"
                >
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
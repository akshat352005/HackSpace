import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Hackathons', href: '/hackathons' },
    { name: 'Workshops', href: '/workshops' },
    { name: 'Community', href: '/community' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
<nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img 
          src="/Logo.png" 
          alt="HACKSPACE Logo" 
          className="w-12 h-12 object-contain filter brightness-110 contrast-110"
        />
        <span className="text-2xl font-bold text-white font-orbitron tracking-wider">
          HACKSPACE
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Join Button */}
      <div className="hidden md:block">
        <button className="group bg-gradient-to-r from-orange-500 via-gray-300 to-orange-500 hover:from-orange-500  hover:to-orange-500 text-black px-4 py-2 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 flex items-center space-x-2">
          Join Community
        </button>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile menu */}
  {isMenuOpen && (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-white/10">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-300 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <button className="w-full mt-4 bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300">
          Join Community
        </button>
      </div>
    </div>
  )}
</nav>
  );
}
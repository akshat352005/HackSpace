import { ArrowUp, Github, Twitter, MessageSquare, Mail, Heart } from 'lucide-react';

const footerLinks = {
  platform: [
    { name: 'Events', href: '#events' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Community', href: '#community' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Tutorials', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#contact' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Code of Conduct', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black/60 backdrop-blur-sm border-t border-purple-500/20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center">
                <i className="fas fa-rocket text-white text-lg"></i>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent font-orbitron">
                HackSpace
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Where tech meets the cosmos. Join our community of innovators, creators, and dreamers 
              building the future of technology across the universe.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="group w-10 h-10 bg-white/10 hover:bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-300" />
              </a>
              <a href="#" className="group w-10 h-10 bg-white/10 hover:bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-blue-300" />
              </a>
              <a href="#" className="group w-10 h-10 bg-white/10 hover:bg-purple-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-600/30 hover:border-purple-600/50 transition-all duration-300 hover:scale-110">
                <MessageSquare className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
              </a>
              <a href="#" className="group w-10 h-10 bg-white/10 hover:bg-cyan-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-300" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-orbitron">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-300 transition-colors duration-300 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-orbitron">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-orbitron">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-pink-300 transition-colors duration-300 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-orbitron">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-green-300 transition-colors duration-300 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 font-orbitron">Stay in the Loop</h3>
              <p className="text-gray-400">
                Get the latest updates on cosmic events, workshops, and community highlights delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-purple-500/20">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>&copy; 2024 HackSpace</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>by the cosmic community.</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 bg-white/10 hover:bg-purple-500/20 backdrop-blur-sm text-gray-400 hover:text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 border border-purple-500/30 hover:border-purple-500/50"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}

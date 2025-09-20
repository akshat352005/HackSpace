import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-gray-300 to-orange-500 bg-clip-text text-transparent font-orbitron">
              Contact Mission Control
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to launch your journey? Get in touch with our cosmic team and let's explore 
            the infinite possibilities together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-gray-300 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-400">hackspace2025@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-gray-300 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-400">+91 9773545482</div>
                    <div className="text-gray-400">+91 9473057714</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-gray-300 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Headquarters</div>
                    <div className="text-gray-400">New Delhi,India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <MessageCircle className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-white font-semibold mb-1">Live Chat</div>
                <div className="text-gray-400 text-sm">Available 24/7</div>
              </button>
              
              <button className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-white font-semibold mb-1">Book Meeting</div>
                <div className="text-gray-400 text-sm">Schedule a call</div>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-300 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-white/10 backdrop-blur-sm border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-300 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-white/10 backdrop-blur-sm border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/10 backdrop-blur-sm border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-50 text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full bg-white/10 backdrop-blur-sm border border-orange-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                >
                  <option value="topic" className="bg-gray-800">Select a topic</option>
                  <option value="general" className="bg-gray-800">General Inquiry</option>
                  <option value="hackathon" className="bg-gray-800">Hackathon Participation</option>
                  <option value="workshop" className="bg-gray-800">Workshop Registration</option>
                  <option value="partnership" className="bg-gray-800">Partnership Opportunity</option>
                  <option value="support" className="bg-gray-800">Technical Support</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-white/10 backdrop-blur-sm border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your cosmic mission..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 via-gray-300 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-black py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2 group"
              >
                <span>Launch Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-xl font-bold text-white mb-4 font-orbitron">Response Time</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our mission control team typically responds within 24 hours during Earth business days. 
              For urgent matters, please use our live chat feature for real-time assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

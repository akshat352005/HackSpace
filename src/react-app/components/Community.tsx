import { Github, Twitter, MessageSquare, Users, Code, Zap } from 'lucide-react';

const communityStats = [
  { icon: Users, label: 'Active Members', value: '10,247', color: 'text-purple-400' },
  { icon: Code, label: 'Projects Built', value: '1,534', color: 'text-cyan-400' },
  { icon: Zap, label: 'Lines of Code', value: '2.1M+', color: 'text-pink-400' },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "AI Research Engineer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "HackSpace has been instrumental in my career growth. The community here is incredibly supportive and innovative.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Blockchain Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Amazing hackathons and workshops. I've learned more here in 6 months than anywhere else!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "The networking opportunities and collaborative projects have opened so many doors for me.",
    rating: 5
  }
];

export default function Community() {
  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-gray-300 to-orange-500 bg-clip-text text-transparent font-orbitron">
              Join Our Cosmos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with fellow space explorers, share knowledge, and build the future together. 
            Our community spans galaxies of innovation.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 text-center">
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-white mb-2 font-orbitron">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center font-orbitron">Connect With Us</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="group flex items-center space-x-3 bg-white/10 hover:bg-purple-500/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 border border-purple-500/30 hover:border-purple-500/50">
              <MessageSquare className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
              <span className="font-semibold">Discord</span>
              <span className="text-gray-400 text-sm">8.2k members</span>
            </a>
            <a href="#" className="group flex items-center space-x-3 bg-white/10 hover:bg-cyan-500/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 border border-cyan-500/30 hover:border-cyan-500/50">
              <Github className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
              <span className="font-semibold">GitHub</span>
              <span className="text-gray-400 text-sm">Open Source</span>
            </a>
            <a href="#" className="group flex items-center space-x-3 bg-white/10 hover:bg-blue-500/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 border border-blue-500/30 hover:border-blue-500/50">
              <Twitter className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
              <span className="font-semibold">Twitter</span>
              <span className="text-gray-400 text-sm">@hackspace_cosmos</span>
            </a>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-12 text-center font-orbitron">What Our Community Says</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-purple-500/30"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">Ready to Launch Your Journey?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators, creators, and dreamers who are building the future of technology.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
              Join HackSpace Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
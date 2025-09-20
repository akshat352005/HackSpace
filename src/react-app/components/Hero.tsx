import { ArrowRight, Users, Calendar, Code } from 'lucide-react';

export default function Hero() {
  return (
<section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background handled globally by Starfield on the page */}

  {/* Content */}
  <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
    <div className="mb-8">
      <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6">
      <span className="bg-gradient-to-r from-orange-500 via-gray-300 to-orange-500 bg-clip-text text-transparent font-orbitron text-6xl">
        HackSpace
      </span>
      </h1>
      <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 font-pacifico">
       A Playground for Tech Rebels
      </p>
      <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
        Join our cosmic tech community to explore the universe of technology and innovation. 
        Participate in hackathons, workshops, and events that push the boundaries of what's possible.
      </p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
        <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
        <div className="text-3xl font-bold text-white mb-2 font-orbitron">Will be updated soon</div>
        <div className="text-gray-400">Active Members</div>
      </div>
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
        <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
        <div className="text-3xl font-bold text-white mb-2 font-orbitron">Will be updated soon</div>
        <div className="text-gray-400">Events Hosted</div>
      </div>
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:transform hover:scale-105">
        <Code className="w-8 h-8 text-pink-400 mx-auto mb-3" />
        <div className="text-3xl font-bold text-white mb-2 font-orbitron">Will be updated soon</div>
        <div className="text-gray-400">Projects Built</div>
      </div>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button className="group bg-gradient-to-r from-orange-500 via-gray-300 to-orange-500 hover:from-orange-500  hover:to-orange-500 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 flex items-center space-x-2">
        <span>Explore Universe</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
      <button className="border border-orange-500/50 hover:border-grey-500 text-grey-300 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-purple-500/10">
        Join Community
      </button>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</section>
  );
}
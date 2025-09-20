import { PlayCircle, Clock, Star, Users, ChevronRight } from 'lucide-react';

const workshops = [
  {
    id: 1,
    title: "Introduction to AI & Machine Learning",
    instructor: "Dr. Sarah Kim",
    instructorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    duration: "4 weeks",
    level: "Beginner",
    rating: 4.9,
    students: 2847,
    price: "Free",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    description: "Master the fundamentals of AI and ML with hands-on projects and real-world applications.",
    topics: ["Neural Networks", "Deep Learning", "Python", "TensorFlow"]
  },
  {
    id: 2,
    title: "Blockchain Development Masterclass",
    instructor: "Alex Rodriguez",
    instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    duration: "6 weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 1924,
    price: "$49",
    image: "https://images.unsplash.com/photo-1559445368-b8a993676d7a?w=600&h=400&fit=crop",
    description: "Build decentralized applications and smart contracts from scratch.",
    topics: ["Solidity", "Ethereum", "Smart Contracts", "Web3.js"]
  },
  {
    id: 3,
    title: "Full Stack Development with React",
    instructor: "Emily Chen",
    instructorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    duration: "8 weeks",
    level: "Intermediate",
    rating: 4.9,
    students: 3521,
    price: "$79",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
    description: "Complete guide to modern web development with React, Node.js, and MongoDB.",
    topics: ["React", "Node.js", "MongoDB", "Authentication"]
  }
];

const features = [
  { icon: PlayCircle, text: "Live Interactive Sessions" },
  { icon: Users, text: "Expert Mentorship" },
  { icon: Star, text: "Industry Certification" },
  { icon: Clock, text: "Flexible Schedule" }
];

export default function Workshops() {
  return (
    <section id="workshops" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-cyan-900/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-gray-300 to-orange-500 bg-clip-text text-transparent font-orbitron">
              Cosmic Workshops
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Level up your skills with expert-led workshops designed to accelerate your journey 
            through the universe of technology.
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30">
                <feature.icon className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300 text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={workshop.image} 
                  alt={workshop.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    workshop.level === 'Beginner' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                    workshop.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                    'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}>
                    {workshop.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {workshop.price}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {workshop.title}
                </h3>
                
                {/* Instructor */}
                <div className="flex items-center mb-3">
                  <img 
                    src={workshop.instructorAvatar} 
                    alt={workshop.instructor}
                    className="w-8 h-8 rounded-full mr-3 border-2 border-purple-500/30"
                  />
                  <span className="text-gray-300 text-sm">{workshop.instructor}</span>
                </div>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {workshop.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-cyan-400" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      <span>{workshop.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-purple-400" />
                    <span>{workshop.students.toLocaleString()}</span>
                  </div>
                </div>
                
                {/* Topics */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {workshop.topics.slice(0, 3).map((topic, index) => (
                      <span key={index} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs border border-purple-500/30">
                        {topic}
                      </span>
                    ))}
                    {workshop.topics.length > 3 && (
                      <span className="text-gray-400 text-xs px-2 py-1">
                        +{workshop.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 via-gray-300 to-orange-500 hover:from-orange-500 hover:to-orange-500 text-black py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group">
                  <span>Enroll Now</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">Ready to Expand Your Universe?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of learners who have transformed their careers through our cosmic workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 via-gray-300 to-orange-500 hover:from-orange-500 hover:to-orange-500 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
                Browse All Workshops
              </button>
              <button className="border border-cyan-500/50 hover:border-cyan-500 text-cyan-300 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-cyan-500/10">
                Become an Instructor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

const events = [
  {
id: 1,
title: "Cosmic Code Hackathon 2024",
date: "2024-10-15",
time: "09:00 AM",
location: "Virtual & San Francisco",
attendees: 1200,
description: "48-hour hackathon focused on space technology and AI innovation",
image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=300&fit=crop",
category: "Hackathon",
status: "upcoming"
  },
  {
id: 2,
title: "AI & Machine Learning Workshop",
date: "2024-09-28",
time: "02:00 PM",
location: "New York Tech Hub",
attendees: 150,
description: "Deep dive into modern ML techniques and neural networks",
image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
category: "Workshop",
status: "upcoming"
  },
  {
id: 3,
title: "Blockchain & Web3 Summit",
date: "2024-11-05",
time: "10:00 AM",
location: "Austin Convention Center",
attendees: 800,
description: "Exploring the future of decentralized technologies",
image: "https://images.unsplash.com/photo-1559445368-b8a993676d7a?w=500&h=300&fit=crop",
category: "Summit",
status: "upcoming"
  }
];

export default function Events() {
  return (
<section id="events" className="py-20 px-4 sm:px-6 lg:px-8 relative">
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-purple-900/20"></div>
  
  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-orange-500 via-gray-300 to-orange-500 bg-clip-text text-transparent font-orbitron">
          Upcoming Events
        </span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Join us at the frontier of technology. Our events bring together the brightest minds 
        to shape the future of innovation.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <div key={event.id} className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
          <div className="relative overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-gradient-to-r from-orange-500 via-gray-300 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                {event.category}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-green-500/20 backdrop-blur-sm text-green-300 px-3 py-1 rounded-full text-sm font-semibold border border-green-500/30">
                {event.status}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 via-gray-300 to-orange-500 transition-colors duration-300">
              {event.title}
            </h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              {event.description}
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-300 text-sm">
                <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
                <Clock className="w-4 h-4 ml-4 mr-2 text-cyan-400" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-pink-400" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Users className="w-4 h-4 mr-2 text-green-400" />
                <span>{event.attendees.toLocaleString()} attendees</span>
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-orange-500 via-gray-300 to-orange-500 hover:from-orange-500 via-gray-300 hover:to-orange-500 text-black py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group">
              <span>Register Now</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-orange-500 hover:border-orange-500">
        View All Events
      </button>
    </div>
  </div>
</section>
  );
}
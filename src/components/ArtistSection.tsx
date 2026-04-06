import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ARTISTS = [
  {
    id: 1,
    name: "Elena Rossi",
    specialty: "Luxury Weddings",
    experience: "12+ Years",
    img: "https://images.squarespace-cdn.com/content/v1/57451c424c2f85ae9b18f48d/1557345090033-6M91V7W2KK16JOQQO2DY/Common%2BDove%2BPhotography.jpg",
    awards: 4
  },
  {
    id: 2,
    name: "Marcus Thorne",
    specialty: "Corporate Galas",
    experience: "8+ Years",
    img: "https://content.jdmagicbox.com/v2/comp/delhi/r9/011pxx11.xx11.120904103551.i5r9/catalogue/fnp-floral-design-school-chattarpur-delhi-flower-making-classes-6uwd4o.jpg",
    awards: 2
  },
  {
    id: 3,
    name: "Sofia Chen",
    specialty: "Modern Artistry",
    experience: "10+ Years",
    img: "https://cdn.dribbble.com/userupload/43449135/file/original-e86e353d4a21dc7c3c6a1b9f7ae1dccb.png?resize=400x0",
    awards: 5
  }
];

export function ArtistSection() {
  return (
    <section className="py-32 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-medium tracking-widest uppercase text-xs mb-4 block"
            >
              The Artisans
            </motion.span>
            <h2 className="text-4xl md:text-6xl mb-4">Mastering the <br /><span className="italic">Floral Arts</span></h2>
            <p className="text-secondary/60 max-w-md text-lg">
              Meet the world-class designers who bring the OpalSphere vision to life with every installation.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/community" className="bg-secondary text-primary px-8 py-4 rounded-full font-medium tracking-widest uppercase text-[10px] hover:bg-accent transition-all shadow-lg">
              Learn From Artists
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ARTISTS.map((artist, i) => (
            <motion.div 
              key={artist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[600px] rounded-[3rem] overflow-hidden cursor-pointer shadow-xl border border-accent/5"
            >
              <img 
                src={artist.img} 
                alt={artist.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="flex items-center space-x-4 mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="w-8 h-[1px] bg-accent" />
                  <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">{artist.specialty}</span>
                </div>
                
                <h3 className="text-primary text-3xl md:text-4xl mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">{artist.name}</h3>
                
                <div className="flex items-center space-x-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                  <div className="flex items-center space-x-2">
                    <Award size={14} className="text-accent" />
                    <span className="text-primary/70 text-xs font-medium uppercase tracking-widest">{artist.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star size={14} className="text-accent" />
                    <span className="text-primary/70 text-xs font-medium uppercase tracking-widest">{artist.awards} Awards</span>
                  </div>
                </div>

                <div className="mt-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-400">
                  <button className="flex items-center space-x-3 text-primary text-xs font-bold uppercase tracking-[0.3em] group/btn">
                    <span>View Portfolio</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community CTA */}
        <div className="mt-32 bg-white rounded-[3rem] p-12 md:p-20 border border-accent/10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl mb-8 leading-tight">Join the <br /><span className="italic text-accent">Floral Revolution</span></h2>
              <p className="text-secondary/60 text-lg mb-10 leading-relaxed">
                Whether you're a seasoned professional or a passionate beginner, OpalSphere offers the tools and community to elevate your craft.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/community" className="bg-secondary text-primary px-10 py-5 rounded-full font-medium tracking-widest uppercase text-xs hover:bg-accent transition-all shadow-lg">
                  Join as Decorator
                </Link>
                <Link to="/community" className="border border-secondary/10 text-secondary px-10 py-5 rounded-full font-medium tracking-widest uppercase text-xs hover:bg-secondary hover:text-primary transition-all">
                  Learn Floral Design
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary/30 p-8 rounded-3xl border border-accent/5">
                <Heart size={32} className="text-accent mb-6" />
                <h4 className="text-2xl mb-2">10k+</h4>
                <p className="text-secondary/50 text-sm uppercase tracking-widest font-bold">Community Members</p>
              </div>
              <div className="bg-primary/30 p-8 rounded-3xl border border-accent/5 mt-12">
                <Star size={32} className="text-accent mb-6" />
                <h4 className="text-2xl mb-2">500+</h4>
                <p className="text-secondary/50 text-sm uppercase tracking-widest font-bold">Expert Artists</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>
    </section>
  );
}

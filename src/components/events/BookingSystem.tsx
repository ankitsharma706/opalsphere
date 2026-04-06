import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, DollarSign, Sparkles, ArrowRight, ArrowLeft, Check, Info, Loader2 } from 'lucide-react';
import { bookingApi } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const STEPS = [
  { id: 1, title: 'Event Type', icon: Sparkles },
  { id: 2, title: 'Date & Location', icon: Calendar },
  { id: 3, title: 'Budget Range', icon: DollarSign },
  { id: 4, title: 'Theme & Style', icon: MapPin }
];

const EVENT_TYPES = [
  { id: 'wedding', name: 'Wedding', basePrice: 5000, icon: '💍' },
  { id: 'corporate', name: 'Corporate', basePrice: 3000, icon: '🏢' },
  { id: 'private', name: 'Private Event', basePrice: 2000, icon: '🏠' },
  { id: 'luxury', name: 'Luxury Experience', basePrice: 10000, icon: '💎' }
];

const THEMES = [
  { id: 'minimal', name: 'Minimal Luxury', color: '#FAF9F6', multiplier: 1 },
  { id: 'royal', name: 'Royal Heritage', color: '#8B0000', multiplier: 2.5 },
  { id: 'enchanted', name: 'Enchanted Forest', color: '#1F3D2B', multiplier: 1.8 },
  { id: 'coastal', name: 'Coastal Chic', color: '#E0F2F1', multiplier: 1.5 }
];

export function BookingSystem() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    eventType: EVENT_TYPES[0],
    date: '',
    location: '',
    budget: 5000,
    theme: THEMES[0]
  });

  const estimatedPrice = useMemo(() => {
    return Math.round(formData.eventType.basePrice * formData.theme.multiplier);
  }, [formData.eventType, formData.theme]);

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
  const handlePrev = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleConfirm = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    setLoading(true);
    try {
      await bookingApi.create({
        eventType: formData.eventType.name,
        date: formData.date,
        location: formData.location,
        budget: formData.budget.toString(),
        theme: formData.theme.name
      });
      navigate('/profile');
    } catch (err) {
      console.error('Booking failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking-system" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Form Side */}
          <div className="space-y-12">
            <div>
              <span className="text-[#E8B4B8] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Interactive Booking</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#1F3D2B] mb-8 leading-tight">Design Your Experience</h2>
              <p className="text-[#1F3D2B]/60 text-lg font-light leading-relaxed">
                Our bespoke event design starts with your vision. Tell us about your event, and we'll craft a floral narrative that speaks your language.
              </p>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#1F3D2B]/5 -translate-y-1/2 z-0" />
              {STEPS.map((step) => (
                <div key={step.id} className="relative z-10 flex flex-col items-center space-y-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${currentStep >= step.id ? 'bg-[#1F3D2B] text-white shadow-xl' : 'bg-white border border-[#1F3D2B]/10 text-[#1F3D2B]/30'}`}>
                    {currentStep > step.id ? <Check size={20} /> : <step.icon size={20} />}
                  </div>
                  <span className={`text-[8px] font-bold uppercase tracking-widest transition-colors duration-500 ${currentStep === step.id ? 'text-[#1F3D2B]' : 'text-[#1F3D2B]/30'}`}>{step.title}</span>
                </div>
              ))}
            </div>

            {/* Form Content */}
            <div className="bg-[#FAF9F6] p-12 rounded-[3rem] min-h-[400px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {currentStep === 1 && (
                    <div className="space-y-8">
                      <h3 className="text-2xl font-serif text-[#1F3D2B]">What are we celebrating?</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {EVENT_TYPES.map(type => (
                          <button 
                            key={type.id}
                            onClick={() => setFormData({ ...formData, eventType: type })}
                            className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col items-center space-y-4 ${formData.eventType.id === type.id ? 'bg-white border-[#E8B4B8] shadow-xl' : 'bg-transparent border-[#1F3D2B]/5 hover:border-[#1F3D2B]/20'}`}
                          >
                            <span className="text-4xl">{type.icon}</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]">{type.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-8">
                      <h3 className="text-2xl font-serif text-[#1F3D2B]">When and where?</h3>
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Event Date</label>
                          <input 
                            type="date" 
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full p-5 bg-white border-none rounded-2xl text-sm font-medium focus:ring-1 focus:ring-[#E8B4B8] transition-all"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Location / Venue</label>
                          <input 
                            type="text" 
                            placeholder="e.g. Lake Como, Italy"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full p-5 bg-white border-none rounded-2xl text-sm font-medium focus:ring-1 focus:ring-[#E8B4B8] transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-8">
                      <h3 className="text-2xl font-serif text-[#1F3D2B]">Investment range?</h3>
                      <div className="space-y-12">
                        <div className="space-y-6">
                          <div className="flex justify-between items-end">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Target Budget</span>
                            <span className="text-3xl font-serif text-[#1F3D2B]">${formData.budget.toLocaleString()}</span>
                          </div>
                          <input 
                            type="range" 
                            min="1000" 
                            max="50000" 
                            step="1000"
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
                            className="w-full h-1 bg-[#1F3D2B]/10 rounded-lg appearance-none cursor-pointer accent-[#E8B4B8]"
                          />
                          <div className="flex justify-between text-[8px] font-bold uppercase tracking-widest text-[#1F3D2B]/20">
                            <span>$1,000</span>
                            <span>$50,000+</span>
                          </div>
                        </div>
                        <div className="p-6 bg-white rounded-2xl flex items-start space-x-4">
                          <Info size={16} className="text-[#E8B4B8] mt-1" />
                          <p className="text-[10px] font-medium text-[#1F3D2B]/60 leading-relaxed uppercase tracking-widest">
                            Our smart pricing suggests a minimum of ${estimatedPrice.toLocaleString()} for a {formData.eventType.name} with {formData.theme.name} theme.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-8">
                      <h3 className="text-2xl font-serif text-[#1F3D2B]">Visual identity?</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {THEMES.map(theme => (
                          <button 
                            key={theme.id}
                            onClick={() => setFormData({ ...formData, theme })}
                            className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col items-center space-y-4 ${formData.theme.id === theme.id ? 'bg-white border-[#E8B4B8] shadow-xl' : 'bg-transparent border-[#1F3D2B]/5 hover:border-[#1F3D2B]/20'}`}
                          >
                            <div className="w-12 h-12 rounded-full border-2 border-[#1F3D2B]/5" style={{ backgroundColor: theme.color }} />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]">{theme.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between pt-12 border-t border-[#1F3D2B]/5">
                <button 
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className={`flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest transition-all ${currentStep === 1 ? 'opacity-0' : 'text-[#1F3D2B]/40 hover:text-[#1F3D2B]'}`}
                >
                  <ArrowLeft size={16} />
                  <span>Previous</span>
                </button>
                <button 
                  disabled={loading}
                  onClick={currentStep === 4 ? handleConfirm : handleNext}
                  className="px-10 py-4 bg-[#1F3D2B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#E8B4B8] transition-all duration-500 flex items-center space-x-3 shadow-xl disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin" size={16} /> : (
                    <>
                      <span>{currentStep === 4 ? 'Confirm Booking' : 'Next Step'}</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Preview Side */}
          <div className="sticky top-32 space-y-12">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-white shadow-2xl group">
              <motion.div 
                key={formData.theme.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" 
                  alt="Live Preview" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div 
                  className="absolute inset-0 mix-blend-overlay opacity-30" 
                  style={{ backgroundColor: formData.theme.color }}
                />
              </motion.div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-12 left-12 right-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Sparkles size={20} />
                  </div>
                  <span className="text-white font-bold uppercase tracking-[0.4em] text-[10px]">Live Preview</span>
                </div>
                <h3 className="text-4xl font-serif text-white mb-4">Your {formData.eventType.name}</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-bold uppercase tracking-widest text-white">
                    {formData.theme.name}
                  </div>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-bold uppercase tracking-widest text-white">
                    {formData.location || 'Location TBD'}
                  </div>
                </div>
              </div>
              
              {/* Estimate Badge */}
              <div className="absolute top-12 right-12 w-32 h-32 rounded-full bg-white flex flex-col items-center justify-center shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">Estimate</span>
                <span className="text-2xl font-serif text-[#1F3D2B]">${estimatedPrice.toLocaleString()}</span>
              </div>
            </div>

            <div className="bg-[#FAF9F6] p-10 rounded-[2.5rem] space-y-8">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1F3D2B]/40">AI Recommendation</h4>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-[#E8B4B8]/10 flex items-center justify-center text-[#E8B4B8] flex-shrink-0">
                  <Sparkles size={20} />
                </div>
                <p className="text-[#1F3D2B]/60 text-sm font-light leading-relaxed italic">
                  "Based on your {formData.theme.name} theme, we recommend our signature 'Midnight Velvet' floral structures to add depth and drama to your {formData.eventType.name}."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

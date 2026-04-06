import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Calendar, MapPin, DollarSign, Leaf, ArrowRight, ChevronLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db, OperationType, handleFirestoreError } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

interface BookingFormProps {
  onSuccess?: () => void;
}

export function BookingForm({ onSuccess }: BookingFormProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState({
    type: '',
    date: '',
    location: '',
    budget: '',
    theme: ''
  });

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 1 && !formData.type) newErrors.type = 'Please select an event type';
    if (step === 2) {
      if (!formData.date) newErrors.date = 'Please select a date';
      if (!formData.location) newErrors.location = 'Please enter a location';
    }
    if (step === 3) {
      if (!formData.budget) newErrors.budget = 'Please select a budget range';
      if (!formData.theme) newErrors.theme = 'Please select a theme';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(s => s + 1);
    }
  };

  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    setIsSubmitting(true);
    try {
      const bookingData = {
        ...formData,
        userId: user.uid,
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      
      await addDoc(collection(db, 'bookings'), bookingData);
      setStep(5);
      if (onSuccess) onSuccess();
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'bookings');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { id: 1, title: 'Event Type', icon: <Leaf size={18} /> },
    { id: 2, title: 'Details', icon: <Calendar size={18} /> },
    { id: 3, title: 'Theme', icon: <DollarSign size={18} /> },
    { id: 4, title: 'Review', icon: <Check size={18} /> },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Header */}
      <div className="mb-12">
        <div className="flex justify-between relative">
          <div className="absolute top-5 left-0 right-0 h-[1px] bg-accent/10 -z-0"></div>
          <div 
            className="absolute top-5 left-0 h-[1px] bg-accent -z-0 transition-all duration-500 ease-out"
            style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
          
          {steps.map((s) => (
            <div key={s.id} className="relative z-10 flex flex-col items-center group">
              <div 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border",
                  step >= s.id 
                    ? "bg-accent border-accent text-white shadow-lg shadow-accent/20" 
                    : "bg-white border-accent/10 text-secondary/30"
                )}
              >
                {step > s.id ? <Check size={18} /> : s.icon}
              </div>
              <span className={cn(
                "text-[9px] font-bold uppercase tracking-[0.2em] mt-3 transition-colors duration-300",
                step >= s.id ? "text-secondary" : "text-secondary/30"
              )}>
                {s.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-accent/5 min-h-[450px] flex flex-col relative">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex-grow"
            >
              <h2 className="text-2xl font-serif mb-2">What are we celebrating?</h2>
              <p className="text-secondary/40 text-sm mb-8">Select the type of event you're planning.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Wedding', 'Corporate Gala', 'Private Party', 'Birthday', 'Exhibition'].map((type) => (
                  <button
                    key={type}
                    onClick={() => { setFormData({ ...formData, type }); setErrors({}); }}
                    className={cn(
                      "p-5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between group",
                      formData.type === type 
                        ? "border-accent bg-accent/5 ring-1 ring-accent/20" 
                        : "border-accent/10 hover:border-accent/30 bg-primary/20"
                    )}
                  >
                    <span className="font-medium">{type}</span>
                    <div className={cn(
                      "w-5 h-5 rounded-full border flex items-center justify-center transition-all",
                      formData.type === type ? "bg-accent border-accent" : "border-accent/20"
                    )}>
                      {formData.type === type && <Check size={12} className="text-white" />}
                    </div>
                  </button>
                ))}
              </div>
              {errors.type && <p className="text-red-400 text-xs mt-4 animate-fade-in">{errors.type}</p>}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex-grow space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif mb-2">The Logistics</h2>
                <p className="text-secondary/40 text-sm mb-8">Tell us when and where the magic happens.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/50 ml-1">Event Date</label>
                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/30 group-focus-within:text-accent transition-colors" size={18} />
                    <input 
                      type="date" 
                      className={cn(
                        "w-full bg-primary/30 border border-accent/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-accent focus:bg-white transition-all",
                        errors.date && "border-red-200 bg-red-50/30"
                      )}
                      value={formData.date}
                      onChange={(e) => { setFormData({ ...formData, date: e.target.value }); setErrors({ ...errors, date: '' }); }}
                    />
                  </div>
                  {errors.date && <p className="text-red-400 text-[10px] ml-1">{errors.date}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/50 ml-1">Location / Venue</label>
                  <div className="relative group">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/30 group-focus-within:text-accent transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="e.g. The Grand Plaza, NYC"
                      className={cn(
                        "w-full bg-primary/30 border border-accent/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-accent focus:bg-white transition-all",
                        errors.location && "border-red-200 bg-red-50/30"
                      )}
                      value={formData.location}
                      onChange={(e) => { setFormData({ ...formData, location: e.target.value }); setErrors({ ...errors, location: '' }); }}
                    />
                  </div>
                  {errors.location && <p className="text-red-400 text-[10px] ml-1">{errors.location}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex-grow space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif mb-2">Budget & Aesthetic</h2>
                <p className="text-secondary/40 text-sm mb-8">Help us align with your preferences.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/50 ml-1">Investment Range</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['$2k - $5k', '$5k - $15k', '$15k - $50k', 'Bespoke ($50k+)'].map((b) => (
                      <button
                        key={b}
                        onClick={() => { setFormData({ ...formData, budget: b }); setErrors({ ...errors, budget: '' }); }}
                        className={cn(
                          "py-3 px-4 rounded-xl border text-xs transition-all text-center",
                          formData.budget === b 
                            ? "border-accent bg-accent text-white" 
                            : "border-accent/10 bg-primary/20 hover:border-accent/30"
                        )}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                  {errors.budget && <p className="text-red-400 text-[10px] ml-1">{errors.budget}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/50 ml-1">Design Theme</label>
                  <select 
                    className={cn(
                      "w-full bg-primary/30 border border-accent/10 rounded-2xl py-4 px-4 focus:outline-none focus:border-accent focus:bg-white transition-all appearance-none",
                      errors.theme && "border-red-200 bg-red-50/30"
                    )}
                    value={formData.theme}
                    onChange={(e) => { setFormData({ ...formData, theme: e.target.value }); setErrors({ ...errors, theme: '' }); }}
                  >
                    <option value="">Select a theme</option>
                    <option value="minimalist">Minimalist & Modern</option>
                    <option value="vintage">Vintage Romance</option>
                    <option value="tropical">Tropical Paradise</option>
                    <option value="bohemian">Bohemian Chic</option>
                    <option value="classic">Classic Elegance</option>
                  </select>
                  {errors.theme && <p className="text-red-400 text-[10px] ml-1">{errors.theme}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex-grow space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif mb-2">Review Your Vision</h2>
                <p className="text-secondary/40 text-sm mb-8">Double check the details before we start crafting.</p>
              </div>

              <div className="bg-primary/20 rounded-3xl p-8 space-y-5 border border-accent/5">
                {[
                  { label: 'Event Type', value: formData.type },
                  { label: 'Date', value: formData.date },
                  { label: 'Location', value: formData.location },
                  { label: 'Budget', value: formData.budget },
                  { label: 'Theme', value: formData.theme, capitalize: true },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center group">
                    <span className="text-secondary/40 text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                    <span className={cn("font-medium text-secondary", item.capitalize && "capitalize")}>{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div 
              key="step5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-grow flex flex-col items-center justify-center text-center py-10"
            >
              <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 shadow-inner">
                <Check size={48} strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-serif mb-4">Vision Received</h2>
              <p className="text-secondary/50 max-w-sm mx-auto mb-10 leading-relaxed">
                Thank you for choosing OpalSphere. Our lead designer will review your request and contact you within 24 hours.
              </p>
              <button 
                onClick={() => navigate('/profile')}
                className="bg-secondary text-primary px-12 py-4 rounded-full font-medium shadow-xl shadow-secondary/10 hover:scale-105 transition-all"
              >
                View My Bookings
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        {step < 5 && (
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-accent/5">
            <button 
              onClick={prevStep}
              disabled={step === 1}
              className={cn(
                "flex items-center space-x-2 text-sm font-medium transition-all",
                step === 1 ? "opacity-0 pointer-events-none" : "text-secondary/40 hover:text-secondary"
              )}
            >
              <ChevronLeft size={18} />
              <span>Back</span>
            </button>
            
            <button 
              onClick={step === 4 ? handleSubmit : nextStep}
              disabled={isSubmitting}
              className="bg-secondary text-primary px-10 py-4 rounded-full font-medium flex items-center group shadow-xl shadow-secondary/10 hover:bg-secondary/90 transition-all disabled:opacity-50"
            >
              <span>{step === 4 ? (isSubmitting ? 'Submitting...' : 'Confirm Vision') : 'Continue'}</span>
              {step < 4 && <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

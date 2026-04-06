import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login({ email, password });
      navigate('/profile');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError('');
    try {
      await loginWithGoogle();
      navigate('/profile');
    } catch (err: any) {
      setError('Google login failed. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full px-4">
        <div className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-accent/5">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-serif mb-2">Welcome Back</h1>
            <p className="text-secondary/50 text-sm">Access your OpalSphere account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-500 text-xs rounded-xl border border-red-100">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/50 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/30" size={18} />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-primary/50 border border-accent/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-accent"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/50 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/30" size={18} />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-primary/50 border border-accent/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-accent"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <button type="button" className="text-xs text-accent hover:underline">Forgot password?</button>
            </div>

            <button 
              disabled={loading || googleLoading}
              className="w-full bg-secondary text-primary py-5 rounded-full font-bold tracking-widest uppercase text-xs flex items-center justify-center group shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : (
                <>Sign In <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>

          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-accent/10"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold">
              <span className="bg-white px-4 text-secondary/30">Or continue with</span>
            </div>
          </div>

          <button 
            onClick={handleGoogleLogin}
            disabled={loading || googleLoading}
            className="mt-6 w-full bg-white text-secondary border border-accent/10 py-5 rounded-full font-bold tracking-widest uppercase text-xs flex items-center justify-center group hover:bg-primary/50 transition-all disabled:opacity-50"
          >
            {googleLoading ? <Loader2 className="animate-spin" size={18} /> : (
              <>
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-4 h-4 mr-3" alt="Google" referrerPolicy="no-referrer" />
                Google
              </>
            )}
          </button>

          <p className="mt-10 text-center text-sm text-secondary/50">
            Don't have an account? <Link to="/signup" className="text-accent font-medium hover:underline">Join the community</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

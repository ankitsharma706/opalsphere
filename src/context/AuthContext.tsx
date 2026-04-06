import React, { createContext, useContext, useState, useEffect } from 'react';
import { authApi } from '../services/api';
import { loginWithGoogle as firebaseGoogleLogin } from '../lib/firebase';

interface User {
  id: string;
  name: string;
  email: string;
  wishlist: string[];
  cart: any[];
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (data: any) => Promise<void>;
  signup: (data: any) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const res = await authApi.me();
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const login = async (data: any) => {
    const res = await authApi.login(data);
    setUser(res.data.user);
  };

  const signup = async (data: any) => {
    const res = await authApi.signup(data);
    setUser(res.data.user);
  };

  const loginWithGoogle = async () => {
    const { token } = await firebaseGoogleLogin();
    const res = await authApi.googleLogin(token);
    setUser(res.data.user);
  };

  const logout = async () => {
    await authApi.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, loginWithGoogle, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

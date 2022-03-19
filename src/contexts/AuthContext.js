import { createContext } from "react";
import { setCookie } from 'nookies'
import Router from 'next/router'

import { api } from '../services/api';

const SECONDS_IN_AN_HOUR = 3600;

export const AuthContext = createContext({})

export function AuthProvider({ children }) {

  async function signIn(verificationId) {
    const { data: { token } } = await api.post('/api/verify', { verificationId });

    setCookie(undefined, 'ssi.token', token, {
      maxAge: SECONDS_IN_AN_HOUR * 24, // 24 hours
    })

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    Router.push('/profile');
  }

  return (
    <AuthContext.Provider value={{ signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
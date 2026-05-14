"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ id: "dev-founder-1", full_name: "Jainil Founder", email: "jainil@lexora.in" });
  const [token, setToken] = useState("dummy_dev_token");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  useEffect(() => {
    // Disabled token check for dev mode
  }, []);

  const fetchUserProfile = async (authToken) => {
    // Disabled
  };

  const login = async (email, password) => {
    router.push("/dashboard");
  };

  const register = async (userData) => {
    router.push("/dashboard");
  };

  const logout = () => {
    // Disabled
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

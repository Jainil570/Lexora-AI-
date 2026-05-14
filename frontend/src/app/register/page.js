"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    full_name: "",
    company_name: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await register(formData);
    } catch (err) {
      setError(err.message || "Failed to register firm.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <nav className="h-[64px] w-full bg-black hairline-b fixed top-0 z-50 flex justify-between items-center px-margin-page">
        <div className="flex items-center">
          <Link href="/">
            <span className="font-headline-sm text-headline-sm font-bold text-primary">LEX</span>
            <span className="font-headline-sm text-headline-sm font-bold text-primary tricolor-accent">ORA</span>
          </Link>
        </div>
      </nav>

      <main className="min-h-screen flex items-center justify-center bg-black pt-[100px] pb-12 px-margin-page">
        <div className="w-full max-w-[540px] bg-[#111111] hairline p-stack-xl relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-[#ff4b4b]"></div>
          
          <h1 className="font-headline-lg text-headline-lg uppercase mb-2 text-primary">INITIALIZE FIRM</h1>
          <p className="font-body-md text-on-surface-variant mb-stack-lg">Register your entity to access institutional-grade legal generation.</p>

          <form onSubmit={handleSubmit} className="space-y-stack-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-label-md text-label-md text-[#7e7e7e] uppercase tracking-widest">Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  required
                  value={formData.full_name}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#3c3c3c] p-inset-md text-primary focus:border-white focus:ring-0 outline-none transition-colors"
                  placeholder="Arjun Kapoor"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-label-md text-label-md text-[#7e7e7e] uppercase tracking-widest">Company Name</label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#3c3c3c] p-inset-md text-primary focus:border-white focus:ring-0 outline-none transition-colors"
                  placeholder="Neon Labs Inc."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-label-md text-label-md text-[#7e7e7e] uppercase tracking-widest">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-[#3c3c3c] p-inset-md text-primary focus:border-white focus:ring-0 outline-none transition-colors"
                placeholder="founder@startup.in"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block font-label-md text-label-md text-[#7e7e7e] uppercase tracking-widest">Security Key (Password)</label>
              <input
                type="password"
                name="password"
                required
                minLength={8}
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-[#3c3c3c] p-inset-md text-primary focus:border-white focus:ring-0 outline-none transition-colors"
                placeholder="Minimum 8 characters"
              />
            </div>

            {error && (
              <div className="bg-[#93000a]/20 border border-[#93000a] p-3 text-[#ffb4ab] text-sm">
                <span className="material-symbols-outlined text-sm align-middle mr-1">error</span>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-[54px] bg-primary text-background font-label-lg uppercase tracking-[1.5px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 mt-stack-lg"
            >
              {isLoading ? (
                <span className="material-symbols-outlined animate-spin">progress_activity</span>
              ) : (
                <>
                  CREATE ACCOUNT <span className="material-symbols-outlined">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center border-t border-[#3c3c3c] pt-6">
            <p className="font-body-sm text-[#7e7e7e]">
              ALREADY REGISTERED?{" "}
              <Link href="/login" className="text-primary hover:underline uppercase tracking-widest font-label-md ml-2">
                ACCESS PORTAL
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

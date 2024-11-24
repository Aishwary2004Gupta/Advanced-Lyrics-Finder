// import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Search, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 text-white">
      <div className="max-w-3xl text-center">
        <Music className="mx-auto h-16 w-16 text-purple-400 mb-8" />
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Find Your Favorite Song Lyrics
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Discover lyrics from millions of songs instantly. Sign up now for a seamless experience!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
            <Search className="h-8 w-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick Search</h3>
            <p className="text-gray-400">Find lyrics by artist and song title instantly</p>
          </div>
          
          <div className="p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
            <Music className="h-8 w-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Vast Database</h3>
            <p className="text-gray-400">Access lyrics from millions of songs worldwide</p>
          </div>
          
          <div className="p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
            <Lock className="h-8 w-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Access</h3>
            <p className="text-gray-400">Your personal lyrics search history, secured</p>
          </div>
        </div>
        
        <div className="space-x-4">
          <Link
            to="/signup"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-transparent border border-purple-600 text-purple-400 px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-600/10 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
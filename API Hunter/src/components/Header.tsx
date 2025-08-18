import React from 'react';
import { Search, Zap, Target } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl mb-8 shadow-2xl">
        <Target className="w-12 h-12 text-white" />
      </div>
      
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
        API Hunter
      </h1>
      
      <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
        Discover, test, and manage APIs with our comprehensive API exploration platform. 
        Hunt down the perfect APIs for your next project.
      </p>
      
      <div className="flex items-center justify-center gap-8 text-white/60">
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5 text-blue-400" />
          <span>Discover APIs</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-purple-400" />
          <span>Test Endpoints</span>
        </div>
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-pink-400" />
          <span>Track Performance</span>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Bookmark, TestTube, TrendingUp, Activity } from 'lucide-react';

interface ApiStatsProps {
  savedCount: number;
  testCount: number;
  successRate: number;
}

export const ApiStats: React.FC<ApiStatsProps> = ({ 
  savedCount, 
  testCount, 
  successRate 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <Bookmark className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{savedCount}</p>
            <p className="text-sm text-white/60">Saved APIs</p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <TestTube className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{testCount}</p>
            <p className="text-sm text-white/60">Tests Run</p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{successRate.toFixed(1)}%</p>
            <p className="text-sm text-white/60">Success Rate</p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
            <Activity className="w-6 h-6 text-pink-400" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">Live</p>
            <p className="text-sm text-white/60">Status</p>
          </div>
        </div>
      </div>
    </div>
  );
};
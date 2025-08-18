import React from 'react';
import { FileStats } from '../types/file';
import { Files, Hash, TrendingUp } from 'lucide-react';

interface StatsProps {
  stats: FileStats;
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  const topExtensions = Object.entries(stats.extensionCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <Files className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">{stats.totalFiles}</p>
            <p className="text-sm text-gray-600">Total Files</p>
          </div>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
            <Hash className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">{stats.totalExtensions}</p>
            <p className="text-sm text-gray-600">File Types</p>
          </div>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-800">
              {topExtensions[0] ? `.${topExtensions[0][0]}` : 'N/A'}
            </p>
            <p className="text-sm text-gray-600">Most Common</p>
          </div>
        </div>
      </div>
    </div>
  );
};
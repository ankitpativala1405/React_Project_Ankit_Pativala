import React from 'react';
import { FolderOpen, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
        <FolderOpen className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
        File Extension Sorter
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Organize, sort, and manage your files by extension with our intuitive file management system
      </p>
      <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
        <Sparkles className="w-4 h-4 text-yellow-500" />
        <span>Drag, drop, sort, and organize with ease</span>
      </div>
    </div>
  );
};
import React from 'react';
import { FileItem } from '../types/file';
import { FileIcon, Trash2, Calendar, HardDrive } from 'lucide-react';
import { getFileIcon, getExtensionColor } from '../utils/fileUtils';

interface FileCardProps {
  file: FileItem;
  onDelete: () => void;
}

export const FileCard: React.FC<FileCardProps> = ({ file, onDelete }) => {
  const extension = file.name.split('.').pop()?.toLowerCase() || 'unknown';
  const IconComponent = getFileIcon(extension);
  const colorClass = getExtensionColor(extension);

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClass}`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <button
          onClick={onDelete}
          className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 transition-all duration-200 hover:bg-red-50 rounded-lg"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-gray-800 truncate" title={file.name}>
          {file.name}
        </h3>
        
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorClass} text-white`}>
            .{extension}
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <HardDrive className="w-4 h-4" />
            <span>{file.size}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>{new Date(file.dateModified).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
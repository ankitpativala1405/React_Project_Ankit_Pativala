import React from 'react';
import { FileItem } from '../types/file';
import { FileCard } from './FileCard';

interface FileListProps {
  files: FileItem[];
  onDeleteFile: (id: number) => void;
}

export const FileList: React.FC<FileListProps> = ({ files, onDeleteFile }) => {
  if (files.length === 0) {
    return (
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 border border-white/20 shadow-lg text-center">
        <div className="text-6xl mb-4">📁</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Files Found</h3>
        <p className="text-gray-500">Try adjusting your search or filters, or add a new file.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {files.map(file => (
        <FileCard
          key={file.id}
          file={file}
          onDelete={() => onDeleteFile(file.id)}
        />
      ))}
    </div>
  );
};
import React, { useState } from 'react';
import { FileItem } from '../types/file';
import { X, Plus } from 'lucide-react';

interface AddFileFormProps {
  onAddFile: (file: Omit<FileItem, 'id'>) => void;
  onCancel: () => void;
}

export const AddFileForm: React.FC<AddFileFormProps> = ({ onAddFile, onCancel }) => {
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fileName.trim() && fileSize.trim()) {
      onAddFile({
        name: fileName.trim(),
        size: fileSize.trim(),
        dateModified: new Date().toISOString().split('T')[0]
      });
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Add New File</h3>
        <button
          onClick={onCancel}
          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fileName" className="block text-sm font-medium text-gray-700 mb-1">
            File Name (with extension)
          </label>
          <input
            type="text"
            id="fileName"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="e.g., document.pdf"
            className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>

        <div>
          <label htmlFor="fileSize" className="block text-sm font-medium text-gray-700 mb-1">
            File Size
          </label>
          <input
            type="text"
            id="fileSize"
            value={fileSize}
            onChange={(e) => setFileSize(e.target.value)}
            placeholder="e.g., 2.4 MB"
            className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
            Add File
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
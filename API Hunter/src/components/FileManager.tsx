import React, { useState, useMemo } from 'react';
import { FileItem } from '../types/file';
import { FileList } from './FileList';
import { AddFileForm } from './AddFileForm';
import { FilterControls } from './FilterControls';

interface FileManagerProps {
  files: FileItem[];
  onAddFile: (file: Omit<FileItem, 'id'>) => void;
  onDeleteFile: (id: number) => void;
}

export const FileManager: React.FC<FileManagerProps> = ({ 
  files, 
  onAddFile, 
  onDeleteFile 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExtension, setSelectedExtension] = useState('all');
  const [sortBy, setSortBy] = useState<'name' | 'extension' | 'size' | 'date'>('extension');
  const [showAddForm, setShowAddForm] = useState(false);

  const extensions = useMemo(() => {
    const exts = new Set(files.map(file => 
      file.name.split('.').pop()?.toLowerCase() || 'unknown'
    ));
    return Array.from(exts).sort();
  }, [files]);

  const filteredAndSortedFiles = useMemo(() => {
    let filtered = files.filter(file => {
      const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
      const fileExt = file.name.split('.').pop()?.toLowerCase() || 'unknown';
      const matchesExtension = selectedExtension === 'all' || fileExt === selectedExtension;
      
      return matchesSearch && matchesExtension;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'extension':
          const aExt = a.name.split('.').pop()?.toLowerCase() || '';
          const bExt = b.name.split('.').pop()?.toLowerCase() || '';
          return aExt.localeCompare(bExt) || a.name.localeCompare(b.name);
        case 'size':
          const aSize = parseFloat(a.size.replace(/[^\d.]/g, ''));
          const bSize = parseFloat(b.size.replace(/[^\d.]/g, ''));
          return bSize - aSize;
        case 'date':
          return new Date(b.dateModified).getTime() - new Date(a.dateModified).getTime();
        default:
          return 0;
      }
    });
  }, [files, searchTerm, selectedExtension, sortBy]);

  return (
    <div className="space-y-6">
      <FilterControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedExtension={selectedExtension}
        onExtensionChange={setSelectedExtension}
        sortBy={sortBy}
        onSortChange={setSortBy}
        extensions={extensions}
        onShowAddForm={() => setShowAddForm(true)}
      />

      {showAddForm && (
        <AddFileForm
          onAddFile={(file) => {
            onAddFile(file);
            setShowAddForm(false);
          }}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      <FileList 
        files={filteredAndSortedFiles}
        onDeleteFile={onDeleteFile}
      />
    </div>
  );
};
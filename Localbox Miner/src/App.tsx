import React, { useState, useMemo } from 'react';
import { FileManager } from './components/FileManager';
import { Header } from './components/Header';
import { Stats } from './components/Stats';
import { FileItem } from './types/file';

function App() {
  const [files, setFiles] = useState<FileItem[]>([
    { id: 1, name: 'document.pdf', size: '2.4 MB', dateModified: '2025-01-15' },
    { id: 2, name: 'image.jpg', size: '1.8 MB', dateModified: '2025-01-14' },
    { id: 3, name: 'script.js', size: '245 KB', dateModified: '2025-01-13' },
    { id: 4, name: 'styles.css', size: '89 KB', dateModified: '2025-01-12' },
    { id: 5, name: 'data.json', size: '156 KB', dateModified: '2025-01-11' },
    { id: 6, name: 'presentation.pptx', size: '5.2 MB', dateModified: '2025-01-10' },
    { id: 7, name: 'spreadsheet.xlsx', size: '892 KB', dateModified: '2025-01-09' },
    { id: 8, name: 'archive.zip', size: '12.4 MB', dateModified: '2025-01-08' },
    { id: 9, name: 'video.mp4', size: '45.8 MB', dateModified: '2025-01-07' },
    { id: 10, name: 'audio.mp3', size: '3.2 MB', dateModified: '2025-01-06' },
    { id: 11, name: 'readme.txt', size: '2 KB', dateModified: '2025-01-05' },
    { id: 12, name: 'config.xml', size: '18 KB', dateModified: '2025-01-04' },
  ]);

  const stats = useMemo(() => {
    const extensionCounts: Record<string, number> = {};
    files.forEach(file => {
      const extension = file.name.split('.').pop()?.toLowerCase() || 'unknown';
      extensionCounts[extension] = (extensionCounts[extension] || 0) + 1;
    });
    
    return {
      totalFiles: files.length,
      totalExtensions: Object.keys(extensionCounts).length,
      extensionCounts
    };
  }, [files]);

  const addFile = (file: Omit<FileItem, 'id'>) => {
    const newFile: FileItem = {
      ...file,
      id: Math.max(...files.map(f => f.id), 0) + 1
    };
    setFiles(prev => [...prev, newFile]);
  };

  const deleteFile = (id: number) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <Stats stats={stats} />
        <FileManager 
          files={files} 
          onAddFile={addFile}
          onDeleteFile={deleteFile}
        />
      </div>
    </div>
  );
}

export default App;
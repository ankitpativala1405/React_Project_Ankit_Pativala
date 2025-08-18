import React from 'react';
import { 
  FileText, 
  Image, 
  Video, 
  Music, 
  Archive, 
  Code, 
  FileSpreadsheet, 
  Presentation,
  File,
  Database,
  Settings
} from 'lucide-react';

export const getFileIcon = (extension: string) => {
  const ext = extension.toLowerCase();
  
  switch (ext) {
    case 'pdf':
    case 'doc':
    case 'docx':
    case 'txt':
    case 'rtf':
      return FileText;
    
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'svg':
    case 'bmp':
    case 'webp':
      return Image;
    
    case 'mp4':
    case 'avi':
    case 'mov':
    case 'wmv':
    case 'flv':
    case 'webm':
      return Video;
    
    case 'mp3':
    case 'wav':
    case 'flac':
    case 'aac':
    case 'ogg':
      return Music;
    
    case 'zip':
    case 'rar':
    case '7z':
    case 'tar':
    case 'gz':
      return Archive;
    
    case 'js':
    case 'ts':
    case 'jsx':
    case 'tsx':
    case 'html':
    case 'css':
    case 'scss':
    case 'py':
    case 'java':
    case 'cpp':
    case 'c':
    case 'php':
    case 'rb':
    case 'go':
      return Code;
    
    case 'xls':
    case 'xlsx':
    case 'csv':
      return FileSpreadsheet;
    
    case 'ppt':
    case 'pptx':
      return Presentation;
    
    case 'json':
    case 'xml':
    case 'sql':
      return Database;
    
    case 'config':
    case 'conf':
    case 'ini':
    case 'yaml':
    case 'yml':
      return Settings;
    
    default:
      return File;
  }
};

export const getExtensionColor = (extension: string) => {
  const ext = extension.toLowerCase();
  
  switch (ext) {
    case 'pdf':
    case 'doc':
    case 'docx':
    case 'txt':
    case 'rtf':
      return 'bg-red-500';
    
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'svg':
    case 'bmp':
    case 'webp':
      return 'bg-green-500';
    
    case 'mp4':
    case 'avi':
    case 'mov':
    case 'wmv':
    case 'flv':
    case 'webm':
      return 'bg-purple-500';
    
    case 'mp3':
    case 'wav':
    case 'flac':
    case 'aac':
    case 'ogg':
      return 'bg-pink-500';
    
    case 'zip':
    case 'rar':
    case '7z':
    case 'tar':
    case 'gz':
      return 'bg-yellow-500';
    
    case 'js':
    case 'ts':
    case 'jsx':
    case 'tsx':
    case 'html':
    case 'css':
    case 'scss':
    case 'py':
    case 'java':
    case 'cpp':
    case 'c':
    case 'php':
    case 'rb':
    case 'go':
      return 'bg-blue-500';
    
    case 'xls':
    case 'xlsx':
    case 'csv':
      return 'bg-emerald-500';
    
    case 'ppt':
    case 'pptx':
      return 'bg-orange-500';
    
    case 'json':
    case 'xml':
    case 'sql':
      return 'bg-indigo-500';
    
    case 'config':
    case 'conf':
    case 'ini':
    case 'yaml':
    case 'yml':
      return 'bg-gray-500';
    
    default:
      return 'bg-slate-500';
  }
};
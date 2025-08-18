export interface FileItem {
  id: number;
  name: string;
  size: string;
  dateModified: string;
}

export interface FileStats {
  totalFiles: number;
  totalExtensions: number;
  extensionCounts: Record<string, number>;
}
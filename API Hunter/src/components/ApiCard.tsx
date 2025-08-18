import React from 'react';
import { ApiItem } from '../types/api';
import { 
  Bookmark, 
  ExternalLink, 
  Shield, 
  Clock, 
  DollarSign,
  Trash2,
  Play
} from 'lucide-react';
import { getMethodColor, getCategoryIcon } from '../utils/apiUtils';

interface ApiCardProps {
  api: ApiItem;
  onSave?: () => void;
  onRemove?: () => void;
  onTest?: () => void;
  showSaveButton?: boolean;
  showRemoveButton?: boolean;
  showTestButton?: boolean;
}

export const ApiCard: React.FC<ApiCardProps> = ({ 
  api, 
  onSave, 
  onRemove, 
  onTest,
  showSaveButton = false,
  showRemoveButton = false,
  showTestButton = false
}) => {
  const methodColor = getMethodColor(api.method);
  const CategoryIcon = getCategoryIcon(api.category);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <CategoryIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white text-lg">{api.name}</h3>
            <p className="text-white/60 text-sm">{api.category}</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          {showSaveButton && onSave && (
            <button
              onClick={onSave}
              className="p-2 text-white/60 hover:text-blue-400 transition-colors hover:bg-white/10 rounded-lg"
              title="Save API"
            >
              <Bookmark className="w-4 h-4" />
            </button>
          )}
          
          {showTestButton && onTest && (
            <button
              onClick={onTest}
              className="p-2 text-white/60 hover:text-green-400 transition-colors hover:bg-white/10 rounded-lg"
              title="Test API"
            >
              <Play className="w-4 h-4" />
            </button>
          )}
          
          {showRemoveButton && onRemove && (
            <button
              onClick={onRemove}
              className="p-2 text-white/60 hover:text-red-400 transition-colors hover:bg-white/10 rounded-lg"
              title="Remove API"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <p className="text-white/80 text-sm mb-4 line-clamp-2">
        {api.description}
      </p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${methodColor}`}>
            {api.method}
          </span>
          {api.pricing && (
            <span className="flex items-center gap-1 text-xs text-white/60">
              <DollarSign className="w-3 h-3" />
              {api.pricing}
            </span>
          )}
        </div>

        <div className="text-xs text-white/60 font-mono bg-white/5 rounded-lg p-2 truncate">
          {api.url}
        </div>

        <div className="flex items-center gap-4 text-xs text-white/60">
          {api.requiresAuth && (
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span>Auth Required</span>
            </div>
          )}
          
          {api.rateLimit && (
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{api.rateLimit}</span>
            </div>
          )}
        </div>
      </div>

      {api.documentation && (
        <a
          href={api.documentation}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Documentation
        </a>
      )}
    </div>
  );
};
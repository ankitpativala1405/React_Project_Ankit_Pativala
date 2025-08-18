import { 
  Globe, 
  Database, 
  Image, 
  Music, 
  Cloud, 
  Zap, 
  MapPin, 
  TrendingUp,
  MessageSquare,
  Shield,
  Smartphone,
  Code
} from 'lucide-react';

export const getMethodColor = (method: string) => {
  switch (method) {
    case 'GET':
      return 'bg-green-500 text-white';
    case 'POST':
      return 'bg-blue-500 text-white';
    case 'PUT':
      return 'bg-orange-500 text-white';
    case 'DELETE':
      return 'bg-red-500 text-white';
    case 'PATCH':
      return 'bg-purple-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

export const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'social media':
      return MessageSquare;
    case 'weather':
      return Cloud;
    case 'finance':
      return TrendingUp;
    case 'maps':
      return MapPin;
    case 'music':
      return Music;
    case 'images':
      return Image;
    case 'data':
      return Database;
    case 'utilities':
      return Zap;
    case 'security':
      return Shield;
    case 'mobile':
      return Smartphone;
    case 'development':
      return Code;
    default:
      return Globe;
  }
};
export interface ApiItem {
  id: string;
  name: string;
  description: string;
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  category: string;
  headers?: Record<string, string>;
  requiresAuth: boolean;
  documentation?: string;
  rateLimit?: string;
  pricing?: 'Free' | 'Freemium' | 'Paid';
}

export interface TestResult {
  id: string;
  apiName: string;
  url: string;
  method: string;
  timestamp: string;
  success: boolean;
  responseTime: number;
  statusCode?: number;
  error?: string;
  responseData?: any;
}

export interface ApiCategory {
  name: string;
  count: number;
  color: string;
}

export interface ApiStats {
  savedCount: number;
  testCount: number;
  successRate: number;
}
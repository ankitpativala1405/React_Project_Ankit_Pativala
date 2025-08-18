import React, { useState } from 'react';
import { TestResult } from '../types/api';
import { Play, Clock, CheckCircle, XCircle, Code } from 'lucide-react';

interface ApiTesterProps {
  onTestResult: (result: TestResult) => void;
  recentResults: TestResult[];
}

export const ApiTester: React.FC<ApiTesterProps> = ({ onTestResult, recentResults }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState<'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'>('GET');
  const [headers, setHeaders] = useState('{}');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedResult, setSelectedResult] = useState<TestResult | null>(null);

  const handleTest = async () => {
    if (!url.trim()) return;

    setLoading(true);
    const startTime = Date.now();

    try {
      let parsedHeaders = {};
      try {
        parsedHeaders = JSON.parse(headers);
      } catch (e) {
        // Invalid JSON, use empty headers
      }

      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...parsedHeaders
        }
      };

      if (method !== 'GET' && body.trim()) {
        options.body = body;
      }

      const response = await fetch(url, options);
      const responseTime = Date.now() - startTime;
      const responseData = await response.text();

      let parsedData;
      try {
        parsedData = JSON.parse(responseData);
      } catch (e) {
        parsedData = responseData;
      }

      const result: TestResult = {
        id: Date.now().toString(),
        apiName: new URL(url).hostname,
        url,
        method,
        timestamp: new Date().toISOString(),
        success: response.ok,
        responseTime,
        statusCode: response.status,
        responseData: parsedData
      };

      onTestResult(result);
      setSelectedResult(result);
    } catch (error) {
      const responseTime = Date.now() - startTime;
      const result: TestResult = {
        id: Date.now().toString(),
        apiName: 'Unknown',
        url,
        method,
        timestamp: new Date().toISOString(),
        success: false,
        responseTime,
        error: error instanceof Error ? error.message : 'Unknown error'
      };

      onTestResult(result);
      setSelectedResult(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Test Form */}
      <div className="space-y-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-6">API Tester</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                URL
              </label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://api.example.com/endpoint"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Method
              </label>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value as any)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="GET" className="bg-gray-800">GET</option>
                <option value="POST" className="bg-gray-800">POST</option>
                <option value="PUT" className="bg-gray-800">PUT</option>
                <option value="DELETE" className="bg-gray-800">DELETE</option>
                <option value="PATCH" className="bg-gray-800">PATCH</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Headers (JSON)
              </label>
              <textarea
                value={headers}
                onChange={(e) => setHeaders(e.target.value)}
                placeholder='{"Authorization": "Bearer token"}'
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-mono text-sm"
              />
            </div>

            {method !== 'GET' && (
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Request Body
                </label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder='{"key": "value"}'
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-mono text-sm"
                />
              </div>
            )}

            <button
              onClick={handleTest}
              disabled={loading || !url.trim()}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Testing...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  Test API
                </>
              )}
            </button>
          </div>
        </div>

        {/* Recent Results */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Tests</h3>
          
          {recentResults.length === 0 ? (
            <p className="text-white/60 text-center py-4">No tests run yet</p>
          ) : (
            <div className="space-y-2">
              {recentResults.map(result => (
                <button
                  key={result.id}
                  onClick={() => setSelectedResult(result)}
                  className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {result.success ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-400" />
                      )}
                      <span className="text-white text-sm">{result.apiName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <Clock className="w-3 h-3" />
                      {result.responseTime}ms
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Response Display */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="flex items-center gap-2 mb-4">
          <Code className="w-5 h-5 text-white" />
          <h3 className="text-lg font-semibold text-white">Response</h3>
        </div>

        {selectedResult ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <div className="flex items-center gap-2">
                {selectedResult.success ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
                <span className="text-white font-medium">
                  {selectedResult.statusCode || 'Error'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Clock className="w-4 h-4" />
                {selectedResult.responseTime}ms
              </div>
            </div>

            <div className="bg-black/20 rounded-lg p-4 max-h-96 overflow-auto">
              <pre className="text-sm text-white/80 whitespace-pre-wrap">
                {selectedResult.error || 
                 JSON.stringify(selectedResult.responseData, null, 2)}
              </pre>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-white/60">
            <Code className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Run a test to see the response</p>
          </div>
        )}
      </div>
    </div>
  );
};
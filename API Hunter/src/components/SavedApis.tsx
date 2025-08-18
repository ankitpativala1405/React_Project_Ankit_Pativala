import React from 'react';
import { ApiItem, TestResult } from '../types/api';
import { ApiCard } from './ApiCard';

interface SavedApisProps {
  apis: ApiItem[];
  onRemoveApi: (id: string) => void;
  onTestResult: (result: TestResult) => void;
}

export const SavedApis: React.FC<SavedApisProps> = ({ 
  apis, 
  onRemoveApi, 
  onTestResult 
}) => {
  const handleTestApi = async (api: ApiItem) => {
    const startTime = Date.now();

    try {
      const response = await fetch(api.url, {
        method: api.method,
        headers: api.headers || {}
      });
      
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
        apiName: api.name,
        url: api.url,
        method: api.method,
        timestamp: new Date().toISOString(),
        success: response.ok,
        responseTime,
        statusCode: response.status,
        responseData: parsedData
      };

      onTestResult(result);
    } catch (error) {
      const responseTime = Date.now() - startTime;
      const result: TestResult = {
        id: Date.now().toString(),
        apiName: api.name,
        url: api.url,
        method: api.method,
        timestamp: new Date().toISOString(),
        success: false,
        responseTime,
        error: error instanceof Error ? error.message : 'Unknown error'
      };

      onTestResult(result);
    }
  };

  if (apis.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center">
        <div className="text-6xl mb-4">📚</div>
        <h3 className="text-xl font-semibold text-white mb-2">No Saved APIs</h3>
        <p className="text-white/60">
          Start exploring APIs and save your favorites to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Saved APIs</h2>
        <p className="text-white/60">
          You have <span className="text-white font-semibold">{apis.length}</span> saved APIs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apis.map(api => (
          <ApiCard
            key={api.id}
            api={api}
            onRemove={() => onRemoveApi(api.id)}
            onTest={() => handleTestApi(api)}
            showRemoveButton={true}
            showTestButton={true}
          />
        ))}
      </div>
    </div>
  );
};
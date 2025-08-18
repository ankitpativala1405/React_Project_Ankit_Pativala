import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ApiExplorer } from './components/ApiExplorer';
import { ApiTester } from './components/ApiTester';
import { SavedApis } from './components/SavedApis';
import { ApiStats } from './components/ApiStats';
import { ApiItem, TestResult } from './types/api';

function App() {
  const [activeTab, setActiveTab] = useState<'explore' | 'test' | 'saved'>('explore');
  const [savedApis, setSavedApis] = useState<ApiItem[]>([]);
  const [testResults, setTestResults] = useState<TestResult[]>([]);

  // Load saved data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('apiHunterSavedApis');
    const results = localStorage.getItem('apiHunterTestResults');
    
    if (saved) {
      setSavedApis(JSON.parse(saved));
    }
    if (results) {
      setTestResults(JSON.parse(results));
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('apiHunterSavedApis', JSON.stringify(savedApis));
  }, [savedApis]);

  useEffect(() => {
    localStorage.setItem('apiHunterTestResults', JSON.stringify(testResults));
  }, [testResults]);

  const handleSaveApi = (api: ApiItem) => {
    setSavedApis(prev => {
      const exists = prev.find(item => item.id === api.id);
      if (exists) return prev;
      return [...prev, api];
    });
  };

  const handleRemoveApi = (id: string) => {
    setSavedApis(prev => prev.filter(api => api.id !== id));
  };

  const handleTestResult = (result: TestResult) => {
    setTestResults(prev => [result, ...prev.slice(0, 49)]); // Keep last 50 results
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <ApiStats 
          savedCount={savedApis.length}
          testCount={testResults.length}
          successRate={testResults.length > 0 ? 
            (testResults.filter(r => r.success).length / testResults.length) * 100 : 0
          }
        />

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            <div className="flex gap-2">
              {[
                { key: 'explore', label: 'Explore APIs' },
                { key: 'test', label: 'API Tester' },
                { key: 'saved', label: 'Saved APIs' }
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === 'explore' && (
            <ApiExplorer onSaveApi={handleSaveApi} />
          )}
          
          {activeTab === 'test' && (
            <ApiTester 
              onTestResult={handleTestResult}
              recentResults={testResults.slice(0, 10)}
            />
          )}
          
          {activeTab === 'saved' && (
            <SavedApis 
              apis={savedApis}
              onRemoveApi={handleRemoveApi}
              onTestResult={handleTestResult}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
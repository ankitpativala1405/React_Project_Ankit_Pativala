import React, { useState, useMemo } from 'react';
import { ApiItem } from '../types/api';
import { ApiCard } from './ApiCard';
import { SearchFilters } from './SearchFilters';
import { mockApis } from '../data/mockApis';

interface ApiExplorerProps {
  onSaveApi: (api: ApiItem) => void;
}

export const ApiExplorer: React.FC<ApiExplorerProps> = ({ onSaveApi }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMethod, setSelectedMethod] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');

  const categories = useMemo(() => {
    const cats = new Set(mockApis.map(api => api.category));
    return Array.from(cats).sort();
  }, []);

  const filteredApis = useMemo(() => {
    return mockApis.filter(api => {
      const matchesSearch = api.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           api.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || api.category === selectedCategory;
      const matchesMethod = selectedMethod === 'all' || api.method === selectedMethod;
      const matchesPricing = selectedPricing === 'all' || api.pricing === selectedPricing;
      
      return matchesSearch && matchesCategory && matchesMethod && matchesPricing;
    });
  }, [searchTerm, selectedCategory, selectedMethod, selectedPricing]);

  return (
    <div className="space-y-8">
      <SearchFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedMethod={selectedMethod}
        onMethodChange={setSelectedMethod}
        selectedPricing={selectedPricing}
        onPricingChange={setSelectedPricing}
        categories={categories}
      />

      <div className="text-center mb-6">
        <p className="text-white/60">
          Found <span className="text-white font-semibold">{filteredApis.length}</span> APIs
        </p>
      </div>

      {filteredApis.length === 0 ? (
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-white mb-2">No APIs Found</h3>
          <p className="text-white/60">Try adjusting your search criteria or filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApis.map(api => (
            <ApiCard
              key={api.id}
              api={api}
              onSave={() => onSaveApi(api)}
              showSaveButton={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};
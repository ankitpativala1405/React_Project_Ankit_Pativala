import React from 'react';
import { Search, Filter, Zap, DollarSign } from 'lucide-react';

interface SearchFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedMethod: string;
  onMethodChange: (method: string) => void;
  selectedPricing: string;
  onPricingChange: (pricing: string) => void;
  categories: string[];
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedMethod,
  onMethodChange,
  selectedPricing,
  onPricingChange,
  categories
}) => {
  const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
  const pricingOptions = ['Free', 'Freemium', 'Paid'];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
          <input
            type="text"
            placeholder="Search APIs..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Category Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="all" className="bg-gray-800">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category} className="bg-gray-800">
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Method Filter */}
        <div className="relative">
          <Zap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
          <select
            value={selectedMethod}
            onChange={(e) => onMethodChange(e.target.value)}
            className="w-full pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="all" className="bg-gray-800">All Methods</option>
            {methods.map(method => (
              <option key={method} value={method} className="bg-gray-800">
                {method}
              </option>
            ))}
          </select>
        </div>

        {/* Pricing Filter */}
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
          <select
            value={selectedPricing}
            onChange={(e) => onPricingChange(e.target.value)}
            className="w-full pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="all" className="bg-gray-800">All Pricing</option>
            {pricingOptions.map(pricing => (
              <option key={pricing} value={pricing} className="bg-gray-800">
                {pricing}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
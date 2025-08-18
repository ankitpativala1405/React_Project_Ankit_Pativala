import { ApiItem } from '../types/api';

export const mockApis: ApiItem[] = [
  {
    id: '1',
    name: 'OpenWeatherMap',
    description: 'Get current weather data for any location worldwide with detailed forecasts and historical data.',
    url: 'https://api.openweathermap.org/data/2.5/weather',
    method: 'GET',
    category: 'Weather',
    requiresAuth: true,
    documentation: 'https://openweathermap.org/api',
    rateLimit: '1000/day',
    pricing: 'Freemium'
  },
  {
    id: '2',
    name: 'JSONPlaceholder',
    description: 'Free fake REST API for testing and prototyping. Perfect for learning and development.',
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    category: 'Development',
    requiresAuth: false,
    documentation: 'https://jsonplaceholder.typicode.com/',
    rateLimit: 'Unlimited',
    pricing: 'Free'
  },
  {
    id: '3',
    name: 'CoinGecko',
    description: 'Comprehensive cryptocurrency data including prices, market cap, and trading volume.',
    url: 'https://api.coingecko.com/api/v3/simple/price',
    method: 'GET',
    category: 'Finance',
    requiresAuth: false,
    documentation: 'https://www.coingecko.com/en/api',
    rateLimit: '50/min',
    pricing: 'Free'
  },
  {
    id: '4',
    name: 'Unsplash',
    description: 'Access millions of high-quality photos from the world\'s most generous community of photographers.',
    url: 'https://api.unsplash.com/photos',
    method: 'GET',
    category: 'Images',
    requiresAuth: true,
    documentation: 'https://unsplash.com/developers',
    rateLimit: '5000/hour',
    pricing: 'Free'
  },
  {
    id: '5',
    name: 'Spotify Web API',
    description: 'Access Spotify\'s music catalog, user playlists, and playback controls.',
    url: 'https://api.spotify.com/v1/search',
    method: 'GET',
    category: 'Music',
    requiresAuth: true,
    documentation: 'https://developer.spotify.com/documentation/web-api/',
    rateLimit: 'Variable',
    pricing: 'Free'
  }
];
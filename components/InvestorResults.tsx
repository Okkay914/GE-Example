'use client'

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const InvestorResults = () => {
  const [activeRegion, setActiveRegion] = useState('all');

  const asiaData = [
    { category: 'Family Offices', count: 16, color: '#2563eb' },
    { category: 'RIAs/Wealth Managers', count: 4, color: '#3b82f6' },
    { category: 'Asset Managers', count: 2, color: '#60a5fa' },
    { category: 'Banks', count: 2, color: '#93c5fd' },
    { category: 'Other Institutions', count: 5, color: '#bfdbfe' }
  ];

  const americasData = [
    { category: 'Family Offices', count: 18, color: '#2563eb' },
    { category: 'RIAs/Wealth Managers', count: 15, color: '#3b82f6' },
    { category: 'Asset Managers', count: 8, color: '#60a5fa' },
    { category: 'Public Pensions', count: 6, color: '#93c5fd' },
    { category: 'Other Institutions', count: 7, color: '#bfdbfe' }
  ];

  const combinedData = [
    { category: 'Family Offices', count: 34, color: '#2563eb' },
    { category: 'RIAs/Wealth Managers', count: 19, color: '#3b82f6' },
    { category: 'Asset Managers', count: 10, color: '#60a5fa' },
    { category: 'Banks & Pensions', count: 8, color: '#93c5fd' },
    { category: 'Other Institutions', count: 12, color: '#bfdbfe' }
  ];

  const getActiveData = () => {
    switch (activeRegion) {
      case 'asia':
        return asiaData;
      case 'americas':
        return americasData;
      default:
        return combinedData;
    }
  };

  const getTotalMeetings = () => {
    const data = getActiveData();
    return data.reduce((sum, item) => sum + item.count, 0);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col items-center mb-8">
        <h3 className="text-2xl font-bold mb-4">Global Investor Meetings Overview</h3>
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveRegion('all')}
            className={`px-4 py-2 rounded-lg ${
              activeRegion === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            All Regions
          </button>
          <button
            onClick={() => setActiveRegion('asia')}
            className={`px-4 py-2 rounded-lg ${
              activeRegion === 'asia' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Asia-Pacific
          </button>
          <button
            onClick={() => setActiveRegion('americas')}
            className={`px-4 py-2 rounded-lg ${
              activeRegion === 'americas' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Americas
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center mb-6">
          <p className="text-4xl font-bold text-blue-600">{getTotalMeetings()}</p>
          <p className="text-gray-600">Total Meetings</p>
        </div>

        <div className="h-64">
          <ResponsiveContainer>
            <BarChart data={getActiveData()} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <XAxis 
                dataKey="category" 
                angle={-45} 
                textAnchor="end"
                height={60}
                tick={{ fill: '#4b5563' }}
              />
              <YAxis tick={{ fill: '#4b5563' }} />
              <Tooltip />
              <Bar dataKey="count">
                {getActiveData().map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">34</p>
            <p className="text-sm text-gray-600">Family Office Meetings</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">19</p>
            <p className="text-sm text-gray-600">RIA/Wealth Manager Meetings</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">30</p>
            <p className="text-sm text-gray-600">Other Institutional Meetings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorResults;

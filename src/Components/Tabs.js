// src/components/Tabs.js
import React, { useState } from 'react';

const tabs = [
  { id: 1, label: 'Tab 1', content: 'Content for Tab 1' },
  { id: 2, label: 'Tab 2', content: 'Content for Tab 2' },
  { id: 3, label: 'Tab 3', content: 'Content for Tab 3' },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="max-w-md mx-auto">
      <div className="flex space-x-4 mb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`flex-1 p-2 text-center ${
              activeTab === tab.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            } rounded-md`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 border rounded-md bg-gray-100">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;

import React, { useState } from 'react';
import deta from './Deta';

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  // Filter data based on search and dropdown
  const filteredData = deta.filter(item => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === '' || item.profession === filter)
    );
  });

  return (
    <div className="p-4">
      <div className='grid grid-cols-6 gap-4'>
        <div className='col-start-1 col-end-3'>
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 mb-4 w-full"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      <div className='col-end-7 col-span-2 text-right'>
      <select
        className="border p-2 mb-4 w-64"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All Professions</option>
        <option value="Engineer">Engineer</option>
        <option value="Designer">Designer</option>
        <option value="Manager">Manager</option>
        {/* Add more options as needed */}
      </select>
      </div>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
          <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">City</th>
            <th className="border p-2">Profession</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
                <td className="border p-2">{item.id}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.age}</td>
              <td className="border p-2">{item.email}</td>
              <td className="border p-2">{item.city}</td>
              <td className="border p-2">{item.profession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

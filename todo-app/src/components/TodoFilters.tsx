'use client';

import { FilterType } from '@/types/todo';

interface TodoFiltersProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

export default function TodoFilters({ 
  currentFilter, 
  onFilterChange, 
  activeCount, 
  completedCount,
  onClearCompleted 
}: TodoFiltersProps) {
  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 p-4 bg-gray-50 rounded-lg">
      <div className="flex gap-1">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              currentFilter === filter.key
                ? 'bg-blue-500 text-white shadow-sm'
                : 'text-gray-600 hover:bg-white hover:text-blue-500 hover:shadow-sm'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-4 text-sm text-gray-600">
        <span>
          {activeCount} {activeCount === 1 ? 'item' : 'items'} left
        </span>
        
        {completedCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="text-red-500 hover:text-red-700 transition-colors duration-200 font-medium"
          >
            Clear completed ({completedCount})
          </button>
        )}
      </div>
    </div>
  );
}
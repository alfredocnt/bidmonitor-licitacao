'use client'

import React, { useState } from 'react'
import { ArrowUpDown, ChevronDown, Check } from 'lucide-react'

interface SortDropdownProps {
  sortBy: string
  onSortChange: (sortId: string) => void
}

export default function SortDropdown({ sortBy, onSortChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const sortOptions = [
    { id: 'budget-high', label: 'Maior valor' },
    { id: 'budget-low', label: 'Menor valor' },
    { id: 'deadline-soon', label: 'Prazo mais próximo' },
    { id: 'deadline-far', label: 'Prazo mais distante' }
  ]

  const currentOption = sortOptions.find(opt => opt.id === sortBy)

  return (
    <div className="relative">
      <button
        className="bg-background-secondary border border-border-light rounded-lg py-3 px-4 text-sm font-medium text-text-primary cursor-pointer flex items-center gap-2 min-w-44 justify-between transition-colors hover:border-border-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <ArrowUpDown size={16} className="text-text-secondary" />
          <span>{currentOption?.label}</span>
        </div>
        <ChevronDown
          size={16}
          className={`text-text-secondary transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-background-secondary border border-border-light rounded-lg shadow-lg min-w-52 z-50 overflow-hidden">
          {sortOptions.map((option) => (
            <button
              key={option.id}
              className="w-full py-3 px-4 text-sm text-text-primary bg-transparent border-none cursor-pointer flex items-center justify-between transition-colors hover:bg-background-tertiary"
              onClick={() => {
                onSortChange(option.id)
                setIsOpen(false)
              }}
            >
              <span>{option.label}</span>
              {sortBy === option.id && (
                <Check size={16} className="text-secondary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
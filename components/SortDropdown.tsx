'use client'

import React, { useState } from 'react'
import { ArrowUpDown, ChevronDown, Check } from 'lucide-react'
import { colors } from '@/styles/designSystem'

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
    <div style={{ position: 'relative' }}>
      <button
        style={{
          backgroundColor: colors.background.secondary,
          border: `1px solid ${colors.border.light}`,
          borderRadius: '8px',
          padding: '12px 16px',
          fontSize: '14px',
          fontWeight: '500',
          color: colors.text.primary,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          minWidth: '180px',
          justifyContent: 'space-between',
          transition: 'border-color 0.2s ease'
        }}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = colors.border.medium
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = colors.border.light
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <ArrowUpDown size={16} color={colors.text.secondary} />
          <span>{currentOption?.label}</span>
        </div>
        <ChevronDown
          size={16}
          color={colors.text.secondary}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }}
        />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          marginTop: '4px',
          backgroundColor: colors.background.secondary,
          border: `1px solid ${colors.border.light}`,
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          minWidth: '200px',
          zIndex: 1000,
          overflow: 'hidden'
        }}>
          {sortOptions.map((option) => (
            <button
              key={option.id}
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '14px',
                color: colors.text.primary,
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'background-color 0.2s ease'
              }}
              onClick={() => {
                onSortChange(option.id)
                setIsOpen(false)
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.background.tertiary
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <span>{option.label}</span>
              {sortBy === option.id && (
                <Check size={16} color={colors.secondary.main} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
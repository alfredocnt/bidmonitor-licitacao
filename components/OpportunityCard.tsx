'use client'

import React from 'react'
import { ChevronRight } from 'lucide-react'

interface OpportunityCardProps {
  title: string
  entity: string
  location: string
  budget: string
  deadline: string
  hierarchy: {
    service: string
    type: string
    subtype: string
  }
  description: string
  onClick?: () => void
}

export default function OpportunityCard({
  title,
  entity,
  location,
  budget,
  deadline,
  hierarchy,
  description,
  onClick
}: OpportunityCardProps) {
  return (
    <div
      className="bg-background-secondary rounded-xl cursor-pointer transition-all duration-200 border border-border-light p-4 relative flex gap-6 hover:-translate-y-0.5 hover:shadow-lg group"
      onClick={onClick}
    >
      {/* Hover Arrow */}
      <div className="absolute top-1/2 right-5 -translate-y-1/2 translate-x-2 opacity-0 transition-all duration-200 bg-secondary rounded-full w-8 h-8 flex items-center justify-center group-hover:opacity-100 group-hover:translate-x-0">
        <ChevronRight size={16} className="text-white" />
      </div>

      {/* Left Column - 1/3 width */}
      <div className="flex-none w-1/3 pr-15">
        {/* Breadcrumb - at the top */}
        <div className="text-xs text-text-secondary font-medium flex items-center gap-1.5 mb-2">
          <span>{hierarchy.service}</span>
          <span className="text-border-light">›</span>
          <span>{hierarchy.type}</span>
          <span className="text-border-light">›</span>
          <span>{hierarchy.subtype}</span>
        </div>

        {/* Main Content */}
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-text-primary mb-1.5 leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            {entity} • {location}
          </p>
        </div>

        {/* Bottom Part - Metrics */}
        <div className="pt-3 border-t border-border-light">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-xs text-text-secondary font-medium mb-0.5 uppercase tracking-wider">
                Valor Estimado
              </div>
              <div className="text-sm font-semibold text-text-primary">
                {budget}
              </div>
            </div>
            <div>
              <div className="text-xs text-text-secondary font-medium mb-0.5 uppercase tracking-wider">
                Prazo
              </div>
              <div className="text-sm font-semibold text-text-primary">
                {deadline}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - 2/3 width */}
      <div className="flex-1 pl-6 pr-15 border-l border-border-light">
        {/* Description Header */}
        <div className="text-xs text-text-secondary font-medium uppercase tracking-wider mb-2">
          Descrição
        </div>

        {/* Description Content */}
        <div className="text-sm text-text-primary leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  )
}
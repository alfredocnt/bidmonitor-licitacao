'use client'

import React from 'react'
import { ChevronRight } from 'lucide-react'
import { colors } from '@/styles/designSystem'

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
      style={{
        backgroundColor: colors.background.secondary,
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        border: `1px solid ${colors.border.light}`,
        padding: '16px',
        position: 'relative',
        display: 'flex',
        gap: '24px'
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)'
        const arrow = e.currentTarget.querySelector('.hover-arrow') as HTMLElement
        if (arrow) {
          arrow.style.opacity = '1'
          arrow.style.transform = 'translateY(-50%) translateX(0px)'
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)'
        e.currentTarget.style.boxShadow = 'none'
        const arrow = e.currentTarget.querySelector('.hover-arrow') as HTMLElement
        if (arrow) {
          arrow.style.opacity = '0'
          arrow.style.transform = 'translateY(-50%) translateX(-8px)'
        }
      }}
    >
      {/* Hover Arrow */}
      <div
        className="hover-arrow"
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%) translateX(-8px)',
          opacity: '0',
          transition: 'all 0.2s ease',
          backgroundColor: colors.secondary.main,
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ChevronRight size={16} color="white" />
      </div>

      {/* Left Column - 1/3 width */}
      <div style={{
        flex: '0 0 33.33%',
        paddingRight: '60px' // Space for hover arrow
      }}>
        {/* Breadcrumb - at the top */}
        <div style={{
          fontSize: '12px',
          color: colors.text.secondary,
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '8px'
        }}>
          <span>{hierarchy.service}</span>
          <span style={{ color: colors.border.light }}>›</span>
          <span>{hierarchy.type}</span>
          <span style={{ color: colors.border.light }}>›</span>
          <span>{hierarchy.subtype}</span>
        </div>

        {/* Main Content */}
        <div style={{
          marginBottom: '12px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: colors.text.primary,
            margin: '0 0 6px 0',
            lineHeight: '1.3',
            letterSpacing: '-0.01em'
          }}>
            {title}
          </h3>
          <p style={{
            fontSize: '14px',
            color: colors.text.secondary,
            margin: '0',
            lineHeight: '1.4'
          }}>
            {entity} • {location}
          </p>
        </div>

        {/* Bottom Part - Metrics */}
        <div style={{
          paddingTop: '12px',
          borderTop: `1px solid ${colors.border.light}`
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px'
          }}>
            <div>
              <div style={{
                fontSize: '11px',
                color: colors.text.secondary,
                fontWeight: '500',
                marginBottom: '2px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Valor Estimado
              </div>
              <div style={{
                fontSize: '15px',
                fontWeight: '600',
                color: colors.text.primary
              }}>
                {budget}
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '11px',
                color: colors.text.secondary,
                fontWeight: '500',
                marginBottom: '2px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Prazo
              </div>
              <div style={{
                fontSize: '15px',
                fontWeight: '600',
                color: colors.text.primary
              }}>
                {deadline}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - 2/3 width */}
      <div style={{
        flex: '1',
        paddingLeft: '24px',
        paddingRight: '60px', // Space for hover arrow
        borderLeft: `1px solid ${colors.border.light}`
      }}>
        {/* Description Header */}
        <div style={{
          fontSize: '12px',
          color: colors.text.secondary,
          fontWeight: '500',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginBottom: '8px'
        }}>
          Descrição
        </div>

        {/* Description Content */}
        <div style={{
          fontSize: '14px',
          color: colors.text.primary,
          lineHeight: '1.6',
          fontWeight: '400'
        }}>
          {description}
        </div>
      </div>
    </div>
  )
}
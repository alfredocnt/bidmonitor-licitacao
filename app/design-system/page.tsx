'use client'

import React from 'react'
import { designSystem, colors } from '@/styles/designSystem'
import {
  Clipboard,
  Palette,
  Type,
  Move,
  Search,
  Menu,
  User,
  Filter,
  ChevronRight,
  Heart,
  Download,
  Share,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info
} from 'lucide-react'

export default function DesignSystemPage() {
  return (
    <div style={{
      fontFamily: designSystem.typography.fonts.primary,
      backgroundColor: colors.background.primary,
      minHeight: '100vh',
      padding: '48px 24px'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: colors.primary.main,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Clipboard size={24} color="white" />
            </div>
            <h1 style={{
              fontSize: designSystem.typography.fontSize['5xl'],
              fontWeight: designSystem.typography.fontWeight.bold,
              color: colors.text.primary,
              margin: 0,
              letterSpacing: designSystem.typography.letterSpacing.tight
            }}>
              BidMonitor Design System
            </h1>
          </div>
          <p style={{
            fontSize: designSystem.typography.fontSize.lg,
            color: colors.text.secondary,
            margin: 0,
            lineHeight: designSystem.typography.lineHeight.relaxed
          }}>
            Comprehensive design tokens and components for consistent UI development
          </p>
        </div>

        {/* Color Palette */}
        <section style={{ marginBottom: '64px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '32px'
          }}>
            <Palette size={24} color={colors.primary.main} />
            <h2 style={{
              fontSize: designSystem.typography.fontSize['3xl'],
              fontWeight: designSystem.typography.fontWeight.semibold,
              color: colors.text.primary,
              margin: 0
            }}>
              Color Palette
            </h2>
          </div>

          {/* Primary Colors */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{
              fontSize: designSystem.typography.fontSize.xl,
              fontWeight: designSystem.typography.fontWeight.medium,
              color: colors.text.primary,
              marginBottom: '16px'
            }}>
              Primary Colors
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              {Object.entries(colors.primary).map(([key, value]) => (
                <div key={key} style={{
                  backgroundColor: colors.background.secondary,
                  borderRadius: designSystem.borderRadius.lg,
                  padding: '16px',
                  border: `1px solid ${colors.border.light}`
                }}>
                  <div style={{
                    width: '100%',
                    height: '60px',
                    backgroundColor: value,
                    borderRadius: designSystem.borderRadius.base,
                    marginBottom: '12px'
                  }} />
                  <div style={{
                    fontSize: designSystem.typography.fontSize.sm,
                    fontWeight: designSystem.typography.fontWeight.semibold,
                    color: colors.text.primary,
                    marginBottom: '4px'
                  }}>
                    primary.{key}
                  </div>
                  <div style={{
                    fontSize: designSystem.typography.fontSize.xs,
                    color: colors.text.secondary,
                    fontFamily: designSystem.typography.fonts.mono
                  }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Colors */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{
              fontSize: designSystem.typography.fontSize.xl,
              fontWeight: designSystem.typography.fontWeight.medium,
              color: colors.text.primary,
              marginBottom: '16px'
            }}>
              Secondary Colors
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              {Object.entries(colors.secondary).map(([key, value]) => (
                <div key={key} style={{
                  backgroundColor: colors.background.secondary,
                  borderRadius: designSystem.borderRadius.lg,
                  padding: '16px',
                  border: `1px solid ${colors.border.light}`
                }}>
                  <div style={{
                    width: '100%',
                    height: '60px',
                    backgroundColor: value,
                    borderRadius: designSystem.borderRadius.base,
                    marginBottom: '12px'
                  }} />
                  <div style={{
                    fontSize: designSystem.typography.fontSize.sm,
                    fontWeight: designSystem.typography.fontWeight.semibold,
                    color: colors.text.primary,
                    marginBottom: '4px'
                  }}>
                    secondary.{key}
                  </div>
                  <div style={{
                    fontSize: designSystem.typography.fontSize.xs,
                    color: colors.text.secondary,
                    fontFamily: designSystem.typography.fonts.mono
                  }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Semantic Colors */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{
              fontSize: designSystem.typography.fontSize.xl,
              fontWeight: designSystem.typography.fontWeight.medium,
              color: colors.text.primary,
              marginBottom: '16px'
            }}>
              Semantic Colors
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              {['success', 'warning', 'danger'].map((colorType) => (
                <div key={colorType} style={{
                  backgroundColor: colors.background.secondary,
                  borderRadius: designSystem.borderRadius.lg,
                  padding: '16px',
                  border: `1px solid ${colors.border.light}`
                }}>
                  <div style={{
                    width: '100%',
                    height: '60px',
                    backgroundColor: (colors as any)[colorType].main,
                    borderRadius: designSystem.borderRadius.base,
                    marginBottom: '12px'
                  }} />
                  <div style={{
                    fontSize: designSystem.typography.fontSize.sm,
                    fontWeight: designSystem.typography.fontWeight.semibold,
                    color: colors.text.primary,
                    marginBottom: '4px'
                  }}>
                    {colorType}.main
                  </div>
                  <div style={{
                    fontSize: designSystem.typography.fontSize.xs,
                    color: colors.text.secondary,
                    fontFamily: designSystem.typography.fonts.mono
                  }}>
                    {(colors as any)[colorType].main}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Neutral Scale */}
          <div>
            <h3 style={{
              fontSize: designSystem.typography.fontSize.xl,
              fontWeight: designSystem.typography.fontWeight.medium,
              color: colors.text.primary,
              marginBottom: '16px'
            }}>
              Neutral Scale
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '12px'
            }}>
              {Object.entries(colors.neutral).map(([key, value]) => (
                <div key={key} style={{
                  backgroundColor: colors.background.secondary,
                  borderRadius: designSystem.borderRadius.base,
                  padding: '12px',
                  border: `1px solid ${colors.border.light}`,
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '100%',
                    height: '40px',
                    backgroundColor: value,
                    borderRadius: designSystem.borderRadius.sm,
                    marginBottom: '8px'
                  }} />
                  <div style={{
                    fontSize: designSystem.typography.fontSize.xs,
                    fontWeight: designSystem.typography.fontWeight.medium,
                    color: colors.text.primary,
                    marginBottom: '2px'
                  }}>
                    {key}
                  </div>
                  <div style={{
                    fontSize: '10px',
                    color: colors.text.secondary,
                    fontFamily: designSystem.typography.fonts.mono
                  }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography */}
        <section style={{ marginBottom: '64px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '32px'
          }}>
            <Type size={24} color={colors.primary.main} />
            <h2 style={{
              fontSize: designSystem.typography.fontSize['3xl'],
              fontWeight: designSystem.typography.fontWeight.semibold,
              color: colors.text.primary,
              margin: 0
            }}>
              Typography
            </h2>
          </div>

          {/* Font Families */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{
              fontSize: designSystem.typography.fontSize.xl,
              fontWeight: designSystem.typography.fontWeight.medium,
              color: colors.text.primary,
              marginBottom: '16px'
            }}>
              Font Families
            </h3>
            <div style={{
              display: 'grid',
              gap: '16px'
            }}>
              {Object.entries(designSystem.typography.fonts).map(([key, value]) => (
                <div key={key} style={{
                  backgroundColor: colors.background.secondary,
                  borderRadius: designSystem.borderRadius.lg,
                  padding: '24px',
                  border: `1px solid ${colors.border.light}`
                }}>
                  <div style={{
                    fontSize: designSystem.typography.fontSize.sm,
                    fontWeight: designSystem.typography.fontWeight.medium,
                    color: colors.text.secondary,
                    marginBottom: '8px'
                  }}>
                    {key}
                  </div>
                  <div style={{
                    fontSize: designSystem.typography.fontSize['2xl'],
                    fontFamily: value,
                    color: colors.text.primary,
                    marginBottom: '8px'
                  }}>
                    The quick brown fox jumps over the lazy dog
                  </div>
                  <div style={{
                    fontSize: designSystem.typography.fontSize.xs,
                    color: colors.text.secondary,
                    fontFamily: designSystem.typography.fonts.mono
                  }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Font Sizes */}
          <div>
            <h3 style={{
              fontSize: designSystem.typography.fontSize.xl,
              fontWeight: designSystem.typography.fontWeight.medium,
              color: colors.text.primary,
              marginBottom: '16px'
            }}>
              Font Sizes
            </h3>
            <div style={{
              backgroundColor: colors.background.secondary,
              borderRadius: designSystem.borderRadius.lg,
              padding: '24px',
              border: `1px solid ${colors.border.light}`
            }}>
              {Object.entries(designSystem.typography.fontSize).map(([key, value]) => (
                <div key={key} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                  paddingBottom: '16px',
                  borderBottom: `1px solid ${colors.border.light}`
                }}>
                  <div style={{
                    fontSize: value,
                    color: colors.text.primary,
                    fontWeight: designSystem.typography.fontWeight.medium
                  }}>
                    Typography Sample
                  </div>
                  <div style={{
                    fontSize: designSystem.typography.fontSize.sm,
                    color: colors.text.secondary,
                    fontFamily: designSystem.typography.fonts.mono
                  }}>
                    {key}: {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section style={{ marginBottom: '64px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '32px'
          }}>
            <Move size={24} color={colors.primary.main} />
            <h2 style={{
              fontSize: designSystem.typography.fontSize['3xl'],
              fontWeight: designSystem.typography.fontWeight.semibold,
              color: colors.text.primary,
              margin: 0
            }}>
              Spacing Scale
            </h2>
          </div>
          <div style={{
            backgroundColor: colors.background.secondary,
            borderRadius: designSystem.borderRadius.lg,
            padding: '24px',
            border: `1px solid ${colors.border.light}`
          }}>
            {Object.entries(designSystem.spacing).map(([key, value]) => (
              <div key={key} style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '60px',
                  fontSize: designSystem.typography.fontSize.sm,
                  color: colors.text.secondary,
                  fontFamily: designSystem.typography.fonts.mono
                }}>
                  {key}
                </div>
                <div style={{
                  width: value,
                  height: '20px',
                  backgroundColor: colors.secondary.main,
                  marginRight: '16px',
                  borderRadius: designSystem.borderRadius.sm
                }} />
                <div style={{
                  fontSize: designSystem.typography.fontSize.sm,
                  color: colors.text.secondary,
                  fontFamily: designSystem.typography.fonts.mono
                }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Iconography */}
        <section style={{ marginBottom: '64px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '32px'
          }}>
            <Search size={24} color={colors.primary.main} />
            <h2 style={{
              fontSize: designSystem.typography.fontSize['3xl'],
              fontWeight: designSystem.typography.fontWeight.semibold,
              color: colors.text.primary,
              margin: 0
            }}>
              Iconography
            </h2>
          </div>

          {/* Icon Categories */}
          <div style={{
            display: 'grid',
            gap: '24px'
          }}>
            {/* Navigation Icons */}
            <div style={{
              backgroundColor: colors.background.secondary,
              borderRadius: designSystem.borderRadius.lg,
              padding: '24px',
              border: `1px solid ${colors.border.light}`
            }}>
              <h3 style={{
                fontSize: designSystem.typography.fontSize.lg,
                fontWeight: designSystem.typography.fontWeight.medium,
                color: colors.text.primary,
                marginBottom: '16px'
              }}>
                Navigation Icons
              </h3>
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <Menu size={24} color={colors.text.primary} />
                <User size={24} color={colors.text.primary} />
                <Search size={24} color={colors.text.primary} />
                <Filter size={24} color={colors.text.primary} />
              </div>
            </div>

            {/* Action Icons */}
            <div style={{
              backgroundColor: colors.background.secondary,
              borderRadius: designSystem.borderRadius.lg,
              padding: '24px',
              border: `1px solid ${colors.border.light}`
            }}>
              <h3 style={{
                fontSize: designSystem.typography.fontSize.lg,
                fontWeight: designSystem.typography.fontWeight.medium,
                color: colors.text.primary,
                marginBottom: '16px'
              }}>
                Action Icons
              </h3>
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <ChevronRight size={24} color={colors.text.primary} />
                <Heart size={24} color={colors.text.primary} />
                <Download size={24} color={colors.text.primary} />
                <Share size={24} color={colors.text.primary} />
              </div>
            </div>

            {/* Status Icons */}
            <div style={{
              backgroundColor: colors.background.secondary,
              borderRadius: designSystem.borderRadius.lg,
              padding: '24px',
              border: `1px solid ${colors.border.light}`
            }}>
              <h3 style={{
                fontSize: designSystem.typography.fontSize.lg,
                fontWeight: designSystem.typography.fontWeight.medium,
                color: colors.text.primary,
                marginBottom: '16px'
              }}>
                Status Icons
              </h3>
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <CheckCircle size={24} color={colors.success.main} />
                <AlertTriangle size={24} color={colors.warning.main} />
                <XCircle size={24} color={colors.danger.main} />
                <Info size={24} color={colors.secondary.main} />
              </div>
            </div>
          </div>
        </section>

        {/* Component Examples */}
        <section>
          <h2 style={{
            fontSize: designSystem.typography.fontSize['3xl'],
            fontWeight: designSystem.typography.fontWeight.semibold,
            color: colors.text.primary,
            marginBottom: '32px'
          }}>
            Component Examples
          </h2>

          <div style={{
            display: 'grid',
            gap: '32px'
          }}>
            {/* Buttons */}
            <div style={{
              backgroundColor: colors.background.secondary,
              borderRadius: designSystem.borderRadius.lg,
              padding: '24px',
              border: `1px solid ${colors.border.light}`
            }}>
              <h3 style={{
                fontSize: designSystem.typography.fontSize.lg,
                fontWeight: designSystem.typography.fontWeight.medium,
                color: colors.text.primary,
                marginBottom: '16px'
              }}>
                Buttons
              </h3>
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <button style={{
                  backgroundColor: designSystem.components.button.primary.bg,
                  color: designSystem.components.button.primary.color,
                  border: 'none',
                  borderRadius: designSystem.borderRadius.lg,
                  padding: '12px 24px',
                  fontSize: designSystem.typography.fontSize.base,
                  fontWeight: designSystem.typography.fontWeight.medium,
                  cursor: 'pointer'
                }}>
                  Primary Button
                </button>
                <button style={{
                  backgroundColor: designSystem.components.button.secondary.bg,
                  color: designSystem.components.button.secondary.color,
                  border: designSystem.components.button.secondary.border,
                  borderRadius: designSystem.borderRadius.lg,
                  padding: '12px 24px',
                  fontSize: designSystem.typography.fontSize.base,
                  fontWeight: designSystem.typography.fontWeight.medium,
                  cursor: 'pointer'
                }}>
                  Secondary Button
                </button>
                <button style={{
                  backgroundColor: designSystem.components.button.accent.bg,
                  color: designSystem.components.button.accent.color,
                  border: 'none',
                  borderRadius: designSystem.borderRadius.lg,
                  padding: '12px 24px',
                  fontSize: designSystem.typography.fontSize.base,
                  fontWeight: designSystem.typography.fontWeight.medium,
                  cursor: 'pointer'
                }}>
                  Accent Button
                </button>
              </div>
            </div>

            {/* Cards */}
            <div style={{
              backgroundColor: colors.background.secondary,
              borderRadius: designSystem.borderRadius.lg,
              padding: '24px',
              border: `1px solid ${colors.border.light}`
            }}>
              <h3 style={{
                fontSize: designSystem.typography.fontSize.lg,
                fontWeight: designSystem.typography.fontWeight.medium,
                color: colors.text.primary,
                marginBottom: '16px'
              }}>
                Cards
              </h3>
              <div style={{
                backgroundColor: designSystem.components.card.default.bg,
                border: designSystem.components.card.default.border,
                borderRadius: designSystem.components.card.default.borderRadius,
                padding: designSystem.components.card.default.padding,
                boxShadow: designSystem.components.card.default.shadow
              }}>
                <h4 style={{
                  fontSize: designSystem.typography.fontSize.lg,
                  fontWeight: designSystem.typography.fontWeight.semibold,
                  color: colors.text.primary,
                  marginBottom: '8px'
                }}>
                  Sample Card
                </h4>
                <p style={{
                  fontSize: designSystem.typography.fontSize.base,
                  color: colors.text.secondary,
                  margin: 0,
                  lineHeight: designSystem.typography.lineHeight.relaxed
                }}>
                  This is an example card component using our design system tokens for consistent styling across the application.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
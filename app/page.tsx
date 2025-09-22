'use client'

import React, { useState, useMemo } from 'react'
import {
  Search,
  Menu,
  User,
  Clipboard
} from 'lucide-react'
import OpportunityCard from '@/components/OpportunityCard'
import SortDropdown from '@/components/SortDropdown'
import { colors } from '@/styles/designSystem'

export default function AirbnbStylePage() {
  const [sortBy, setSortBy] = useState('budget-high')

  const opportunities = [
    {
      id: 1,
      title: "Renovação de Infraestrutura Rodoviária",
      entity: "Governo do Estado de São Paulo",
      location: "São Paulo, SP",
      budget: "R$ 2.500.000",
      deadline: "25 Dez",
      hierarchy: { service: "Serviços", type: "Engenharia", subtype: "Rodovia" },
      description: "Contratação de empresa especializada para execução de serviços de renovação e modernização da infraestrutura rodoviária no trecho da BR-116, incluindo recapeamento asfáltico, sinalização horizontal e vertical, implantação de defensas metálicas e melhorias no sistema de drenagem. O projeto visa aumentar a segurança viária e melhorar as condições de trafegabilidade na região metropolitana de São Paulo."
    },
    {
      id: 2,
      title: "Construção de Campus Escolar",
      entity: "Prefeitura do Rio de Janeiro",
      location: "Rio de Janeiro, RJ",
      budget: "R$ 800.000",
      deadline: "8 Jan",
      hierarchy: { service: "Serviços", type: "Construção", subtype: "Educacional" },
      description: "Licitação para construção de novo campus escolar com capacidade para 600 alunos, incluindo 12 salas de aula, laboratório de informática, biblioteca, quadra poliesportiva coberta, refeitório e área administrativa. O projeto contempla também a execução de paisagismo, sistema de energia solar e infraestrutura completa de acessibilidade para pessoas com deficiência."
    },
    {
      id: 3,
      title: "Aquisição de Equipamentos Hospitalares",
      entity: "Ministério da Saúde Federal",
      location: "Brasília, DF",
      budget: "R$ 1.200.000",
      deadline: "30 Dez",
      hierarchy: { service: "Produtos", type: "Equipamentos", subtype: "Médicos" },
      description: "Processo licitatório para aquisição de equipamentos médico-hospitalares de alta complexidade, incluindo 3 tomógrafos computadorizados, 2 aparelhos de ressonância magnética, 5 ventiladores pulmonares e equipamentos de UTI. Todos os equipamentos devem possuir certificação ANVISA e garantia mínima de 2 anos com assistência técnica especializada."
    },
    {
      id: 4,
      title: "Desenvolvimento de Parque Urbano",
      entity: "Prefeitura de Belo Horizonte",
      location: "Belo Horizonte, MG",
      budget: "R$ 650.000",
      deadline: "15 Jan",
      hierarchy: { service: "Serviços", type: "Paisagismo", subtype: "Urbano" },
      description: "Contratação para desenvolvimento e implantação de parque urbano ecológico com área de 15.000m², incluindo trilhas ecológicas, playground infantil, academia ao ar livre, lago ornamental com sistema de tratamento natural, plantio de 200 árvores nativas e instalação de sistema de irrigação sustentável. O projeto visa criar um espaço de lazer e preservação ambiental."
    },
    {
      id: 5,
      title: "Estação de Tratamento de Água",
      entity: "CAGECE - Companhia de Água do Ceará",
      location: "Fortaleza, CE",
      budget: "R$ 3.200.000",
      deadline: "20 Jan",
      hierarchy: { service: "Serviços", type: "Engenharia", subtype: "Saneamento" },
      description: "Licitação para construção de estação de tratamento de água com capacidade de 50.000 litros/hora, incluindo sistemas de captação, floculação, decantação, filtração e desinfecção. O projeto contempla também a instalação de laboratório de análise da qualidade da água, sistema de automação completo e treinamento da equipe técnica para operação e manutenção."
    },
    {
      id: 6,
      title: "Tecnologia para Cidade Inteligente",
      entity: "Instituto de Inovação de Curitiba",
      location: "Curitiba, PR",
      budget: "R$ 1.800.000",
      deadline: "1 Fev",
      hierarchy: { service: "Serviços", type: "Tecnologia", subtype: "IoT" },
      description: "Implementação de solução tecnológica integrada para cidade inteligente, incluindo sensores IoT para monitoramento de tráfego, qualidade do ar e ruído urbano, sistema de semáforos inteligentes, plataforma de dados em tempo real e aplicativo mobile para cidadãos. A solução deve integrar-se aos sistemas existentes e fornecer dashboards analíticos para gestão municipal."
    }
  ]


  // Helper functions for sorting
  const parseBudget = (budgetString: string) => {
    return parseFloat(budgetString.replace(/[R$\.\s]/g, '').replace(',', '.'))
  }

  const parseDeadline = (deadlineString: string) => {
    const months = {
      'Jan': 0, 'Fev': 1, 'Mar': 2, 'Abr': 3, 'Mai': 4, 'Jun': 5,
      'Jul': 6, 'Ago': 7, 'Set': 8, 'Out': 9, 'Nov': 10, 'Dez': 11
    }
    const [day, month] = deadlineString.split(' ')
    const currentYear = new Date().getFullYear()
    return new Date(currentYear, (months as any)[month], parseInt(day))
  }

  // Sorted opportunities based on selected sort option
  const sortedOpportunities = useMemo(() => {
    const sorted = [...opportunities]

    switch (sortBy) {
      case 'budget-high':
        return sorted.sort((a, b) => parseBudget(b.budget) - parseBudget(a.budget))
      case 'budget-low':
        return sorted.sort((a, b) => parseBudget(a.budget) - parseBudget(b.budget))
      case 'deadline-soon':
        return sorted.sort((a, b) => parseDeadline(a.deadline).getTime() - parseDeadline(b.deadline).getTime())
      case 'deadline-far':
        return sorted.sort((a, b) => parseDeadline(b.deadline).getTime() - parseDeadline(a.deadline).getTime())
      default:
        return sorted
    }
  }, [opportunities, sortBy])


  return (
    <div style={{
      fontFamily: "'Circular', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
      backgroundColor: colors.background.primary,
      minHeight: '100vh'
    }}>
      {/* Airbnb-style Header */}
      <header style={{
        backgroundColor: colors.background.secondary + 'f8',
        borderBottom: `1px solid ${colors.border.light}`,
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(16px)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: colors.primary.main,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Clipboard size={16} color="white" />
            </div>
            <span style={{
              fontSize: '22px',
              fontWeight: '600',
              color: colors.primary.main,
              letterSpacing: '-0.02em'
            }}>
              BidMonitor
            </span>
          </div>

          {/* Search Bar - Airbnb style */}
          <div style={{
            backgroundColor: colors.background.secondary,
            border: `1px solid ${colors.border.light}`,
            borderRadius: '40px',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            minWidth: '400px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            cursor: 'pointer',
            transition: 'box-shadow 0.2s ease'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flex: 1
            }}>
              <div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: colors.text.primary,
                  marginBottom: '2px'
                }}>
                  Categoria
                </div>
                <div style={{
                  fontSize: '12px',
                  color: colors.text.secondary
                }}>
                  Construção
                </div>
              </div>
              <div style={{
                width: '1px',
                height: '32px',
                backgroundColor: colors.border.light
              }} />
              <div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: colors.text.primary,
                  marginBottom: '2px'
                }}>
                  Valor Estimado
                </div>
                <div style={{
                  fontSize: '12px',
                  color: colors.text.secondary
                }}>
                  Qualquer valor
                </div>
              </div>
              <div style={{
                width: '1px',
                height: '32px',
                backgroundColor: colors.border.light
              }} />
              <div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: colors.text.primary,
                  marginBottom: '2px'
                }}>
                  Prazo
                </div>
                <div style={{
                  fontSize: '12px',
                  color: colors.text.secondary
                }}>
                  Este mês
                </div>
              </div>
            </div>
            <div style={{
              backgroundColor: colors.secondary.main,
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Search size={16} color="white" />
            </div>
          </div>

          {/* Profile Menu */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              backgroundColor: colors.background.secondary,
              border: `1px solid ${colors.border.light}`,
              borderRadius: '24px',
              padding: '8px 8px 8px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}>
              <Menu size={14} color={colors.text.secondary} />
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: colors.text.secondary,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <User size={16} color="white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '32px 24px'
      }}>

        {/* Results Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px'
        }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: '600',
            color: colors.text.primary,
            margin: 0,
            letterSpacing: '-0.02em'
          }}>
            152 oportunidades encontradas
          </h1>

          <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
        </div>

        {/* Vertical List Layout */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '48px'
        }}>
          {sortedOpportunities.map((opp) => (
            <OpportunityCard
              key={opp.id}
              title={opp.title}
              entity={opp.entity}
              location={opp.location}
              budget={opp.budget}
              deadline={opp.deadline}
              hierarchy={opp.hierarchy}
              description={opp.description}
              onClick={() => {
                // TODO: Navigate to detail page
                console.log(`Navigate to opportunity ${opp.id}`)
              }}
            />
          ))}
        </div>

        {/* Load More - Airbnb style */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '48px'
        }}>
          <button style={{
            backgroundColor: colors.text.primary,
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '14px 24px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}>
            Mostrar mais oportunidades
          </button>
        </div>
      </div>
    </div>
  )
}
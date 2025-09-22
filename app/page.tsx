'use client'

import React, { useState, useMemo } from 'react'
import {
  Search,
  Menu,
  User,
  Clipboard
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import OpportunityCard from '@/components/OpportunityCard'
import SortDropdown from '@/components/SortDropdown'

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
    <div className="font-primary bg-background-primary min-h-screen">
      {/* Airbnb-style Header */}
      <header className="bg-background-secondary/95 border-b border-border-light sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Clipboard size={16} className="text-white" />
            </div>
            <span className="text-xl font-semibold text-primary tracking-tight">
              BidMonitor
            </span>
          </div>

          {/* Search Bar */}
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Buscar oportunidades..."
              className="pl-10 pr-4"
            />
          </div>

          {/* Profile Menu */}
          <div className="flex items-center gap-4">
            <div className="bg-background-secondary border border-border-light rounded-3xl py-2 px-4 pr-2 flex items-center gap-2 cursor-pointer hover:shadow-md transition-shadow">
              <Menu size={14} className="text-text-secondary" />
              <div className="w-8 h-8 bg-text-secondary rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-text-primary tracking-tight">
            152 oportunidades encontradas
          </h1>

          <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
        </div>

        {/* Vertical List Layout */}
        <div className="flex flex-col gap-4 mb-12">
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

        {/* Load More */}
        <div className="flex justify-center mb-12">
          <button className="bg-text-primary text-white border-none rounded-lg py-3.5 px-6 text-base font-semibold cursor-pointer hover:bg-opacity-90 transition-all duration-200">
            Mostrar mais oportunidades
          </button>
        </div>
      </div>
    </div>
  )
}
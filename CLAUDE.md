# BidMonitor - Project Context for Claude

## Project Overview
**BidMonitor** is a government tender monitoring application built with Next.js 14, designed to help users discover and track public procurement opportunities in Brazil.

## Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: CSS-in-JS (inline styles) with centralized design system
- **Icons**: Lucide React
- **Runtime**: React 18
- **Build Tool**: Next.js built-in bundler

## Project Structure
```
licitacao-monitor/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Main opportunities listing page
│   └── design-system/
│       └── page.tsx             # Design system showcase
├── components/
│   └── OpportunityCard.tsx      # Reusable opportunity card component
├── styles/
│   └── designSystem.ts          # Centralized design tokens
└── package.json                 # Dependencies and scripts
```

## Design System
Located in `/styles/designSystem.ts` - comprehensive design tokens including:

### Color Palette
- **Primary**: `#0A2540` (main), `#1A3B5C` (light), `#051A2F` (dark)
- **Secondary**: `#635BFF` (main), `#7B75FF` (light), `#4F46E5` (dark)
- **Semantic**: Success (`#00D924`), Warning (`#FFB800`), Danger (`#FF5C5C`)
- **Neutral Scale**: 50-900 grayscale progression
- **Background**: Primary (`#F6F9FC`), Secondary (`#FFFFFF`), Tertiary (`#FAFAFA`)
- **Text**: Primary (`#0A2540`), Secondary (`#6B7C93`), Tertiary (`#A0AEC0`)
- **Border**: Light (`#E3E8EE`), Medium (`#CBD5E0`), Dark (`#A0AEC0`)

### Typography
- **Primary Font**: `'Circular', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif`
- **Secondary Font**: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- **Mono Font**: `'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace`
- **Font Sizes**: xs (12px) to 6xl (64px) using rem units
- **Font Weights**: 300-800 scale
- **Line Heights**: tight (1.25) to loose (2)

### Spacing
8px base grid system: 0, 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px, 160px, 192px, 224px, 256px

### Component Variants
- **Buttons**: Primary, Secondary, Accent variants with hover states
- **Cards**: Default variant with hover transform and shadow effects
- **Inputs**: Default variant with focus states

## Key Components

### OpportunityCard
**Location**: `/components/OpportunityCard.tsx`
**Purpose**: Displays government tender opportunities with hover interactions
**Props**:
- `title`: string - Opportunity title
- `entity`: string - Government entity
- `location`: string - Geographic location
- `budget`: string - Estimated value
- `deadline`: string - Submission deadline
- `hierarchy`: object - Service categorization (service, type, subtype)
- `description`: string - Detailed description
- `onClick`: function - Click handler

**Layout**: Two-column layout (1/3 for metadata, 2/3 for description) with hover arrow

### Main Page
**Location**: `/app/page.tsx`
**Features**:
- Airbnb-inspired header with logo, search bar, and profile menu
- Filter system with category buttons
- Vertical list of opportunity cards
- Load more functionality
- Responsive design with max-width container

## Data Structure

### Opportunity Object
```typescript
{
  id: number
  title: string
  entity: string
  location: string
  budget: string (formatted as "R$ X.XXX.XXX")
  deadline: string (formatted as "DD MMM")
  hierarchy: {
    service: string    // "Serviços" | "Produtos"
    type: string       // "Engenharia" | "Construção" | "Tecnologia" etc.
    subtype: string    // "Rodovia" | "Educacional" | "IoT" etc.
  }
  description: string
}
```

## Styling Approach
- **CSS-in-JS**: All styling done via inline styles for component isolation
- **Design Tokens**: Centralized in `/styles/designSystem.ts` and imported as needed
- **Responsive**: Uses flexible layouts with max-width containers
- **Hover Effects**: Interactive elements have transform and shadow transitions
- **Portuguese Localization**: All UI text in Brazilian Portuguese

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - TypeScript compilation check

## Design Inspiration
- **Airbnb**: Search interface, filter buttons, card layouts
- **Stripe**: Color palette and professional aesthetic
- **Brazilian Government**: Portuguese localization and tender terminology

## Code Conventions
- **TypeScript**: Strict typing enabled
- **Functional Components**: React hooks pattern
- **No CSS Classes**: Pure CSS-in-JS approach
- **Design System First**: Always use tokens from `/styles/designSystem.ts`
- **Component Isolation**: Self-contained components with minimal external dependencies

## Business Context
**Domain**: Government procurement monitoring for Brazilian market
**Users**: Companies seeking public tender opportunities
**Data**: Government tender announcements with categorization and deadlines
**Goal**: Simplify discovery and tracking of relevant procurement opportunities

## File Naming Conventions
- **Pages**: lowercase with hyphens (e.g., `design-system`)
- **Components**: PascalCase (e.g., `OpportunityCard.tsx`)
- **Utilities**: camelCase (e.g., `designSystem.ts`)

## When Working on This Project
1. **Always check** `/styles/designSystem.ts` for available design tokens
2. **Use TypeScript** strictly - run `npm run typecheck` before committing
3. **Follow CSS-in-JS** pattern - no external CSS files
4. **Portuguese first** - all user-facing text should be in Brazilian Portuguese
5. **Mobile responsive** - test layouts on different screen sizes
6. **Design system showcase** available at `/design-system` route for reference

## Common Tasks
- **Adding new colors**: Update `/styles/designSystem.ts` colors object
- **New components**: Create in `/components/` and import design tokens
- **Layout changes**: Modify `/app/page.tsx` or `/app/layout.tsx`
- **Styling updates**: Use design tokens, avoid magic numbers
- **TypeScript errors**: Check prop interfaces and design token paths
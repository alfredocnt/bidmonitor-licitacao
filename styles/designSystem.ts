// BidMonitor Design System
// Comprehensive design tokens for consistent UI development

export const designSystem = {
  // Color Palette - Stripe-inspired with Airbnb patterns
  colors: {
    // Primary brand colors
    primary: {
      main: "#0A2540",
      light: "#1A3B5C",
      dark: "#051A2F",
      contrast: "#FFFFFF"
    },

    // Secondary accent colors
    secondary: {
      main: "#635BFF",
      light: "#7B75FF",
      dark: "#4F46E5",
      contrast: "#FFFFFF"
    },

    // Semantic colors
    success: {
      main: "#00D924",
      light: "#33E047",
      dark: "#00B01E",
      bg: "#F0FDF4"
    },

    warning: {
      main: "#FFB800",
      light: "#FFC533",
      dark: "#CC9300",
      bg: "#FFFBEB"
    },

    danger: {
      main: "#FF5C5C",
      light: "#FF7F7F",
      dark: "#E53E3E",
      bg: "#FEF2F2"
    },

    // Neutral colors
    neutral: {
      50: "#FAFAFA",
      100: "#F6F9FC",
      200: "#E3E8EE",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#6B7C93",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#0A2540"
    },

    // Background colors
    background: {
      primary: "#F6F9FC",
      secondary: "#FFFFFF",
      tertiary: "#FAFAFA",
      overlay: "rgba(0, 0, 0, 0.6)"
    },

    // Text colors
    text: {
      primary: "#0A2540",
      secondary: "#6B7C93",
      tertiary: "#A0AEC0",
      inverse: "#FFFFFF"
    },

    // Border colors
    border: {
      light: "#E3E8EE",
      medium: "#CBD5E0",
      dark: "#A0AEC0"
    }
  },

  // Typography System
  typography: {
    // Font families
    fonts: {
      primary: "'Circular', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
      secondary: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      mono: "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace"
    },

    // Font sizes (using rem for scalability)
    fontSize: {
      xs: "0.75rem",    // 12px
      sm: "0.875rem",   // 14px
      base: "1rem",     // 16px
      lg: "1.125rem",   // 18px
      xl: "1.25rem",    // 20px
      "2xl": "1.5rem",  // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem",    // 48px
      "6xl": "4rem"     // 64px
    },

    // Font weights
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800"
    },

    // Line heights
    lineHeight: {
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2"
    },

    // Letter spacing
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    }
  },

  // Spacing Scale (8px base grid)
  spacing: {
    0: "0",
    1: "0.25rem",   // 4px
    2: "0.5rem",    // 8px
    3: "0.75rem",   // 12px
    4: "1rem",      // 16px
    5: "1.25rem",   // 20px
    6: "1.5rem",    // 24px
    8: "2rem",      // 32px
    10: "2.5rem",   // 40px
    12: "3rem",     // 48px
    16: "4rem",     // 64px
    20: "5rem",     // 80px
    24: "6rem",     // 96px
    32: "8rem",     // 128px
    40: "10rem",    // 160px
    48: "12rem",    // 192px
    56: "14rem",    // 224px
    64: "16rem"     // 256px
  },

  // Border Radius
  borderRadius: {
    none: "0",
    sm: "0.125rem",   // 2px
    base: "0.25rem",  // 4px
    md: "0.375rem",   // 6px
    lg: "0.5rem",     // 8px
    xl: "0.75rem",    // 12px
    "2xl": "1rem",    // 16px
    "3xl": "1.5rem",  // 24px
    full: "9999px"
  },

  // Shadow System (elevation)
  shadows: {
    none: "none",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",

    // Card specific shadows
    card: "0 2px 8px rgba(0, 0, 0, 0.08)",
    cardHover: "0 4px 16px rgba(0, 0, 0, 0.12)",

    // Interactive element shadows
    button: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    buttonHover: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"
  },

  // Breakpoints for responsive design
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },

  // Animation & Transitions
  animation: {
    duration: {
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
      slower: "500ms"
    },

    easing: {
      linear: "linear",
      ease: "ease",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeOut: "cubic-bezier(0, 0, 0.2, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)"
    }
  },

  // Icon System
  iconography: {
    sizes: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "20px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "48px"
    },

    // Icon usage guidelines
    usage: {
      // Navigation icons
      navigation: ["Menu", "User", "Search", "Filter"],

      // Action icons
      actions: ["ChevronRight", "Heart", "Download", "Share"],

      // Category icons
      categories: ["Hammer", "Building", "Hospital", "TreePine", "Droplet", "Cpu"],

      // Status icons
      status: ["CheckCircle", "AlertTriangle", "XCircle", "Info"],

      // Interface icons
      interface: ["Plus", "Minus", "X", "Eye", "EyeOff", "Edit"]
    }
  },

  // Component Variants
  components: {
    // Button variants
    button: {
      primary: {
        bg: "#0A2540",
        color: "#FFFFFF",
        border: "none",
        hover: {
          bg: "#1A3B5C"
        }
      },

      secondary: {
        bg: "transparent",
        color: "#0A2540",
        border: "1px solid #E3E8EE",
        hover: {
          bg: "#F6F9FC"
        }
      },

      accent: {
        bg: "#635BFF",
        color: "#FFFFFF",
        border: "none",
        hover: {
          bg: "#4F46E5"
        }
      }
    },

    // Input variants
    input: {
      default: {
        bg: "#FFFFFF",
        border: "1px solid #E3E8EE",
        borderRadius: "8px",
        padding: "12px 16px",
        focus: {
          borderColor: "#635BFF",
          shadow: "0 0 0 3px rgba(99, 91, 255, 0.1)"
        }
      }
    },

    // Card variants
    card: {
      default: {
        bg: "#FFFFFF",
        border: "1px solid #E3E8EE",
        borderRadius: "12px",
        padding: "16px",
        shadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        hover: {
          transform: "translateY(-2px)",
          shadow: "0 4px 16px rgba(0, 0, 0, 0.12)"
        }
      }
    }
  }
} as const;

// Helper functions for accessing design tokens
export const getColor = (path: string) => {
  const keys = path.split('.');
  let value: any = designSystem.colors;

  for (const key of keys) {
    value = value?.[key];
  }

  return value || path;
};

export const getSpacing = (size: keyof typeof designSystem.spacing) => {
  return designSystem.spacing[size];
};

export const getFontSize = (size: keyof typeof designSystem.typography.fontSize) => {
  return designSystem.typography.fontSize[size];
};

export const getShadow = (type: keyof typeof designSystem.shadows) => {
  return designSystem.shadows[type];
};

// Export individual sections for convenience
export const colors = designSystem.colors;
export const typography = designSystem.typography;
export const spacing = designSystem.spacing;
export const shadows = designSystem.shadows;
export const borderRadius = designSystem.borderRadius;
export const breakpoints = designSystem.breakpoints;
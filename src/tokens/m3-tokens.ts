// ================================================
// Material 3 Design Tokens — Terrain Reference
// Source: M3Terrain.json · Generated 2026-06-02
// Import in tailwind.config.ts or globals.css
// ================================================

export const m3Colors = {
  light: {
    primary: "#6750a4",                    // Primary
    onPrimary: "#ffffff",                  // On Primary
    primaryContainer: "#eaddff",           // Primary Container
    onPrimaryContainer: "#4f378a",         // On Primary Container
    secondary: "#625b71",                  // Secondary
    onSecondary: "#ffffff",                // On Secondary
    secondaryContainer: "#e8def8",         // Secondary Container
    onSecondaryContainer: "#4a4459",       // On Secondary Container
    tertiary: "#7d5260",                   // Tertiary
    onTertiary: "#ffffff",                 // On Tertiary
    tertiaryContainer: "#ffd8e4",          // Tertiary Container
    onTertiaryContainer: "#633b48",        // On Tertiary Container
    error: "#b3261e",                      // Error
    onError: "#ffffff",                    // On Error
    errorContainer: "#f9dedc",             // Error Container
    onErrorContainer: "#852221",           // On Error Container
    background: "#fef7ff",                 // Background
    onBackground: "#1d1b20",              // On Background
    surface: "#fef7ff",                    // Surface
    onSurface: "#1d1b20",                 // On Surface
    surfaceVariant: "#e7e0ec",             // Surface Variant
    onSurfaceVariant: "#49454f",           // On Surface Variant
    outline: "#79747e",                    // Outline
    outlineVariant: "#cac4d0",             // Outline Variant
    surfaceTint: "#6750a4",                // Surface Tint
    shadow: "#000000",                     // Shadow
    scrim: "#000000",                      // Scrim
    inverseSurface: "#322f35",             // Inverse Surface
    inverseOnSurface: "#f5eff7",           // Inverse On Surface
    inversePrimary: "#d0bcff",             // Inverse Primary
    primaryFixed: "#eaddff",               // Primary Fixed
    onPrimaryFixed: "#21005d",             // On Primary Fixed
    primaryFixedDim: "#d0bcff",            // Primary Fixed Dim
    onPrimaryFixedVariant: "#4f378b",      // On Primary Fixed Variant
    secondaryFixed: "#e8def8",             // Secondary Fixed
    onSecondaryFixed: "#1d192b",           // On Secondary Fixed
    secondaryFixedDim: "#ccc2dc",          // Secondary Fixed Dim
    onSecondaryFixedVariant: "#4a4458",    // On Secondary Fixed Variant
    tertiaryFixed: "#ffd8e4",              // Tertiary Fixed
    onTertiaryFixed: "#31111d",            // On Tertiary Fixed
    tertiaryFixedDim: "#efb8c8",           // Tertiary Fixed Dim
    onTertiaryFixedVariant: "#633b48",     // On Tertiary Fixed Variant
    surfaceDim: "#ded8e1",                 // Surface Dim
    surfaceBright: "#fef7ff",              // Surface Bright
    surfaceContainerLowest: "#ffffff",     // Surface Container Lowest
    surfaceContainerLow: "#f7f2fa",        // Surface Container Low
    surfaceContainer: "#f3edf7",           // Surface Container
    surfaceContainerHigh: "#ece6f0",       // Surface Container High
    surfaceContainerHighest: "#e6e0e9",    // Surface Container Highest
  },
  dark: {
    primary: "#d0bcff",                    // Primary
    onPrimary: "#381e72",                  // On Primary
    primaryContainer: "#4f378b",           // Primary Container
    onPrimaryContainer: "#eaddff",         // On Primary Container
    secondary: "#ccc2dc",                  // Secondary
    onSecondary: "#332d41",                // On Secondary
    secondaryContainer: "#4a4458",         // Secondary Container
    onSecondaryContainer: "#e8def8",       // On Secondary Container
    tertiary: "#efb8c8",                   // Tertiary
    onTertiary: "#492532",                 // On Tertiary
    tertiaryContainer: "#633b48",          // Tertiary Container
    onTertiaryContainer: "#ffd8e4",        // On Tertiary Container
    error: "#f2b8b5",                      // Error
    onError: "#601410",                    // On Error
    errorContainer: "#8c1d18",             // Error Container
    onErrorContainer: "#f9dedc",           // On Error Container
    background: "#141218",                 // Background
    onBackground: "#e6e0e9",              // On Background
    surface: "#141218",                    // Surface
    onSurface: "#e6e0e9",                 // On Surface
    surfaceVariant: "#49454f",             // Surface Variant
    onSurfaceVariant: "#cac4d0",           // On Surface Variant
    outline: "#938f99",                    // Outline
    outlineVariant: "#49454f",             // Outline Variant
    surfaceTint: "#d0bcff",                // Surface Tint
    shadow: "#000000",                     // Shadow
    scrim: "#000000",                      // Scrim
    inverseSurface: "#e6e0e9",             // Inverse Surface
    inverseOnSurface: "#322f35",           // Inverse On Surface
    inversePrimary: "#6750a4",             // Inverse Primary
    primaryFixed: "#eaddff",               // Primary Fixed
    onPrimaryFixed: "#21005d",             // On Primary Fixed
    primaryFixedDim: "#d0bcff",            // Primary Fixed Dim
    onPrimaryFixedVariant: "#4f378b",      // On Primary Fixed Variant
    secondaryFixed: "#e8def8",             // Secondary Fixed
    onSecondaryFixed: "#1d192b",           // On Secondary Fixed
    secondaryFixedDim: "#ccc2dc",          // Secondary Fixed Dim
    onSecondaryFixedVariant: "#4a4458",    // On Secondary Fixed Variant
    tertiaryFixed: "#ffd8e4",              // Tertiary Fixed
    onTertiaryFixed: "#31111d",            // On Tertiary Fixed
    tertiaryFixedDim: "#efb8c8",           // Tertiary Fixed Dim
    onTertiaryFixedVariant: "#633b48",     // On Tertiary Fixed Variant
    surfaceDim: "#141218",                 // Surface Dim
    surfaceBright: "#3b383e",              // Surface Bright
    surfaceContainerLowest: "#0f0d13",     // Surface Container Lowest
    surfaceContainerLow: "#1d1b20",        // Surface Container Low
    surfaceContainer: "#211f26",           // Surface Container
    surfaceContainerHigh: "#2b2930",       // Surface Container High
    surfaceContainerHighest: "#36343b",    // Surface Container Highest
  },
} as const

export const m3Shape = {
  cornerNone: "0px",
  cornerExtraSmall: "4px",
  cornerSmall: "8px",
  cornerMedium: "12px",
  cornerLarge: "16px",
  cornerLargeIncreased: "20px",
  cornerExtraLarge: "28px",
  cornerExtraLargeIncreased: "32px",
  cornerExtraExtraLarge: "48px",
  cornerFull: "9999px",
} as const

export const m3Typescale = {
  displayLarge: {
    size: "57px",
    lineHeight: "64px",
  },
  displayMedium: {
    size: "45px",
    lineHeight: "52px",
  },
  displaySmall: {
    size: "36px",
    lineHeight: "44px",
  },
  headlineLarge: {
    size: "32px",
    lineHeight: "40px",
  },
  headlineMedium: {
    size: "28px",
    lineHeight: "36px",
  },
  headlineSmall: {
    size: "24px",
    lineHeight: "32px",
  },
  titleLarge: {
    size: "22px",
    lineHeight: "28px",
  },
  titleMedium: {
    size: "16px",
    lineHeight: "24px",
  },
  titleSmall: {
    size: "14px",
    lineHeight: "20px",
  },
  labelLarge: {
    size: "14px",
    lineHeight: "20px",
  },
  labelMedium: {
    size: "12px",
    lineHeight: "16px",
  },
  labelSmall: {
    size: "11px",
    lineHeight: "16px",
  },
  bodyLarge: {
    size: "16px",
    lineHeight: "24px",
  },
  bodyMedium: {
    size: "14px",
    lineHeight: "20px",
  },
  bodySmall: {
    size: "12px",
    lineHeight: "16px",
  },
} as const

// Terrain → M3 semantic mapping
// Use this to translate client M3 tokens into Terrain globals.css
export const terrainToM3 = {
  "--canvas-bg":            "background",         // Page background
  "--card-bg":              "surfaceContainer",    // Card surface
  "--card-border":          "outlineVariant",      // Subtle border
  "--color-text-body":      "onBackground",        // Primary text
  "--color-text-muted":     "onSurfaceVariant",    // Secondary text
  "--accent":               "primary",             // Brand action colour
  "--input-border-default": "outline",             // Input rest state
  "--input-border-focus":   "primary",             // Input active state
} as const

import { createTheme } from '@mui/material/styles'
declare module '@mui/material/styles' {
  interface Palette {
    colors: {
      customOrange: string[]
    }
  }
  interface PaletteOptions {
    colors: {
      customOrange: string[]
    }
  }
}
const base = {
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '4px 8px', // Set default padding here
        },
      },
    },
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       boxShadow: 'none', // Removes shadow/elevation for Paper component
    //     },
    //   },
    // },
    // MuiCard: {
    //   styleOverrides: {
    //     root: {
    //       boxShadow: 'none', // Removes shadow/elevation for Card component
    //     },
    //   },
    // },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none', // Removes shadow/elevation for Accordion component
        },
      },
    },
  },
}

const customPalette = {
  colors: {
    customOrange: [
      '#ffc670',
      '#ffbe5c',
      '#ffb647',
      '#ffad33',
      '#ffa51f',
      '#ff9800',
      '#f59300',
      '#e08700',
      '#cc7a00',
      '#b86e00',
    ],
  },
}

export const lightTheme = createTheme({
  ...base,
  ...{
    palette: {
      ...customPalette,
      ...{
        mode: 'light',
        primary: {
          main: '#1976d2',
        },
        secondary: {
          main: '#dc004e',
        },
        background: {
          default: '#ffffff',
          paper: '#f5f5f5',
        },
      },
    },
  },
})

export const darkTheme = createTheme({
  ...base,
  ...{
    palette: {
      ...customPalette,
      ...{
        mode: 'dark',
        primary: {
          main: '#90caf9',
        },
        secondary: {
          main: '#f48fb1',
        },
        background: {
          default: '#121212',
          paper: '#424242',
        },
      },
    },
  },
})

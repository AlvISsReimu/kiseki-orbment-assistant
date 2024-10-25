import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import {
  CssBaseline,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  type SelectChangeEvent,
} from '@mui/material'
import { Language } from '@shared/enums/language'
import { darkTheme, lightTheme } from '@shared/themes'
import { translation } from '@shared/utils/translation'
import { useContext, useEffect, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { QuartzTable } from './components/quartzTable'
import { globalContext } from './contexts/globalContext'

const Main = () => {
  const gc = useContext(globalContext.Context)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(gc.themeMode))
  }, [gc.themeMode])

  const theme = useMemo(
    () => (gc.themeMode === 'dark' ? darkTheme : lightTheme),
    [gc.themeMode],
  )

  const toggleTheme = () => {
    gc.setThemeMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'))
  }

  const selectLanguage = (ev: SelectChangeEvent) => {
    gc.setLanguage(ev.target.value as Language)
  }

  const translations = translation.global
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <div
          style={{
            alignSelf: 'flex-end',
            display: 'flex',
            gap: '20px',
          }}
        >
          <FormControl fullWidth>
            <InputLabel>{translations.language[gc.language]}</InputLabel>
            <Select
              value={gc.language}
              label={translations.language[gc.language]}
              onChange={selectLanguage}
            >
              <MenuItem value={Language.ZH_CN}>
                {translations.chinese[gc.language]}
              </MenuItem>
              <MenuItem value={Language.JA}>
                {translations.japanese[gc.language]}
              </MenuItem>
              <MenuItem value={Language.EN}>
                {translations.english[gc.language]}
              </MenuItem>
            </Select>
          </FormControl>
          <ToggleButtonGroup
            value={gc.themeMode}
            exclusive
            onChange={toggleTheme}
          >
            <ToggleButton value="light">
              <LightModeIcon />
            </ToggleButton>
            <ToggleButton value="dark">
              <DarkModeIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        {/* Your application components go here */}
        <QuartzTable></QuartzTable>
      </div>
    </ThemeProvider>
  )
}

const App = () => {
  return (
    <globalContext.ContextProvider>
      <Main />
    </globalContext.ContextProvider>
  )
}

const root = createRoot(document.getElementById('app'))
root.render(<App />)

// console.log('Test Result:', test());

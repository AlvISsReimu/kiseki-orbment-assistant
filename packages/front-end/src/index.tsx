import { createRoot } from 'react-dom/client';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { CssBaseline, MenuItem, Select, ThemeProvider, ToggleButton, ToggleButtonGroup, type SelectChangeEvent } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { Language } from '@shared/enums/language';
import { darkTheme, lightTheme } from '@shared/themes';
import { QuartzTable } from './components/quartzTable';

const App = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : 'dark';
  });
  const [language, setLanguage] = useState<Language>(Language.ZH_CN);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(themeMode));
  }, [themeMode]);

  const theme = useMemo(() => (themeMode === 'dark' ? darkTheme : lightTheme), [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevMode) => prevMode === 'dark' ? 'light' : 'dark');
  };

  const selectLanguage = (ev: SelectChangeEvent) => {
    setLanguage(ev.target.value as Language);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>
        <div style={{
          alignSelf: 'flex-end',
          display: 'flex',
          gap: '20px',
        }}>
          <Select
            value={language}
            label="Age"
            onChange={selectLanguage}
          >
            <MenuItem value={Language.ZH_CN}>Ten</MenuItem>
            <MenuItem value={Language.JA}>Twenty</MenuItem>
            <MenuItem value={Language.EN}>Thirty</MenuItem>
          </Select>
          <ToggleButtonGroup
            value={themeMode}
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
  );

};

const root = createRoot(document.getElementById('app'));
root.render(<App />);

// console.log('Test Result:', test());
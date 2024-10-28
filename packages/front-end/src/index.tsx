import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import {
  Button,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  type SelectChangeEvent,
} from '@mui/material'
import { LanguageCode } from '@shared/enums/languageCode'
import { getNameByLanguageCode } from '@shared/model/language'
import { ScoreMaps } from '@shared/model/score'
import { calcOptimalOrbmentSetup } from '@shared/orbmentAssistant'
import { TRANSLATION } from '@shared/utils/translation'
import { useContext, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { CharacterComponent } from './components/characterComponet'
import { QuartzTable } from './components/quartzTable'
import { ShardSkillTable } from './components/shardSkillTable'
import { globalContext } from './contexts/globalContext'
import { darkTheme, lightTheme } from './utils/themes'

const Main = () => {
  const gc = useContext(globalContext.Context)
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : 'dark'
  })
  const [quartzState, setQuartzState] = useState<number[]>([])
  const [characterId, setCharacterId] = useState<number>(0)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(themeMode))
  }, [themeMode])

  const theme = useMemo(
    () => (themeMode === 'dark' ? darkTheme : lightTheme),
    [themeMode],
  )

  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'))
  }

  const selectLanguage = (ev: SelectChangeEvent) => {
    gc.setLanguage(ev.target.value as LanguageCode)
  }

  const getResult = () => {
    const quartz = quartzState.map((v, i) => [i, v])
    const quartzMap = new Map<number, number>(
      quartz.filter(v => v[1] > 0) as [number, number][],
    )
    const bannedQuartzIds: number[] = quartz
      .filter(v => v[1] === -1)
      .map(v => v[0])

    calcOptimalOrbmentSetup({
      characterId,
      scoreMaps: new ScoreMaps(quartzMap, new Map()),
      bannedQuartzIds,
    })
  }

  const translations = TRANSLATION.GLOBAL
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
              <MenuItem value={LanguageCode.ZH_CN}>
                {getNameByLanguageCode(LanguageCode.ZH_CN)}
              </MenuItem>
              <MenuItem value={LanguageCode.JA}>
                {getNameByLanguageCode(LanguageCode.JA)}
              </MenuItem>
              <MenuItem value={LanguageCode.EN}>
                {getNameByLanguageCode(LanguageCode.EN)}
              </MenuItem>
            </Select>
          </FormControl>
          <ToggleButtonGroup value={themeMode} exclusive onChange={toggleTheme}>
            <ToggleButton value="light">
              <LightModeIcon />
            </ToggleButton>
            <ToggleButton value="dark">
              <DarkModeIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        {/* Your application components go here */}
        <CharacterComponent
          onCharacterIdChange={setCharacterId}
        ></CharacterComponent>
        <QuartzTable onChange={setQuartzState}></QuartzTable>
        <ShardSkillTable></ShardSkillTable>
        <Button variant="outlined" onClick={getResult}>
          Get Result
        </Button>
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

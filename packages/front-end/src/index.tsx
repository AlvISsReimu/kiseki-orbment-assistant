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
import { ScoreMaps } from '@shared/model/scoreMaps'
import { calcOptimalOrbmentSetup } from '@shared/orbmentAssistant'
import { SpeedInsights } from '@vercel/speed-insights/react'

import { useContext, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { useTranslation } from 'react-i18next'
import { CharacterComponent } from './components/characterComponet'
import { QuartzTable } from './components/quartzTable'
import { ShardSkillTable } from './components/shardSkillTable'
import { globalContext } from './contexts/globalContext'
import './i18n'
import { darkTheme, lightTheme } from './utils/themes'

const Main = () => {
  const gc = useContext(globalContext.Context)
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : 'dark'
  })
  const [quartzState, setQuartzState] = useState<number[]>([])
  const [characterId, setCharacterId] = useState<number>(0)

  const { t, i18n } = useTranslation()

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
    i18n.changeLanguage(ev.target.value.slice(0, 2))
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
            <InputLabel>{t('language')}</InputLabel>
            <Select
              value={gc.language}
              label={t('language')}
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

        {/* TODO: show text better */}
        <h1>{t('website_name')}</h1>
        <div>{t('website_description_0')}</div>
        <div>1.&nbsp;{t('website_description_1')}</div>
        <div>2.&nbsp;{t('website_description_2')}</div>
        <div>3.&nbsp;{t('website_description_3')}</div>
        <h2>{t('development_title')}</h2>
        <div>
          <Button variant="outlined">{t('repository')}</Button>
        </div>
        <div>{t('development_text')}</div>

        <CharacterComponent
          onCharacterIdChange={setCharacterId}
        ></CharacterComponent>
        <QuartzTable onChange={setQuartzState}></QuartzTable>
        <ShardSkillTable></ShardSkillTable>
        <Button variant="outlined" onClick={getResult}>
          {t('start_calculation')}
        </Button>
      </div>
      <SpeedInsights />
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

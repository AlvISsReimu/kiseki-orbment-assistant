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
  Typography,
  type SelectChangeEvent,
} from '@mui/material'
import { LanguageCode } from '@shared/enums/languageCode'
import { getNameByLanguageCode } from '@shared/model/language'
import { SpeedInsights } from '@vercel/speed-insights/react'

import { ALL_QUARTZ } from '@shared/constants/quartz'
import { ScoreMaps } from '@shared/model/scoreMaps'
import {
  calcOptimalOrbmentSetup,
  type OrbmentAssistantInput,
} from '@shared/orbmentAssistant'
import { useContext, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { useTranslation } from 'react-i18next'
import { CharacterComponent } from './components/characterComponet'
import { QuartzTable } from './components/quartzTable'
import { ShardSkillTable } from './components/shardSkillTable'
import { globalContext } from './contexts/globalContext'
import './i18n'
import { darkTheme, lightTheme } from './utils/themes'
import { useSingletonLocalStorage } from './utils/utils'

const Main = () => {
  const gc = useContext(globalContext.Context)
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : 'dark'
  })
  const [characterId, setCharacterId] = useState<number>(0)

  const [quartzState, setQuartzState] = useSingletonLocalStorage(
    'quartzTable',
    new Array(ALL_QUARTZ.length).fill(0),
  )

  const [shardSkillScores, setShardSkillScores] = useState<number[][]>([])

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

    const scores: [number, number][] = shardSkillScores
      .map(v => v.map((v, i) => [i, v]).filter(v => v[1] > 0))
      .flat() as [number, number][]
    const shardSkillMap = new Map<number, number>(scores)

    const input: OrbmentAssistantInput = {
      characterId,
      scoreMaps: new ScoreMaps(quartzMap, shardSkillMap),
      bannedQuartzIds,
    }
    console.log(input)
    const res = calcOptimalOrbmentSetup(input)
    console.log(res)
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
        <Typography variant="h3">{t('website_name')}</Typography>
        <div>{t('website_description_0')}</div>
        <div>1.&nbsp;{t('website_description_1')}</div>
        <div>2.&nbsp;{t('website_description_2')}</div>
        <div>3.&nbsp;{t('website_description_3')}</div>
        <Typography variant="h4" sx={{ marginTop: '1rem' }}>
          {t('development_title')}
        </Typography>
        <div>
          <Button variant="outlined">{t('repository')}</Button>
        </div>
        <div>{t('development_text')}</div>

        <CharacterComponent
          onCharacterIdChange={setCharacterId}
        ></CharacterComponent>
        <QuartzTable data={quartzState} setData={setQuartzState}></QuartzTable>
        <ShardSkillTable onChange={setShardSkillScores}></ShardSkillTable>
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

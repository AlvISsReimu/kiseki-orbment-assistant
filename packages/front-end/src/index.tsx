import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Link,
  MenuItem,
  Select,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
  type SelectChangeEvent,
} from '@mui/material'
import { LanguageCode } from '@shared/enums/languageCode'
import { getNameByLanguageCode } from '@shared/model/language'
import { SpeedInsights } from '@vercel/speed-insights/react'

import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { DefaultParameterValues } from '@shared/constants/defaultParameterValues'
import { ALL_QUARTZ } from '@shared/constants/quartz'
import { ScoreMaps } from '@shared/model/scoreMaps'
import {
  calcOptimalOrbmentSetup,
  type OrbmentAssistantInput,
} from '@shared/orbmentAssistant'
import { useContext, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import { useTranslation } from 'react-i18next'
import { CharacterComponent } from './components/characterComponet'
import { Loading } from './components/Loading'
import { QuartzTable } from './components/quartzTable'
import { Results } from './components/results'
import { ShardSkillTable } from './components/shardSkillTable'
import { globalContext } from './contexts/globalContext'
import './i18n'
import type { FEOrbmentAssistantResult } from './types/types'
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
  const [result, setResult] = useState<FEOrbmentAssistantResult | undefined>(
    undefined,
  )
  const { t, i18n } = useTranslation()

  ReactGA.initialize('G-QCM9J8XK4T')

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(themeMode))
  }, [themeMode])

  useEffect(() => {
    document.title = t('website_name')
  }, [gc.language])

  const theme = useMemo(
    () => (themeMode === 'dark' ? darkTheme : lightTheme),
    [themeMode],
  )

  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'))
  }

  const selectLanguage = (ev: SelectChangeEvent) => {
    i18n.changeLanguage(ev.target.value.slice(0, 2))
  }

  const getResult = async () => {
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

      // SAA parameters
      initTemperature: DefaultParameterValues.INIT_TEMPERATURE,
      coolingRate: DefaultParameterValues.COOLING_RATE,
      endTemperature: DefaultParameterValues.END_TEMPERATURE,
      balance: DefaultParameterValues.BALANCE,
      maxIteration: DefaultParameterValues.MAX_ITERATION,
      maxNoChangeIteration: DefaultParameterValues.MAX_NO_CHANGE_ITERATION,
      resultSizeLimit: DefaultParameterValues.RESULT_SIZE_LIMIT,
    }
    gc.setResultCharacterId(characterId)
    gc.setShowLoading(true)
    const startTime = Date.now()
    const res = await calcOptimalOrbmentSetup(input)
    const timeMillis = Date.now() - startTime
    // const res = testResult
    setResult({
      ...res,
      bestResults: res.bestResults
        .slice(0, 5)
        .map(v => [v.weaponLine, v.shieldLine, v.driveLine, v.extraLine]),
    })
    gc.setShowLoading(false)

    const payloadToGA = {
      category: 'calculation',
      action: 'calculation_success',
      // input
      characterId,
      bannedQuartzIds: JSON.stringify(bannedQuartzIds),
      quartzMap: JSON.stringify(Object.fromEntries(quartzMap)),
      shardSkillMap: JSON.stringify(Object.fromEntries(shardSkillMap)),
      // SAA params
      initTemperature: input.initTemperature,
      coolingRate: input.coolingRate,
      endTemperature: input.endTemperature,
      balance: input.balance,
      maxIteration: input.maxIteration,
      maxNoChangeIteration: input.maxNoChangeIteration,
      resultSizeLimit: input.resultSizeLimit,
      // time cost
      timeMillis,
      // SAA results
      bestScore: res.bestScore,
      bestResultSize: res.bestResults.length,
      // misc
      languageCode: gc.language,
      theme: themeMode,
    }
    ReactGA.event(payloadToGA)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Loading />
      <AppBar
        component="nav"
        position="sticky"
        sx={{
          padding: '4px 0',
        }}
      >
        <Toolbar
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">{t('website_name')}</Typography>
          <div
            style={{
              display: 'flex',
              gap: '20px',
            }}
          >
            <Select
              value={gc.language}
              inputProps={{ 'aria-label': 'Without label' }}
              onChange={selectLanguage}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                color: 'white', // Use theme color here
                '& .MuiSelect-icon': {
                  color: 'white', // Change the icon color too
                },
              }}
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
            <ToggleButtonGroup
              value={themeMode}
              exclusive
              onChange={toggleTheme}
              sx={{
                '& .MuiToggleButtonGroup-firstButton': {
                  borderRadius: '50%',
                  borderTopRightRadius: '50%',
                  borderBottomRightRadius: '50%',
                  color: 'white',
                },
                '& .MuiToggleButtonGroup-lastButton': {
                  borderRadius: '50%',
                  borderTopRightRadius: '50%',
                  borderBottomRightRadius: '50%',
                  color: 'white',
                },
              }}
            >
              <ToggleButton
                value="light"
                sx={{
                  width: '56px',
                  height: '56px',
                  border: 'none',
                  '&.Mui-selected': {
                    color: 'white',
                  },
                }}
              >
                <LightModeIcon />
              </ToggleButton>
              <ToggleButton
                value="dark"
                sx={{
                  width: '56px',
                  height: '56px',
                  border: 'none',
                  '&.Mui-selected': {
                    color: 'white',
                  },
                }}
              >
                <DarkModeIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          margin: {
            xs: 0,
            sm: '0 5%',
            md: '0 10%',
            lg: '0 15%',
          },
        }}
      >
        {/* Your application components go here */}

        {/* TODO: show text better */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            flexWrap: 'wrap',
            paddingBottom: '20px',
          }}
        >
          <div style={{ paddingRight: '20px' }}>
            <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
              {t('website_description_title')}
            </Typography>
            <div>{t('website_description_0')}</div>
            <div>1.&nbsp;{t('website_description_1')}</div>
            <div>2.&nbsp;{t('website_description_2')}</div>
            <div>3.&nbsp;{t('website_description_3')}</div>
            {gc.language === LanguageCode.EN && (
              <div>4.&nbsp;{t('website_description_4')}</div>
            )}
          </div>
          <div>
            <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
              {t('development_title')}
            </Typography>
            <div style={{ marginBottom: '0.5rem' }}>
              <Button
                variant="outlined"
                href="https://github.com/AlvISsReimu/kiseki-orbment-assistant"
                target="_blank"
                endIcon={<OpenInNewIcon />}
              >
                {t('repository')}
              </Button>
            </div>
            <div>{t('development_text')}</div>
          </div>
        </div>

        <CharacterComponent
          onCharacterIdChange={setCharacterId}
        ></CharacterComponent>
        <QuartzTable data={quartzState} setData={setQuartzState}></QuartzTable>
        <ShardSkillTable onChange={setShardSkillScores}></ShardSkillTable>
        {result && <Results data={result} />}
        <Button variant="contained" onClick={getResult}>
          {t('start_calculation')}
        </Button>

        {/* TODO: show credits in a better way */}
        <Box sx={{ fontSize: '0.8rem' }}>
          <Box sx={{ marginBottom: '8px' }}>{t('credit_title')}</Box>
          <Box>
            {t('credit_0')}
            <Link
              href="https://kiseki.fandom.com/"
              underline="hover"
              target="_blank"
            >
              Kiseki Wiki
            </Link>
            {t('credit_1')}
          </Box>
        </Box>
      </Box>
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

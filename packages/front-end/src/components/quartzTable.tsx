import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  type SelectChangeEvent,
} from '@mui/material'
import { ALL_QUARTZ } from '@shared/constants/quartz'
import { ElementType } from '@shared/enums/elementType'
import { useContext, useEffect } from 'react'
import { globalContext } from '../contexts/globalContext'

import { ExpandMore } from '@mui/icons-material'
import { getNameByElementType } from '@shared/model/element'
import { Quartz } from '@shared/model/quartz'
import { useTranslation } from 'react-i18next'
import i18next from '../i18n'
import { getQuartzIconUrlById } from '../utils/assets'
import { useSingletonLocalStorage } from '../utils/utils'

const headers = Object.values(ElementType)
const data: Quartz[][] = (() => {
  const currentRow = new Array(headers.length).fill(0)
  const data = []
  ALL_QUARTZ.forEach(quartz => {
    const row = currentRow[headers.indexOf(quartz.elementType)]
    if (!data[row]) {
      data[row] = []
    }
    data[row].push(quartz)
    currentRow[headers.indexOf(quartz.elementType)] += 1
  })
  return data
})()

const _loadOptionLabels = () => {
  return {
    disabled: i18next.t('quartz_table_status_disabled'),
    enabled: i18next.t('quartz_table_status_enabled'),
    weighted: i18next.t('quartz_table_status_weighted'),
  }
}

export const QuartzTable = (props: {
  data: number[]
  setData: (v: number[]) => void
}) => {
  const gc = useContext(globalContext.Context)
  const [quartzTableExpanded, setQuartzTableExpanded] =
    useSingletonLocalStorage('quartzTableExpanded', true)

  let optionLabels = _loadOptionLabels()
  useEffect(() => {
    optionLabels = _loadOptionLabels()
  }, [])

  const getOptionLabel = (value: number) => {
    if (value === -1) {
      return optionLabels.disabled
    } else if (value === 0) {
      return optionLabels.enabled
    }
    return optionLabels.weighted
  }

  const updateQuartzState = (ev: SelectChangeEvent, id: number) => {
    const copy = [...props.data]
    copy[id] = parseInt(ev.target.value)
    console.log(copy)
    props.setData(copy)
  }

  const { t } = useTranslation()

  return (
    <Accordion
      expanded={quartzTableExpanded}
      onChange={(_, expanded) => setQuartzTableExpanded(expanded)}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        {t('quartz_table_title')}
      </AccordionSummary>
      <AccordionDetails>
        {/* TODO: show text better */}
        <h1>{t('quartz_table_instruction_0')}</h1>
        <div>{t('quartz_table_instruction_1')}</div>
        <div>{t('quartz_table_instruction_2')}</div>
        <div>{t('quartz_table_instruction_3')}</div>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header, index) => (
                  <TableCell key={index} style={{ textAlign: 'center' }}>
                    {getNameByElementType(header, gc.language)}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  {row.map((quartz, ind) => (
                    <TableCell key={ind}>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          placeContent: 'center',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            placeContent: 'center',
                            gap: 4,
                          }}
                        >
                          <span>{quartz.name_i18n[gc.language]}</span>
                          <img
                            width="24px"
                            height="24px"
                            src={getQuartzIconUrlById(quartz.id)}
                          ></img>
                        </div>
                        <Select
                          value={String(props.data[quartz.id])}
                          onChange={ev => updateQuartzState(ev, quartz.id)}
                          displayEmpty
                          inputProps={{ 'aria-label': 'Without label' }}
                          sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                              border: 'none',
                            },
                            '& .MuiSelect-select': {
                              padding: '8px 14px',
                            },
                          }}
                        >
                          {Array.from({ length: 12 }).map((_, index) => (
                            <MenuItem key={index} value={index - 1}>
                              {getOptionLabel(index - 1) +
                                (index > 1 ? ` (${index - 1})` : '')}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  )
}

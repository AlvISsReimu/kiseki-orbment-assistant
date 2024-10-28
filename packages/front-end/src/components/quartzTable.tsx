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
import { useSingletonLocalStorage } from '../utils/utils'

import { ExpandMore } from '@mui/icons-material'
import { getNameByElementType } from '@shared/model/element'
import { Quartz } from '@shared/model/quartz'
import { useTranslation } from 'react-i18next'
import i18next from '../i18n'
import { getQuartzIconUrlById } from '../utils/assets'

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

export const QuartzTable = (props: { onChange: (v: number[]) => void }) => {
  const gc = useContext(globalContext.Context)
  const [quartzState, setQuartzState] = useSingletonLocalStorage(
    'quartzTable',
    new Array(ALL_QUARTZ.length).fill(0),
  )

  useEffect(() => {
    props.onChange([...quartzState])
  }, [quartzState])

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
    const value = parseInt(ev.target.value)
    setQuartzState(prev => {
      const prevItems = [...prev]
      prevItems[id] = value
      return prevItems
    })
  }

  const { t } = useTranslation()

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        {t('quartz_table_title')}
      </AccordionSummary>
      <AccordionDetails>
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
                          value={String(quartzState[quartz.id])}
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

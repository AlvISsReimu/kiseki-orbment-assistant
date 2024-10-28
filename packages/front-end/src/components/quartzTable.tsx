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
import { TRANSLATION } from '@shared/utils/translation'
import { useContext, useEffect } from 'react'
import { globalContext } from '../contexts/globalContext'
import { useSingletonLocalStorage } from '../utils/utils'

import { ExpandMore } from '@mui/icons-material'
import { getNameByElementType } from '@shared/model/element'
import { Quartz } from '@shared/model/quartz'
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

export const QuartzTable = (props: { onChange: (v: number[]) => void }) => {
  const gc = useContext(globalContext.Context)
  const [quartzState, setQuartzState] = useSingletonLocalStorage(
    'quartzTable',
    new Array(ALL_QUARTZ.length).fill(0),
  )

  useEffect(() => {
    props.onChange([...quartzState])
  }, [quartzState])

  const getOptionLabel = (value: number) => {
    if (value === -1) {
      return TRANSLATION.GLOBAL.disabled
    } else if (value === 0) {
      return TRANSLATION.GLOBAL.enabled
    }
    return TRANSLATION.GLOBAL.weighted
  }

  const updateQuartzState = (ev: SelectChangeEvent, id: number) => {
    const value = parseInt(ev.target.value)
    setQuartzState(prev => {
      const prevItems = [...prev]
      prevItems[id] = value
      return prevItems
    })
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        {TRANSLATION.QUARTZ_TABLE.title[gc.language]}
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
                              {getOptionLabel(index - 1)[gc.language] +
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

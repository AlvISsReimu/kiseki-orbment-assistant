import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
  type SelectChangeEvent,
} from '@mui/material'
import { ALL_QUARTZ } from '@shared/constants/quartz'
import { ElementType } from '@shared/enums/elementType'
import { useContext, useEffect, useState } from 'react'
import { globalContext } from '../contexts/globalContext'

import { ExpandMore } from '@mui/icons-material'
import ClearIcon from '@mui/icons-material/Clear'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
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
  const { t } = useTranslation()
  const [optionLabels, setOptionLabels] = useState(_loadOptionLabels())
  const theme = useTheme()
  const textColor = theme.palette.text.primary
  const customOrange = theme.palette.colors.customOrange

  useEffect(() => {
    setOptionLabels(_loadOptionLabels())
  }, [gc.language])

  const updateQuartzState = (ev: SelectChangeEvent, id: number) => {
    const copy = [...props.data]
    copy[id] = parseInt(ev.target.value)
    props.setData(copy)
  }

  return (
    <Accordion
      elevation={0}
      expanded={quartzTableExpanded}
      onChange={(_, expanded) => setQuartzTableExpanded(expanded)}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        {t('quartz_table_title')}
      </AccordionSummary>
      <AccordionDetails>
        {/* TODO: show text better */}
        <Box sx={{ marginBottom: '20px' }}>
          <div>{t('quartz_table_instruction_0')}</div>
          <div>{t('quartz_table_instruction_1')}</div>
          <div>{t('quartz_table_instruction_2')}</div>
          <div>{t('quartz_table_instruction_3')}</div>
        </Box>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: 'none',
            '&::before': {
              content: 'none',
            },
          }}
        >
          <Table
            sx={{
              '& .MuiTableRow-root': {
                boxShadow: `0px -1px 0px 0px ${textColor} inset`,
              },
              // '& .MuiTableRow-root': {
              //   borderBottom: `1px solid ${textColor}`,
              //   borderStyle: 'solid',
              //   borderLeft: 'none',
              //   borderRight: 'none',
              // },
            }}
          >
            <TableHead>
              <TableRow>
                {headers.map((header, index) => (
                  <TableCell key={index} style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        placeContent: 'center',
                        gap: 4,
                      }}
                    >
                      <Typography sx={{ fontWeight: 'bolder' }}>
                        {getNameByElementType(header, gc.language)}
                      </Typography>
                      <img
                        width="24px"
                        height="24px"
                        src={getQuartzIconUrlById(data[0][index].id)}
                      ></img>
                    </div>
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
                          // flexWrap: 'wrap',
                          alignItems: 'center',
                          placeContent: 'center',
                          gap: 4,
                        }}
                      >
                        <Typography sx={{ whiteSpace: 'nowrap' }}>
                          {quartz.name_i18n[gc.language]}
                        </Typography>
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
                              <Box
                                sx={{
                                  width: '100%',
                                  display: 'flex',
                                  placeContent: 'space-between',
                                  alignItems: 'center',
                                }}
                              >
                                <Typography>
                                  {index > 1
                                    ? index - 1
                                    : optionLabels[
                                        index < 1 ? 'disabled' : 'enabled'
                                      ]}
                                </Typography>
                                {index === 0 && (
                                  <ClearIcon
                                    sx={{ color: 'red', fontSize: '20px' }}
                                  />
                                )}
                                {index > 1 && (
                                  <PriorityHighIcon
                                    sx={{
                                      color: customOrange[index - 2],
                                      fontSize: '20px',
                                    }}
                                  />
                                )}
                              </Box>
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

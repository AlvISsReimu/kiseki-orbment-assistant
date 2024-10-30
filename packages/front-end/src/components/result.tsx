import { ExpandMore } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material'
import { ElementType } from '@shared/enums/elementType'
import { getQuartzById } from '@shared/model/quartz'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { globalContext } from '../contexts/globalContext'
import type { FEOrbmentAssistantResult } from '../types/types'
import { getElementIconUrl, getQuartzIconUrlById } from '../utils/assets'
import { _loadCoreHeaders } from '../utils/utils'

const headers = Object.values(ElementType)
export const Result = (props: {
  data: FEOrbmentAssistantResult['bestResults'][number]
  ind: number
}) => {
  const gc = useContext(globalContext.Context)
  const [tableHead, setTableHead] = useState(_loadCoreHeaders())
  const theme = useTheme()
  const textColor = theme.palette.text.primary
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(props.ind === 0)

  useEffect(() => {
    setTableHead(_loadCoreHeaders())
  }, [gc.language])

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      sx={{
        '&:not(:last-child)': { borderBottom: `1px solid ${textColor}` },
        boxShadow: 'none',
        '&::before': {
          content: 'none',
        },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        {t('result_table_title')} {props.ind + 1}
      </AccordionSummary>
      <AccordionDetails sx={{ paddingLeft: '32px', paddingRight: '32px' }}>
        <Typography>{t('result_table_quartz_title')}</Typography>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: 'none',
            '&::before': {
              content: 'none',
            },
          }}
        >
          <Table>
            <TableBody>
              {props.data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: 'none' }}>
                    {tableHead[index]}
                  </TableCell>
                  {row.slots.map((quartzId, ind) => (
                    <TableCell key={ind} sx={{ border: 'none' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          placeContent: 'center',
                          gap: 4,
                        }}
                      >
                        <span>
                          {getQuartzById(quartzId).name_i18n[gc.language]}
                        </span>
                        <img
                          width="24px"
                          height="24px"
                          src={getQuartzIconUrlById(quartzId)}
                        ></img>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography sx={{ marginTop: '8px' }}>
          {t('result_table_elements_title')}
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell key={index}>
                  <div
                    style={{
                      display: 'flex',
                      placeContent: 'center',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <img src={getElementIconUrl(header, gc.language)} />
                    {/* <Typography>
                      {getNameByElementType(header, gc.language)}
                    </Typography> */}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row, index) => (
              <TableRow key={index}>
                {headers.map((element, ind) => (
                  <TableCell
                    key={ind}
                    sx={{ border: 'none', textAlign: 'center' }}
                  >
                    {row.elements[element] || '⎯'}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </AccordionDetails>
    </Accordion>
  )
}

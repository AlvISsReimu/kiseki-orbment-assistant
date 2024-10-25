import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { ALL_QUARTZ } from '@shared/constants/quartz'
import { ElementType } from '@shared/enums/elementType'
import { getNameByElementType } from '@shared/model/element'
import type { Quartz } from '@shared/model/quartz'
import { useContext } from 'react'
import { globalContext } from '../contexts/globalContext'

import earth_regular from '../assets/quartz-icon/earth_regular.webp'
import earth_advanced from '../assets/quartz-icon/earth_advanced.webp'
import water_regular from '../assets/quartz-icon/water_regular.webp'
import water_advanced from '../assets/quartz-icon/water_advanced.webp'
import fire_regular from '../assets/quartz-icon/fire_regular.webp'
import fire_advanced from '../assets/quartz-icon/fire_advanced.webp'
import wind_regular from '../assets/quartz-icon/wind_regular.webp'
import wind_advanced from '../assets/quartz-icon/wind_advanced.webp'
import time_regular from '../assets/quartz-icon/time_regular.webp'
import time_advanced from '../assets/quartz-icon/time_advanced.webp'
import space_regular from '../assets/quartz-icon/space_regular.webp'
import space_advanced from '../assets/quartz-icon/space_advanced.webp'
import mirage_regular from '../assets/quartz-icon/mirage_regular.webp'
import mirage_advanced from '../assets/quartz-icon/mirage_advanced.webp'

const quartzIconMap = {
  [ElementType.Earth]: {
    regular: earth_regular,
    advanced: earth_advanced,
  },
  [ElementType.Water]: {
    regular: water_regular,
    advanced: water_advanced,
  },
  [ElementType.Fire]: {
    regular: fire_regular,
    advanced: fire_advanced,
  },
  [ElementType.Wind]: {
    regular: wind_regular,
    advanced: wind_advanced,
  },
  [ElementType.Time]: {
    regular: time_regular,
    advanced: time_advanced,
  },
  [ElementType.Space]: {
    regular: space_regular,
    advanced: space_advanced,
  },
  [ElementType.Mirage]: {
    regular: mirage_regular,
    advanced: mirage_advanced,
  },
}

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

const getQuartzIcon = (quartz: Quartz): string => {
  const isAdvanced = quartz.elementalValues.size > 1
  return quartzIconMap[quartz.elementType][isAdvanced ? 'advanced' : 'regular']
}

export const QuartzTable = () => {
  const gc = useContext(globalContext.Context)
  return (
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
                  <img src={getQuartzIcon(quartz)}></img>
                  {quartz.name_i18n[gc.language]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

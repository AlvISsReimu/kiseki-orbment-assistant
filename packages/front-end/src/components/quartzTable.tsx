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
import { Element } from '@shared/enums/element'
import type { Quartz } from '@shared/model/quartz'
import { useContext } from 'react'
import { globalContext } from '../contexts/globalContext'

const headers = Object.values(Element)
const data: Quartz[][] = (() => {
  const currentRow = new Array(headers.length).fill(0)
  const data = []
  ALL_QUARTZ.forEach(quartz => {
    const row = currentRow[headers.indexOf(quartz.element)]
    if (!data[row]) {
      data[row] = []
    }
    data[row].push(quartz)
    currentRow[headers.indexOf(quartz.element)] += 1
  })
  return data
})()

export const QuartzTable = () => {
  const gc = useContext(globalContext.Context)
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index} style={{ textAlign: 'center' }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {row.map((quartz, ind) => (
                <TableCell key={ind}>{quartz.name_i18n[gc.language]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

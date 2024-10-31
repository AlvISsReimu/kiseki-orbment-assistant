import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  useTheme,
  type SelectChangeEvent,
} from '@mui/material'
import { ALL_CHARACTERS } from '@shared/constants/character'
import { getCharacterById } from '@shared/model/character'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { globalContext } from '../contexts/globalContext'
import { colorMap, coreKeys } from '../utils/constants'
import { _loadCoreHeaders, useSingletonLocalStorage } from '../utils/utils'

export const CharacterComponent = (prop: {
  onCharacterIdChange: (id: number) => void
}) => {
  const gc = useContext(globalContext.Context)
  const [characterId, setCharacterId] = useSingletonLocalStorage(
    'characterId',
    0,
  )
  const [core, setCore] = useState<(string | undefined)[][]>([])
  const theme = useTheme()
  const textColor = theme.palette.text.primary
  const { t } = useTranslation()
  const [tableHead, setTableHead] = useState(_loadCoreHeaders())

  useEffect(() => {
    setTableHead(_loadCoreHeaders())
  }, [gc.language])

  useEffect(() => {
    const character = getCharacterById(characterId)
    const coreArray = []
    coreKeys.forEach(key => {
      coreArray.push(Array.from({ length: character?.core?.[key]?.totalSlots }))
      if (character?.core?.[key]?.elementLimitedSlots) {
        character.core[key].elementLimitedSlots.forEach(slot => {
          coreArray[coreArray.length - 1][slot.position] = slot.elementType
        })
      }
    })
    setCore(coreArray)
    prop.onCharacterIdChange(characterId)
  }, [characterId])

  const updateCharacterId = (ev: SelectChangeEvent) => {
    const id = Number(ev.target.value)
    setCharacterId(id)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <FormControl fullWidth>
        <InputLabel>{t('character')}</InputLabel>
        <Select
          value={characterId.toString()}
          label={t('character')}
          onChange={ev => updateCharacterId(ev)}
        >
          {ALL_CHARACTERS.map((character, index) => (
            <MenuItem key={index} value={character.id.toString()}>
              {character.name_i18n[gc.language]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {core.length && (
        <TableContainer
          component={Paper}
          sx={{
            width: '500px',
            background: 'unset',
            boxShadow: 'none',
          }}
        >
          <Table
            sx={{
              '& .MuiTableCell-root': {
                padding: '8px', // Set padding specifically for this table's cells
              },
            }}
          >
            <TableBody>
              {core.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: 'none', fontWeight: 'bolder' }}>
                    {tableHead[index]}
                  </TableCell>
                  {row.map((element, ind) => (
                    <TableCell key={ind} sx={{ border: 'none' }}>
                      <div>
                        <div
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            border: `1px solid ${textColor}`,
                            backgroundColor:
                              colorMap[element as keyof typeof colorMap],
                          }}
                        ></div>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}

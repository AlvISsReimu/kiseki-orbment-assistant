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
import { TRANSLATION } from '@shared/utils/translation'
import { useContext, useEffect, useState } from 'react'
import { globalContext } from '../contexts/globalContext'
import { useSingletonLocalStorage } from '../utils/utils'

const translated = TRANSLATION.CHARACTER
const coreKeys = ['weaponLine', 'shieldLine', 'driveLine', 'extraLine'] as const
const tableHead = [
  TRANSLATION.CHARACTER.weapon,
  TRANSLATION.CHARACTER.shield,
  TRANSLATION.CHARACTER.drive,
  TRANSLATION.CHARACTER.extra,
]
const colorMap = {
  Earth: '#B56B1C',
  Water: '#1F4B8C',
  Fire: '#A03130',
  Wind: '#0C834F',
  Time: '#3B2059',
  Space: '#AC9C3A',
  Mirage: '#7D7D7D',
}

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
        <InputLabel>{translated.character[gc.language]}</InputLabel>
        <Select
          value={characterId.toString()}
          label={translated.character[gc.language]}
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
          <Table>
            <TableBody>
              {core.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: 'none' }}>
                    {tableHead[index][gc.language]}
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

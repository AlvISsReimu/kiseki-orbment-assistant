import { Box, MenuItem, Select, Typography } from '@mui/material'
import type { ShardSkill } from '@shared/model/shardSkill'
import { useContext, useEffect, useState } from 'react'
import { globalContext } from '../contexts/globalContext'
import { ElementIconComponent } from './elementIcon'

const gap = 8

export const ShardSkillRuleTable = (props: {
  dataSet: ShardSkill[]
  dataRule: number[]
  itemMinWidth: number
  onDataRuleChange: (data: number[]) => void
}) => {
  const gc = useContext(globalContext.Context)
  const [ruleCopy, setRuleCopy] = useState(props.dataRule)

  useEffect(() => {
    props.onDataRuleChange(ruleCopy)
  }, [ruleCopy])

  const onWeightChange = (index: number, weight: number) => {
    const r = [...ruleCopy]
    r[index] = weight
    setRuleCopy(r)
  }

  return (
    // <Grid2
    //   container
    //   ref={parentRef}
    //   wrap="wrap"
    //   sx={{ width: '100%', gap: `${gap}px` }}
    // >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${props.itemMinWidth}px, 1fr))`, // Create responsive columns
        gap: `${gap}px`, // Set gap between items
      }}
    >
      {props.dataSet.map((item, index) => (
        <Box
          key={index}
          sx={{
            height: '100%',
            display: 'flex',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Select
              value={ruleCopy[item.id]}
              onChange={ev => onWeightChange(item.id, Number(ev.target.value))}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{
                width: '65px',
                textAlign: 'center',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .MuiSelect-select': {
                  padding: '8px 14px',
                },
              }}
            >
              {Array.from({ length: 11 }).map((_, index) => (
                <MenuItem key={index} value={index}>
                  <Typography sx={{ opacity: index > 0 ? 1 : 0 }}>
                    {index}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginLeft: '8px',
              }}
            >
              <Typography sx={{ whiteSpace: 'nowrap' }}>
                {item.name_i18n[gc.language]}
              </Typography>
              {Array.from(item.elementalValues.entries()).map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <ElementIconComponent
                    languageCode={gc.language}
                    elementType={k}
                  ></ElementIconComponent>
                  <Typography>{v}</Typography>
                </div>
              ))}
            </div>
          </Box>
        </Box>
      ))}
    </div>
  )
}

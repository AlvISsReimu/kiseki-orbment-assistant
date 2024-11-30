import { ExpandMore } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
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
import {
  DRIVE_LINE_SHARD_SKILLS,
  EXTRA_LINE_SHARD_SKILLS,
  SHIELD_LINE_SHARD_SKILLS,
  WEAPON_LINE_SHARD_SKILLS,
} from '@shared/constants/shardSkill'
import { ElementType } from '@shared/enums/elementType'
import { getCharacterById } from '@shared/model/character'
import { getQuartzById } from '@shared/model/quartz'
import { getShardSkillById, type ShardSkillId } from '@shared/model/shardSkill'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { globalContext } from '../contexts/globalContext'
import type { FEOrbmentAssistantResult } from '../types/types'
import { getElementIconUrl, getQuartzIconUrlById } from '../utils/assets'
import { colorMap, coreKeys } from '../utils/constants'
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
  const [limitedSlots, setLimitedSlots] = useState<[number, ElementType][][]>(
    [],
  )
  const [missedQuartz, setMissedQuartz] = useState<number[]>([])
  const [missedShardSkills, setMissedShardSkills] = useState<number[][]>([])

  useEffect(() => {
    setTableHead(_loadCoreHeaders())
  }, [gc.language])

  useEffect(() => {
    const character = getCharacterById(gc.resultParams.characterId)
    const coreLimitedArray: [number, ElementType][][] = []
    coreKeys.forEach(key => {
      coreLimitedArray.push(
        character?.core?.[key]?.elementLimitedSlots?.map(slot => [
          slot.position,
          slot.elementType,
        ]) || [],
      )
    })
    setLimitedSlots(coreLimitedArray)
    const usedQuartz = props.data.reduce(
      (acc, row) => [...acc, ...row.slots],
      [],
    )
    const missedQuartz = Object.entries(gc.resultParams.quartz)
      .filter(
        // need to have weight
        ([key, value]) => value > 0 && !usedQuartz.includes(Number(key)),
      )
      .map(([key, _]) => Number(key))
    // console.log(gc.resultParams.quartz, usedQuartz, missedQuartz)
    setMissedQuartz(missedQuartz)
    const totalSkills = [
      WEAPON_LINE_SHARD_SKILLS.map(skill => skill.id),
      SHIELD_LINE_SHARD_SKILLS.map(skill => skill.id),
      DRIVE_LINE_SHARD_SKILLS.map(skill => skill.id),
      EXTRA_LINE_SHARD_SKILLS.map(skill => skill.id),
    ]
    // console.log(
    //   gc.resultParams.shardSkills,
    //   props.data.map(row => row.fulfilledShardSkills),
    // )
    setMissedShardSkills(
      props.data.map((row, index) => {
        const allBaseShardSkillIds = row.fulfilledShardSkills
          .map(shardSkillId => getShardSkillById(shardSkillId).baseShardSkillId)
          .filter(id => id !== undefined) as ShardSkillId[]
        return Object.entries(gc.resultParams.shardSkills)
          .filter(
            ([key, value]) =>
              value > 0 &&
              totalSkills[index].includes(Number(key)) &&
              !row.fulfilledShardSkills.includes(Number(key)) &&
              !allBaseShardSkillIds.includes(Number(key)),
          )
          .map(([key, _]) => Number(key))
      }),
    )
  }, [gc.resultParams, props.data])

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
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {t('result_table_title')} {props.ind + 1}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          paddingLeft: '32px',
          paddingRight: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography sx={{ fontWeight: 'bold' }}>
            {t('result_table_quartz_title')}
          </Typography>
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
                maxWidth: '1200px',
                marginTop: '8px',
              }}
            >
              <TableBody>
                {props.data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ border: 'none', fontWeight: 'bolder' }}>
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
                          <span
                            style={{
                              padding: '0 4px',
                              backgroundColor: limitedSlots[index]?.find(
                                slot => slot[0] === ind,
                              )
                                ? colorMap[
                                    limitedSlots[index]?.find(
                                      slot => slot[0] === ind,
                                    )[1]
                                  ]
                                : 'unset',
                              color: limitedSlots[index]?.find(
                                slot => slot[0] === ind,
                              )
                                ? 'white'
                                : 'unset',
                            }}
                          >
                            {quartzId === -1
                              ? '⎯'
                              : getQuartzById(quartzId).name_i18n[gc.language]}
                          </span>
                          {quartzId !== -1 && (
                            <img
                              width="24px"
                              height="24px"
                              src={getQuartzIconUrlById(quartzId)}
                            ></img>
                          )}
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <hr style={{ width: '100%', opacity: 0.5 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography sx={{ fontWeight: 'bold' }}>
            {t('result_table_elements_title')}
          </Typography>
          <Table
            sx={{
              maxWidth: '1200px',
              marginTop: '8px',
            }}
          >
            <TableHead>
              <TableRow>
                {headers.map((header, index) => (
                  <TableCell key={index} sx={{ border: 'none' }}>
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
        </Box>
        <hr style={{ width: '100%', opacity: 0.5 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Typography sx={{ fontWeight: 'bold' }}>
            {t('result_table_shard_skills_title')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {props.data.map((row, index) => (
              <Box key={index} sx={{ display: 'flex', gap: '20px' }}>
                <Typography
                  sx={{ minWidth: 80, maxWidth: 80, fontWeight: 'bolder' }}
                >
                  {tableHead[index]}
                </Typography>

                <Typography>
                  {row.fulfilledShardSkills
                    .map(
                      skillId =>
                        getShardSkillById(skillId).name_i18n[gc.language],
                    )
                    .join(`${t('comma')} `)}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        {!!missedQuartz.length && (
          <>
            <hr style={{ width: '100%', opacity: 0.5 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Typography sx={{ fontWeight: 'bold' }}>
                {t('result_table_missed_quartz_title')}
              </Typography>
              <Typography>
                {missedQuartz
                  .map(
                    quartzId => getQuartzById(quartzId).name_i18n[gc.language],
                  )
                  .join(`${t('comma')} `)}
              </Typography>
            </Box>
          </>
        )}
        {!!missedShardSkills.flat().length && (
          <>
            <hr style={{ width: '100%', opacity: 0.5 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Typography sx={{ fontWeight: 'bold' }}>
                {t('result_table_missed_shard_skills_title')}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                {missedShardSkills.map((row, index) => (
                  <Box key={index} sx={{ display: 'flex', gap: '20px' }}>
                    <Typography
                      sx={{ minWidth: 80, maxWidth: 80, fontWeight: 'bolder' }}
                    >
                      {tableHead[index]}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {!!row.length ? (
                        <Typography>
                          {row
                            .map(
                              skillId =>
                                getShardSkillById(skillId).name_i18n[
                                  gc.language
                                ],
                            )
                            .join(`${t('comma')} `)}
                        </Typography>
                      ) : (
                        <Typography>{t('empty')}</Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </>
        )}
      </AccordionDetails>
    </Accordion>
  )
}

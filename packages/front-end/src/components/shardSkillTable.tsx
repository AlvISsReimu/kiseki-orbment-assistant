import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  useTheme,
} from '@mui/material'
import {
  DRIVE_LINE_SHARD_SKILLS,
  EXTRA_LINE_SHARD_SKILLS,
  SHIELD_LINE_SHARD_SKILLS,
  WEAPON_LINE_SHARD_SKILLS,
} from '@shared/constants/shardSkill'
import type { ShardSkill } from '@shared/model/shardSkill'
import { TRANSLATION } from '@shared/utils/translation'
import { useContext } from 'react'
import { globalContext } from '../contexts/globalContext'
import { useSingletonLocalStorage } from '../utils/utils'
import { ShardSkillRuleTable } from './shardSkillRuleTable'

const initRule = (skills: ShardSkill[]) => {
  const rule: number[] = []
  skills.forEach(skill => {
    rule[skill.id] = 0
  })
  return rule
}

// for each table set a minumum width for each column
const minWidth = [362, 346, 362, 339]

export const ShardSkillTable = () => {
  const gc = useContext(globalContext.Context)
  const theme = useTheme()
  const [weaponRule, setWeaponRule] = useSingletonLocalStorage(
    'weaponRule',
    initRule(WEAPON_LINE_SHARD_SKILLS),
  )
  // shield rule is the same as weapon rule
  const [shieldRule, setShieldRule] = useSingletonLocalStorage(
    'shieldRule',
    initRule(SHIELD_LINE_SHARD_SKILLS),
  )
  // drive rule
  const [driveRule, setDriveRule] = useSingletonLocalStorage(
    'driveRule',
    initRule(DRIVE_LINE_SHARD_SKILLS),
  )
  // extra rule
  const [extraRule, setExtraRule] = useSingletonLocalStorage(
    'extraRule',
    initRule(EXTRA_LINE_SHARD_SKILLS),
  )
  const [expandedState, setExpandedState] = useSingletonLocalStorage(
    'shardSkillExpandedState',
    [true, true, true, true],
  )

  return (
    <Box
      sx={{
        padding: '20px 10px',
        backgroundColor: theme.palette.background.paper,
        backgroundImage: 'var(--Paper-overlay)',
      }}
    >
      <Accordion
        sx={{
          boxShadow: 'none',
        }}
        expanded={expandedState[0]}
        onChange={(_, expanded) =>
          setExpandedState([
            expanded,
            expandedState[1],
            expandedState[2],
            expandedState[3],
          ])
        }
      >
        <AccordionSummary>
          {TRANSLATION.SHARD_SKILL_TABLE.weaponLine[gc.language]}
        </AccordionSummary>
        <AccordionDetails>
          <ShardSkillRuleTable
            itemMinWidth={minWidth[0]}
            dataSet={WEAPON_LINE_SHARD_SKILLS}
            dataRule={weaponRule}
            onDataRuleChange={setWeaponRule}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          boxShadow: 'none',
        }}
        expanded={expandedState[1]}
        onChange={(_, expanded) =>
          setExpandedState([
            expandedState[0],
            expanded,
            expandedState[2],
            expandedState[3],
          ])
        }
      >
        <AccordionSummary>
          {TRANSLATION.SHARD_SKILL_TABLE.shieldLine[gc.language]}
        </AccordionSummary>
        <AccordionDetails>
          <ShardSkillRuleTable
            itemMinWidth={minWidth[1]}
            dataSet={SHIELD_LINE_SHARD_SKILLS}
            dataRule={shieldRule}
            onDataRuleChange={setShieldRule}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          boxShadow: 'none',
        }}
        expanded={expandedState[2]}
        onChange={(_, expanded) =>
          setExpandedState([
            expandedState[0],
            expandedState[1],
            expanded,
            expandedState[3],
          ])
        }
      >
        <AccordionSummary>
          {TRANSLATION.SHARD_SKILL_TABLE.driveLine[gc.language]}
        </AccordionSummary>
        <AccordionDetails>
          <ShardSkillRuleTable
            itemMinWidth={minWidth[2]}
            dataSet={DRIVE_LINE_SHARD_SKILLS}
            dataRule={driveRule}
            onDataRuleChange={setDriveRule}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          boxShadow: 'none',
        }}
        expanded={expandedState[3]}
        onChange={(_, expanded) =>
          setExpandedState([
            expandedState[0],
            expandedState[1],
            expandedState[2],
            expanded,
          ])
        }
      >
        <AccordionSummary>
          {TRANSLATION.SHARD_SKILL_TABLE.extraLine[gc.language]}
        </AccordionSummary>
        <AccordionDetails>
          <ShardSkillRuleTable
            itemMinWidth={minWidth[3]}
            dataSet={EXTRA_LINE_SHARD_SKILLS}
            dataRule={extraRule}
            onDataRuleChange={setExtraRule}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

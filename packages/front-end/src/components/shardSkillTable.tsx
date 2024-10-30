import { ExpandMore } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useTheme,
} from '@mui/material'
import {
  DRIVE_LINE_SHARD_SKILLS,
  EXTRA_LINE_SHARD_SKILLS,
  SHIELD_LINE_SHARD_SKILLS,
  WEAPON_LINE_SHARD_SKILLS,
} from '@shared/constants/shardSkill'
import type { ShardSkill } from '@shared/model/shardSkill'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
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

export const ShardSkillTable = (props: {
  onChange: (rules: number[][]) => void
}) => {
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
    [true, true, true, true, true],
  )
  const { t } = useTranslation()

  useEffect(() => {
    props.onChange([weaponRule, shieldRule, driveRule, extraRule])
  }, [weaponRule, shieldRule, driveRule, extraRule])

  return (
    <Accordion
      expanded={expandedState[4]}
      onChange={(_, expanded) =>
        setExpandedState([...expandedState.slice(0, 4), expanded])
      }
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        {t('shard_skill_rule_table_title')}
      </AccordionSummary>
      <AccordionDetails>
        {/* TODO: show text better */}
        <div style={{ marginBottom: '20px' }}>
          <div>{t('shard_skill_rule_table_instruction_0')}</div>
          <div>{t('shard_skill_rule_table_instruction_1')}</div>
        </div>
        <Accordion
          sx={{
            boxShadow: 'none',
            '&::before': {
              content: 'none',
            },
          }}
          expanded={expandedState[0]}
          onChange={(_, expanded) =>
            setExpandedState([expanded, ...expandedState.slice(1)])
          }
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            {t('shard_skill_rule_table_weapon_line_title')}
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
            '&::before': {
              content: 'none',
            },
          }}
          expanded={expandedState[1]}
          onChange={(_, expanded) =>
            setExpandedState([
              ...expandedState.slice(0, 1),
              expanded,
              ...expandedState.slice(2),
            ])
          }
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            {t('shard_skill_rule_table_shield_line_title')}
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
            '&::before': {
              content: 'none',
            },
          }}
          expanded={expandedState[2]}
          onChange={(_, expanded) =>
            setExpandedState([
              ...expandedState.slice(0, 2),
              expanded,
              ...expandedState.slice(3),
            ])
          }
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            {t('shard_skill_rule_table_drive_line_title')}
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
            '&::before': {
              content: 'none',
            },
          }}
          expanded={expandedState[3]}
          onChange={(_, expanded) =>
            setExpandedState([
              ...expandedState.slice(0, 3),
              expanded,
              ...expandedState.slice(4),
            ])
          }
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            {t('shard_skill_rule_table_extra_line_title')}
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
      </AccordionDetails>
    </Accordion>
  )
}

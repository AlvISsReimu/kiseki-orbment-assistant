import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { FEOrbmentAssistantResult } from '../types/types'
import { Result } from './result'

export const Results = (props: { data: FEOrbmentAssistantResult }) => {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(true)
  return (
    <Accordion
      expanded={expanded}
      onChange={(_, expanded) => setExpanded(expanded)}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        {t('results_table_title')} {t('best_score')}: {props.data.bestScore}
      </AccordionSummary>
      <AccordionDetails>
        {props.data.bestResults.map((result, index) => (
          <Result key={index} data={result} ind={index} />
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

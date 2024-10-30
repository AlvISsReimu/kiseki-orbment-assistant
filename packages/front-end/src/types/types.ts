import type { OrbmentAssistantResult } from '@shared/orbmentAssistant'

export type FEOrbmentAssistantResult = Omit<
  OrbmentAssistantResult,
  'bestResults'
> & {
  bestResults: Array<
    OrbmentAssistantResult['bestResults'][number][keyof OrbmentAssistantResult['bestResults'][number]][]
  >
}

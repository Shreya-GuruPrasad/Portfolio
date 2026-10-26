import type { IllustrationName } from '@/lib/types'
import crypto from './crypto.svg'
import network from './network.svg'
import paper from './paper.svg'
import readiness from './readiness.svg'
import riskMatrix from './risk-matrix.svg'
import rootCause from './root-cause.svg'

/** Placeholder illustrations for projects, until real screenshots exist. */
export const illustrations: Record<IllustrationName, string> = {
  readiness,
  'risk-matrix': riskMatrix,
  'root-cause': rootCause,
  network,
  crypto,
  paper,
}

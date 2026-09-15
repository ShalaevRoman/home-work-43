import type { User } from '../types/models'
import { INITIAL_USERS } from '../constants/config'

const SIMULATED_NETWORK_DELAY_MS = 500

export function fetchUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(INITIAL_USERS), SIMULATED_NETWORK_DELAY_MS)
  })
}
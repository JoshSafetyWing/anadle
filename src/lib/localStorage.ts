const gameStateKey = 'gameState'
const highContrastKey = 'highContrast'
const previousWordsKey = 'previousWords'

export type StoredGameState = {
  guesses: string[]
  solution: string
}

export const saveGameStateToLocalStorage = (gameState: StoredGameState) => {
  localStorage.setItem(gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(gameStateKey)
  return state ? (JSON.parse(state) as StoredGameState) : null
}

const gameStatKey = 'gameStats'

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatsToLocalStorage = (gameStats: GameStats) => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(gameStatKey)
  return stats ? (JSON.parse(stats) as GameStats) : null
}

export const setStoredIsHighContrastMode = (isHighContrast: boolean) => {
  if (isHighContrast) {
    localStorage.setItem(highContrastKey, '1')
  } else {
    localStorage.removeItem(highContrastKey)
  }
}

export const getStoredIsHighContrastMode = () => {
  const highContrast = localStorage.getItem(highContrastKey)
  return highContrast === '1'
}

export const addPreviousWord = (word: string) => {
  localStorage.setItem(
    previousWordsKey,
    JSON.stringify([...getPreviousWords(), word])
  )
}

export const getPreviousWords = (): string[] => {
  return localStorage.getItem(previousWordsKey)
    ? JSON.parse(localStorage.getItem(previousWordsKey)!)
    : []
}

export const resetPreviousWords = () => {
  localStorage.setItem(previousWordsKey, JSON.stringify([]))
}

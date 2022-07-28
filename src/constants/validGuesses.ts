import words from 'an-array-of-english-words'

export const VALID_GUESSES = words.filter(
  (word) => word.length === 5 || word.length === 6 || word.length === 4
)

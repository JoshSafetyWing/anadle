interface StringDict {
  [key: string]: string
}

export const WORDSWITHMESSAGES: StringDict = {
  pants:
    'you wear the best pants! (ignoring the caveat that any pants you wear by definition become the best pants)',
  pretty: 'you are the prettiest person I have ever seen!',
  sexy: 'Pre Ana: 8=D, Post Ana: 8=========D',
}

export const WORDS: string[] = Object.keys(WORDSWITHMESSAGES)

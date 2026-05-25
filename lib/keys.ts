export const lowerCaseAlpha = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

export const upperCaseAlpha = lowerCaseAlpha.map(e => e.toUpperCase())

export const row1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=']
export const row1Shift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']

export const row2Shift = ['{', '}', `\\`] //
export const row2 = ['[', ']', '|']

export const row3 = [';', `'`]
export const row3Shift = [':', '"']

export const row4 = [',', `.`, '/']
export const row4Shift = ['<', '>', '?']

export const others = [' ', 'Backspace', 'ArrowLeft', 'ArrowRight']

// heat map is generated for these keys
export const heatmapKeys = [...lowerCaseAlpha, ...row2, ...row3, ...row4, ' ']

// keys that are not in this list are ignored
const keysToUse = new Set([
  ...lowerCaseAlpha,
  ...upperCaseAlpha,
  ...row1,
  ...row1Shift,
  ...row2,
  ...row2Shift,
  ...row3,
  ...row3Shift,
  ...row4,
  ...row4Shift,
  ...others
])

/** True when `key` is a single user-typed character (e.g. Persian letters from IME). */
function isTypedCharacter(key: string) {
  if (key.length === 0) return false
  // Surrogate pairs: one code point, two UTF-16 units (emoji, rare scripts).
  if (key.length === 2) {
    const code = key.charCodeAt(0)
    if (code >= 0xd800 && code <= 0xdbff) return true
  }
  if (key.length !== 1) return false
  // Reject ASCII control characters; allow all other single code units.
  const code = key.charCodeAt(0)
  return code > 0x1f && code !== 0x7f
}

export function shouldIgnore(key: string) {
  if (keysToUse.has(key)) return false
  return !isTypedCharacter(key)
}

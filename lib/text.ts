// Arabic letter forms that Persian keyboards sometimes emit instead of Persian letters.
const arabicToPersian: Record<string, string> = {
  '\u064A': '\u06CC', // ي -> ی
  '\u0643': '\u06A9', // ك -> ک
  '\u0649': '\u06CC' // ى -> ی
}

/** Normalize a single character for typing comparison (Persian / RTL-safe). */
export function normalizeTypedChar(char: string): string {
  if (!char) return char
  const normalized = char.normalize('NFC')
  return arabicToPersian[normalized] ?? normalized
}

export function charsMatch(typed: string, target: string): boolean {
  return normalizeTypedChar(typed) === normalizeTypedChar(target)
}

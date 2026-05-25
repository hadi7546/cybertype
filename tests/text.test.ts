import { charsMatch, normalizeTypedChar } from '../lib/text'

test('normalizes Arabic yeh and kaf to Persian forms', () => {
  expect(normalizeTypedChar('\u064A')).toBe('\u06CC')
  expect(normalizeTypedChar('\u0643')).toBe('\u06A9')
})

test('charsMatch accepts Persian letters and Arabic keyboard variants', () => {
  expect(charsMatch('\u06CC', '\u06CC')).toBe(true)
  expect(charsMatch('\u064A', '\u06CC')).toBe(true)
  expect(charsMatch('\u0643', '\u06A9')).toBe(true)
  expect(charsMatch('\u0633', '\u0633')).toBe(true)
})

test('charsMatch rejects mismatched characters', () => {
  expect(charsMatch('\u0633', '\u0628')).toBe(false)
})

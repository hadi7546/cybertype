// All typing data bundled for client-side access (no fetching required)
import quotes from '../public/json/quotes.json'
import persianWords from '../public/json/persian_1k.json'
import persianQuotes from '../public/json/persian-quotes.json'
import english200 from '../public/json/english-200.json'
import english1k from '../public/json/english-1k.json'
import english5k from '../public/json/english-5k.json'
import english10k from '../public/json/english-10k.json'
import wordle from '../public/json/wordle.json'
import commonlyMisspelled from '../public/json/commonly-misspelled.json'
import type { QuoteData, TypingData } from './types'

type WordListFile = {
  words: string[]
  rightToLeft?: boolean
}

type QuoteListFile = {
  quotes: QuoteData[]
  rightToLeft?: boolean
  language?: string
}

const normalizeWordList = (data: string[] | WordListFile): string[] => {
  return Array.isArray(data) ? data : data.words
}

const normalizeQuoteList = (data: QuoteData[] | QuoteListFile): QuoteData[] => {
  return Array.isArray(data) ? data : data.quotes
}

export const dataNames = [
  'Quotes',
  'Persian Quotes',
  'Persian 1K',
  'English 200',
  'English 1K',
  'English 5K',
  'English 10K',
  'Wordle',
  'Commonly Misspelled'
]

// Map data names to their data arrays
export const allData: Record<string, TypingData> = {
  Quotes: normalizeQuoteList(quotes),
  'Persian Quotes': normalizeQuoteList(persianQuotes),
  'Persian 1K': normalizeWordList(persianWords),
  'English 200': english200,
  'English 1K': english1k,
  'English 5K': english5k,
  'English 10K': english10k,
  Wordle: wordle,
  'Commonly Misspelled': commonlyMisspelled
}

export const quoteDataNames = new Set(['Quotes', 'Persian Quotes'])
export const rtlDataNames = new Set(['Persian Quotes', 'Persian 1K'])

export function isQuoteDataName(dataName: string) {
  return quoteDataNames.has(dataName)
}

export function isRtlDataName(dataName: string) {
  return rtlDataNames.has(dataName)
}

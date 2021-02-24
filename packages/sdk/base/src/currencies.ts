export enum CURRENCY_ENUM {
  GOLD = 'Celo Gold',
  DOLLAR = 'Celo Dollar',
  EURO = 'Celo Euro',
}

interface Currency {
  symbol: string
  code: string
  displayDecimals: number
}

type CurrencyObject = { [key in CURRENCY_ENUM]: Currency }

export const CURRENCIES: CurrencyObject = {
  [CURRENCY_ENUM.GOLD]: {
    symbol: '',
    code: 'cGLD',
    displayDecimals: 3,
  },
  [CURRENCY_ENUM.DOLLAR]: {
    symbol: '$',
    code: 'cUSD',
    displayDecimals: 2,
  },
  [CURRENCY_ENUM.EURO]: {
    symbol: '€',
    code: 'cEUR',
    displayDecimals: 2,
  },
}

export const resolveCurrency = (label: string): CURRENCY_ENUM => {
  if (label) {
    const lowerCaseLabel = label.toLowerCase()
    if (lowerCaseLabel.includes('dollar')) {
      return CURRENCY_ENUM.DOLLAR
    } else if (lowerCaseLabel.includes('euro')) {
      return CURRENCY_ENUM.EURO
    } else if (lowerCaseLabel.includes('gold')) {
      return CURRENCY_ENUM.GOLD
    }
  }
  console.info('Unable to resolve currency from label: ' + label)
  return CURRENCY_ENUM.DOLLAR
}

export enum SHORT_CURRENCIES {
  DOLLAR = 'dollar',
  EURO = 'euro',
  GOLD = 'gold',
}

export const currencyToShortMap = {
  [CURRENCY_ENUM.DOLLAR]: SHORT_CURRENCIES.DOLLAR,
  [CURRENCY_ENUM.EURO]: SHORT_CURRENCIES.EURO,
  [CURRENCY_ENUM.GOLD]: SHORT_CURRENCIES.GOLD,
}

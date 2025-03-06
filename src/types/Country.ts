export interface Country {
  name: {
    common: string
    official: string
    nativeName?: {
      [key: string]: {
        official: string
        common: string
      }
    }
  }
  flags: {
    png: string
  }
  population: number
  region: string
  subregion: string
  capital?: string[]
  tld: string[]
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  languages: {
    [key: string]: string
  }
  borders?: string[]
}

export type CountryCardData = Pick<
  Country,
  'name' | 'population' | 'region' | 'capital' | 'flags'
>

export type CountryDetailData = Country

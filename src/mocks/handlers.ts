import { http, HttpResponse } from 'msw'

export const mockCountries = [
  {
    name: { common: 'France' },
    flags: { png: 'france-flag.png', alt: 'Flag of France' },
    population: 67391582,
    region: 'Europe',
    capital: ['Paris'],
    subregion: 'Western Europe',
    tld: ['.fr'],
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    languages: { fra: 'French' },
    borders: ['DEU', 'ITA', 'LUX', 'BEL', 'GBR', 'ESP'],
  },
  {
    name: { common: 'Belgium' },
    flags: { png: 'belgium-flag.png', alt: 'Flag of Belgium' },
    population: 11492641,
    region: 'Europe',
    capital: ['Brussels'],
    subregion: 'Western Europe',
    tld: ['.be'],
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    languages: { nld: 'Dutch', fra: 'French', deu: 'German' },
    borders: ['FRA', 'DEU', 'NLD', 'LUX'],
  },
  {
    name: { common: 'Brazil' },
    flags: { png: 'brazil-flag.png', alt: 'Flag of Brazil' },
    population: 214893366,
    region: 'Americas',
    capital: ['Brasília'],
    subregion: 'South America',
    tld: ['.br'],
    currencies: { BRL: { name: 'Brazilian Real', symbol: 'R$' } },
    languages: { por: 'Portuguese' },
    borders: ['ARG', 'COL', 'GUF', 'GUY', 'PRY', 'PER', 'SUR', 'URY', 'VEN'],
  },
]

export const mockBorderCountries = {
  DEU: { name: { common: 'Germany' } },
  ITA: { name: { common: 'Italy' } },
  LUX: { name: { common: 'Luxembourg' } },
  BEL: { name: { common: 'Belgium' } },
  GBR: { name: { common: 'United Kingdom' } },
  ESP: { name: { common: 'Spain' } },
  FRA: { name: { common: 'France' } },
  NLD: { name: { common: 'Netherlands' } },
}

export const handlers = [
  http.get('https://restcountries.com/v3.1/all', ({ request }) => {
    const url = new URL(request.url)
    const fields = url.searchParams.get('fields')
    if (fields === 'region') {
      return HttpResponse.json(
        mockCountries.map((country) => ({ region: country.region })),
      )
    }
    return HttpResponse.json(mockCountries)
  }),

  http.get('https://restcountries.com/v3.1/region/:region', ({ params }) => {
    const region = params.region as string
    const filtered = mockCountries.filter(
      (country) => country.region === region,
    )
    return HttpResponse.json(filtered)
  }),

  http.get('https://restcountries.com/v3.1/name/:name', ({ params }) => {
    const name = params.name as string
    const country = mockCountries.find(
      (c) => c.name.common.toLowerCase() === name.toLowerCase(),
    )
    return country
      ? HttpResponse.json([country])
      : new HttpResponse(null, { status: 404 })
  }),

  http.get('https://restcountries.com/v3.1/alpha', ({ request }) => {
    const url = new URL(request.url)
    const codes = url.searchParams.get('codes')?.split(',') || []

    const matchingBorderCountries = codes
      .map(
        (code) =>
          mockBorderCountries[code as keyof typeof mockBorderCountries] || null,
      )
      .filter(Boolean)

    return HttpResponse.json(matchingBorderCountries)
  }),
]

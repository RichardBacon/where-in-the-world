export interface Country {
  name: {
    common: string
    official: string
  }
  flags: {
    png: string
  }
  population: number
  region: string
  capital?: string[]
}

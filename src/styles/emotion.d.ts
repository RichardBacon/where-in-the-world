import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    fonts: {
      body: string
      weight: {
        light: number
        semiBold: number
        bold: number
      }
    }
    colors: {
      light: {
        text: string
        background: string
        elements: string
        input: string
        placeholder: string
      }
      dark: {
        text: string
        background: string
        elements: string
      }
    }
    breakpoints: {
      mobile: string
      desktop: string
    }
  }
}

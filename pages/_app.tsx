import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles} from '../utilts/ThemeConfig'

export default function App({Component, pageProps}: AppProps) {

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark')
  }


  return <ThemeProvider theme={theme == 'dark' ? darkTheme : lightTheme}>
    <GlobalStyles/>
    <button onClick={toggleTheme}>Switch Theme</button>
    <Component {...pageProps} />
  </ThemeProvider>
}

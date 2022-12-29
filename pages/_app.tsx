import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles} from '../utilts/ThemeConfig'


export default function App({Component, pageProps}: AppProps) {

  const [theme, setTheme] = useState("dark")


  return <ThemeProvider theme={theme == 'dark' ? darkTheme : lightTheme}>
    <GlobalStyles/>
    <Component {...pageProps} theme={theme} setTheme={setTheme}/>
  </ThemeProvider>
}

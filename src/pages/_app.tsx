import Layout from '@/component/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Container, Navbar } from 'react-bootstrap'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Navbar bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand href="/About">
      Hello EC
      </Navbar.Brand>
    </Container>
      </Navbar>
  <Component {...pageProps} />
  </>
  )
}

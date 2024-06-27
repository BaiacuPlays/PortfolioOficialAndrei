import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'
import React from 'react'

function App() {
  const [usandodark, setusandodark] = useState(false)

  function trocatema() {
    setusandodark(!usandodark)
  }

  return (
    <ThemeProvider theme={usandodark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocatema={trocatema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App

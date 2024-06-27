import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import React from 'react'
import { Paragrafo2, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocatema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Paragrafo tipo="secundaria" fontSize={16}>
        Andrei Bonatto
      </Paragrafo>
      <Paragrafo2 tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Paragrafo2>
      <BotaoTema onClick={props.trocatema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

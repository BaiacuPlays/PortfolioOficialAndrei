import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import React from 'react'
import { Paragrafo2, BotaoTema, SidebarContainer, Links } from './styles'
import Linkedin2 from '../../assets/linkedin2.png'
import github from '../../assets/github.png'

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
      <Links>
        <a href="https://www.linkedin.com/in/andrei-bonatto-110144268/">
          <img src={Linkedin2} alt="Linkedin Profile" />
        </a>
      </Links>
      <Links>
        <a href="https://github.com/BaiacuPlays">
          <img src={github} alt="GitHub Profile" />
        </a>
      </Links>
      <BotaoTema onClick={props.trocatema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

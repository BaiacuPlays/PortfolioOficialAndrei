import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import React from 'react'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto
          url="https://projeto-efood-beta.vercel.app"
          nome="Projeto Efood"
          descricao="Projeto de um site de restaurantes, contendo cardápios para cada um e sistema de carrinho."
        />
      </li>
      <li>
        <Projeto
          url="https://calculadora-basica-eta.vercel.app"
          nome="Calculadora Basica"
          descricao="Uma simples calculadora feita em HTML, CSS e JavaScript."
        />
      </li>
      <li>
        <Projeto
          url="https://gcs-jquery-galeria-fotos-nine.vercel.app"
          nome="Galeria de fotos"
          descricao="Uma galeria para salvar fotos usando o url delas."
        />
      </li>

      <li>
        <Projeto
          url="https://andrei-projeto-calculadora-medias.vercel.app"
          nome="Calculadora de Medias"
          descricao="Calculadora de médias ou notas escolares."
        />
      </li>
      <li>
        <Projeto
          url="https://projetolandingpageaniversario.vercel.app"
          nome="Pagina de aniversario com timer"
          descricao="Sistema de página de convite com timer em tempo real."
        />
      </li>
      <li>
        <Projeto
          url="https://projeto4clonestardew.vercel.app"
          nome="Stardew valley"
          descricao="Uma página básica feita sobre o jogo stardew valley."
        />
      </li>
      <li>
        <Projeto
          url="https://agendadecontatos-pearl.vercel.app"
          nome="Agenda de tarefas"
          descricao="Um sistema para gerenciar tarefas contendo suas informações."
        />
      </li>
      <li>
        <Projeto
          url="https://projeto-player-musica.vercel.app"
          nome="Player de Musica"
          descricao="Um player de música que necessita de assets locais para funcionar"
        />
      </li>
      <li>
        <Projeto
          url="https://site-alltimelow.vercel.app"
          nome="Pagina de produto (Album musical)"
          descricao="Um projeto simples para a página de um produto para compra."
        />
      </li>
      <li>
        <Projeto
          url="https://sparkgameshopprojetotres.vercel.app"
          nome="Loja de games"
          descricao="Um projeto simples com informações de uma loja fictícia"
        />
      </li>
    </Lista>
  </section>
)

export default Projetos
